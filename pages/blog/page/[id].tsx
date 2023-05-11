import Link from 'next/link';
import MicroCMSImage from '../../../components/microcmsimage'
import { useRouter } from "next/router";
import type { Blog } from '../../../types/blog';
import { client } from '../../../libs/client';
import { Pagination } from '../../../components/part';
import Header from '../../../components/Header';

import Dayjs from 'dayjs'


// 1ページごとに表示する記事の最大数
const PER_PAGE = 5; 

type Props = {
  blog: Array<Blog>;
  totalCount: number;
};
// blog/page/{number}
export default function BlogPageId({ blog, totalCount }:Props) {
  const router = useRouter(); 
  const titlename=`記事一覧 ${router.query.id}ページ目`
  console.log(Dayjs(new Date("2022-09-07T23:10:43.158Z")).format('YYYY-MM-DD'))
  return (
    <>
      <Header title={titlename} 
        description='DAAAAA' 
        icon='/zu3.png' 
        url={router.asPath} 
        image='/zu3.png' 
        twittercard=''
      ></Header>
      <h1 className="text-1 px-5 pt-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 relative z-2 container mx-auto text-white xl:px-10 xl:pt-20 grid grid-cols-1">
        {titlename}
      </h1>
      <div className="sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 relative z-2 xl:container mx-auto p-1 grid grid-cols-1">
        {blog.map(article => (
          <div className="wrapper" key={article.id}>
            <div className="mainbar">
              <div className="textback">
                <div className="rounded overflow-hidden shadow-lg relative z-2">
                  <MicroCMSImage
                    src={article.eye_catch.url}
                    width={article.eye_catch.width}
                    height={article.eye_catch.height}
                  />
                  <div className="sm:px-2 sm:py-1 text-1 xl:px-6 xl:py-4 relative">
                    <Link href={`/blog/${article.id}`} passHref>
                      <a>{article.title}</a>
                    </Link>
                  </div>
                  {article.category &&
                    <div className="sm:px-0 sm:pt-0 text-1 xl:px-6 xl:pt-4 relative">
                      <a>カテゴリー</a><br/>
                      <Link href={`/${article.category.id}/page/1`} passHref>
                        <a className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                          {article.category.name}
                        </a>
                      </Link>
                    </div>
                  }
                  <div className="sm:px-0 sm:pt-0 text-1 xl:px-6 xl:pt-4 relative">
                    <a>タグ</a><br/>
                    {article.tags && article.tags.map(article => (
                      <Link href={`/tags/${article.id}/page/1`} passHref key="">
                        <a className="inline-block bg-red-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                          #{article.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                  <div className="sm:px-0 sm:py-1 sm:pb-1 text-1 xl:px-3 xl:pt-2 xl:pb-1 text-sm relative">
                    作成日時 {Dayjs(new Date(article.createdAt)).format('YYYY-MM-DD hh:mm:ss')}<br/>
                    最終更新 {Dayjs(new Date(article.updatedAt)).format('YYYY-MM-DD hh:mm:ss')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='text-center relative'>
        <Pagination totalCount={totalCount} />
      </div>
    </>
  );
}

// 動的なページを作成
// 動的なページを作成
export const getStaticPaths = async () => {
  const repos = await client.get({ endpoint: "blog" });


  const pageNumbers = [];


  const range = (start:number, end:number) => [...Array(end - start + 1)].map((_, i) => start + i);


  const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map((repo) => `/blog/page/${repo}`);

  //console.log(paths)

  return { paths, fallback: false };
};

// データを取得
export const getStaticProps = async (context:any) => {
  const id = context.params.id;

  const data = await client.get(
    { 
      endpoint: "blog", 
      queries: { 
        offset: (id - 1) * 5,
        limit: 5 
      } 
    }
  );

  //console.log(data)
  return {
    props: {
      blog: data.contents,
      totalCount: data.totalCount,
    },
  }
}
