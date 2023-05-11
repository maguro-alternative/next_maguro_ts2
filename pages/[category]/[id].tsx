//このページは表示されません。
// pages/category/[id].js
import Link from "next/link";
import { client } from "../../libs/client";
import type { Blog } from '../../types/blog';
import Header from '../../components/Header'
import { Pagination } from '../../components/catepart';

// 1ページごとに表示する記事の最大数
const PER_PAGE = 5; 

type Props = {
    blog: Array<Blog>;
    totalCount: number;
    //category: Array<Category>
  };
  

export default function CategoryId({ blog,totalCount }:Props) {
  // カテゴリーに紐付いたコンテンツがない場合に表示
  if (blog.length === 0) {
    return <div>ブログコンテンツがありません</div>;
  }
  return (
    <div>
      <Header title=''  
        description='DAAAAA' 
        icon='' 
        url='' 
        image='' 
        twittercard=''
      ></Header>
      <div className="container mx-auto p-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 relative z-2">
        {blog.map(article => (
          <div className="wrapper" key={article.id}>
            
              <div className="textback">
                <div className="rounded overflow-hidden shadow-lg relative z-2">
                  <img
                    className="w-full relative"
                    src={article.eye_catch.url}
                    alt="Sunset in the mountains"
                  />
                  <div className="px-6 py-4 relative">
                    <Link href={`/blog/${article.id}`} passHref>
                      <a>{article.title}</a>
                    </Link>
                  </div>
                  <div className="px-6 pt-4 pb-2 relative">
                    {article.tags && article.tags.map(article => (
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #{article.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            
          </div>
        ))}
      </div>
      <div className='text-center relative'>
        <Pagination totalCount={totalCount} categoryid={blog[0].category.id}/>
      </div>
    </div>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "category" });

  const range = (start:number, end:number) => [...Array(end - start + 1)].map((_, i) => start + i);
  const path = range(1, Math.ceil(data.totalCount / PER_PAGE)).map((repo) => `${repo}`);

  const paths = data.contents.map((content:any) => `/category/${content.id}`);

  //console.log(paths)
  //console.log(`${paths}/${path}`)
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context:any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", queries: { filters: `category[equals]${id}`, offset: (id - 1) * 5, limit: 5 } });

  return {
    props: {
      blog: data.contents,
      totalCount: data.totalCount,
    },
  };
};