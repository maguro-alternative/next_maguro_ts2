//このページは表示されません。

import Link from "next/link";
import { client } from "../../../libs/client";
import type { Blog } from '../../../types/blog';
import Header from '../../../components/Header'
import { Pagination } from '../../../components/tagpart';

// 1ページごとに表示する記事の最大数
const PER_PAGE = 5; 

type Props = {
    blog: Array<Blog>;
    totalCount: number;
    tag: string;
    //category: Array<Category>
  };
  

export default function TagId({ blog,totalCount,tag }:Props) {
  // カテゴリーに紐付いたコンテンツがない場合に表示
  if (blog.length === 0) {
    return <div>ブログコンテンツがありません</div>;
  }
  return (
    <div>
      <Header title='Devil May Cry' 
        description='DAAAAA' 
        icon='' 
        url='' 
        image='' 
        twittercard=''
      ></Header>
      <div className="container mx-auto p-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 relative z-2">
        {blog.map(article => (
          <div className="wrapper" key={article.id}>
            <div className="mainbar">
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
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" key="">
                        #{article.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='text-center relative'>
        <Pagination totalCount={totalCount} tagid={tag}/>
      </div>
    </div>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "tag" });

  const range = (start:number, end:number) => [...Array(end - start + 1)].map((_, i) => start + i);
  const path = range(1, Math.ceil(data.totalCount / PER_PAGE)).map((repo) => `${repo}`);

  const paths = data.contents.map((content:any) => `/tags/${content.id}`);

  console.log(data)
  console.log(`${paths}`)
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context:any) => {
  const id = context.params.tag;
  const data = await client.get({ endpoint: "blog", queries: { filters: `tags[contains]${id}`, offset: (id - 1) * 5, limit: 5 } });

  //console.log(context)
  //console.log(data)

  return {
    props: {
      blog: data.contents,
      totalCount: data.totalCount,
      tag: id,
    },
  };
};