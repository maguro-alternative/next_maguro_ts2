import { client } from '../libs/client';
import type { Blog } from '../types/blog';
import type { Category } from '../types/category';
import type { Tag } from '../types/tag';
import Link from 'next/link';
import MicroCMSImage from '../components/microcmsimage'

import Header from '../components/Header'

import Dayjs from 'dayjs'

//const router = useRouter(); 

type Props = {
  blog: Array<Blog>;
  totalCount: number;
  category:Array<Category>;
  tag:Array<Tag>;
};

export default function Home({ blog,totalCount,category,tag }: Props) {
  //console.log(tag.flat())
  //{tag.map((tag) => (console.log(tag)))}
  
  return (
    <>
      <Header title='マグロポートフォリオ用トップページ' 
        description='DAAAAA' 
        icon='/zu3.png' 
        url='/' 
        image='/zu3.png' 
        twittercard=''
      ></Header>

      <h1 className="text-1 px-5 pt-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 relative z-2 container mx-auto text-white xl:px-10 xl:pt-20 grid grid-cols-1">
        ようこそ！！！
        マグロポートフォリオ用トップページへ！！！
      </h1>

      <div className="textback mx-auto relative sm:text-xs lg:text-lg">
        <h1>自己紹介</h1>
        <div className='sm:block md:flex lg:flex'>
          <img className='w-4/12 h-4/6 sm:float-none md:float-left lg:float-left' src='./img/bokuuchuemon.png'></img>
          <div className='sm:float-none md:float-left lg:float-left'>
            
            <h5>名前:マグロ</h5>
            <h5>本名:佐々木陽貴</h5>
            <h5>所属:日本大学工学部 情報工学科 学部4年→株式会社くふうカンパニー</h5>
            <h5>リンク集</h5>

            <div className='sm:block md:flex lg:flex'>
              {/*twitter*/}
              <a 
                href='https://twitter.com/sigumataityouda'
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img 
                  className='sm:float-none md:float-left lg:float-left'
                  src='https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white'
                ></img>
              </a>
              {/*instagram*/}
              <a 
                href='https://www.instagram.com/gi_se_so/'
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img 
                  className='sm:float-none md:float-left lg:float-left'
                  src='https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white'
                ></img>
              </a>
              {/*github*/}
              <a 
                href='https://github.com/maguro-alternative'
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img 
                  className='sm:float-none md:float-left lg:float-left'
                  src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white'
                ></img>
              </a>
              
            </div>

            <h5>Zenn</h5>
            <div className='sm:block md:flex lg:flex'>
              {/*zenn*/}
              <a 
                href="https://zenn.dev/maguro_alterna"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img 
                  className='sm:float-none md:float-left lg:float-left'
                  src="https://badgen.org/img/zenn/maguro_alterna/likes?style=plastic" 
                  alt="Likes" 
                />
              </a>
              <a 
                href="https://zenn.dev/maguro_alterna"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img 
                  className='sm:float-none md:float-left lg:float-left'
                  src="https://badgen.org/img/zenn/maguro_alterna/articles?style=plastic" 
                  alt="Articles"
                />
              </a>
              <a 
                href="https://zenn.dev/maguro_alterna"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img 
                  className='sm:float-none md:float-left lg:float-left'
                  src="https://badgen.org/img/zenn/maguro_alterna/followers?style=plastic" 
                  alt="Followers"
                />
              </a>
            </div>

            <h5>Qiita</h5>
            <div className='sm:block md:flex lg:flex'>
              {/*qitta*/}
              <a 
                href="https://qiita.com/maguro-alternative"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img 
                  className='sm:float-none md:float-left lg:float-left'
                  src="https://badgen.org/img/qiita/maguro-alternative/contributions?style=plastic" 
                  alt="Contributions" 
                />
              </a>
              <a 
                href="https://qiita.com/maguro-alternative"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img 
                  className='sm:float-none md:float-left lg:float-left'
                  src="https://badgen.org/img/qiita/maguro-alternative/followers?style=plastic" 
                  alt="Followers" 
                />
              </a>
              <a 
                href="https://qiita.com/maguro-alternative"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img 
                  className='sm:float-none md:float-left lg:float-left'
                  src="https://badgen.org/img/qiita/maguro-alternative/articles?style=plastic" 
                  alt="Articles"
                />
              </a>
            </div>

            <h5>Use Games</h5>
            <div className='sm:block md:flex lg:flex'>
              {/*Nintendo Switch*/ }
              <img 
                className='sm:float-none md:float-left md:w-3/12 md:h-5/6 lg:float-left xl:w-max xl:h-max'
                src="https://img.shields.io/badge/Nintendo_Switch-E60012?style=for-the-badge&logo=nintendo-switch&logoColor=white" 
              />
              {/*Nintendo 3DS*/ }
              <img 
                className='sm:float-none md:float-left md:w-3/12 md:h-5/6 lg:float-left xl:w-max xl:h-max'
                src="https://img.shields.io/badge/Nintendo_3DS-D12228?style=for-the-badge&logo=nintendo-3ds&logoColor=white" 
              />
              {/*STEAM*/}
              <img 
                className='sm:float-none md:float-left md:w-3/12 md:h-3/6 lg:float-left xl:w-max xl:h-max'
                src="https://img.shields.io/badge/Steam-000000?style=for-the-badge&logo=steam&logoColor=white" 
              />
              {/*Epic*/}
              <img 
                className='sm:float-none md:float-left md:w-3/12 md:h-3/6 lg:float-left xl:w-max xl:h-max'
                src="https://img.shields.io/badge/Epic%20Games-313131?style=for-the-badge&logo=Epic%20Games&logoColor=white" 
              />
            </div>

            <h5>Skill</h5>
            <div className='sm:block md:flex lg:flex '>
              {/*python*/}
              <img 
                className='sm:float-none md:float-left lg:float-left md:w-1/12 md:h-3/6 xl:w-2/12'
                src="https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue" 
              />
              {/*JavaScript*/}
              <img 
                className='sm:float-none md:float-left lg:float-left md:w-1/12 md:h-3/6 xl:w-2/12'
                src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" 
              />
              <img 
                className='sm:float-none md:float-left lg:float-left md:w-1/12 md:h-3/6 xl:w-2/12'
                src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" 
              />
              <img 
                className='sm:float-none md:float-left lg:float-left md:w-1/12 md:h-3/6 xl:w-2/12'
                src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" 
              />
              <img 
                className='sm:float-none md:float-left lg:float-left md:w-1/12 md:h-1/6 xl:w-2/12'
                src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white" 
              />
              <img 
                className='sm:float-none md:float-left lg:float-left md:w-1/12 md:h-3/6 xl:w-2/12'
                src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" 
              />
              <img 
                className='sm:float-none md:float-left lg:float-left md:w-1/12 md:h-3/6 xl:w-2/12'
                src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" 
              />
              <img 
                className='sm:float-none md:float-left lg:float-left md:w-1/12 md:h-3/6 xl:w-2/12'
                src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" 
              />
              <img 
                className='sm:float-none md:float-left lg:float-left md:w-1/12 md:h-3/6 xl:w-2/12'
                src="https://img.shields.io/badge/fastapi-109989?style=for-the-badge&logo=FASTAPI&logoColor=white" 
              />
            </div>

          </div>
        </div>
      </div>
      <h1 className="text-1 px-5 pt-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 relative z-2 container mx-auto text-white xl:px-10 xl:pt-20 grid grid-cols-1">
        最新記事
      </h1>
      
      <div className="sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 relative z-2 xl:container mx-auto p-1 grid grid-cols-1">
        {blog.map(article => (
          <div className="" key={article.id}>
            <div className="textback mx-auto">
              <div className="rounded overflow-hidden shadow-lg relative z-2">
                <MicroCMSImage
                  src={article.eye_catch.url}
                  width={article.eye_catch.width}
                  height={article.eye_catch.height}
                  alt="Sunset in the mountains"
                />
                <div className="sm:px-2 sm:py-1 text-1 xl:px-6 xl:py-4 relative">
                  <Link href={`/blog/${article.id}/`} passHref>
                    <a>{article.title}</a>
                  </Link>
                </div>
                <div className="sm:px-0 sm:py-1 sm:pb-1 text-1 xl:px-3 xl:pt-2 xl:pb-1 text-sm relative">
                  作成日時 {Dayjs(new Date(article.createdAt)).format('YYYY-MM-DD hh:mm:ss')}<br/>
                  最終更新 {Dayjs(new Date(article.updatedAt)).format('YYYY-MM-DD hh:mm:ss')}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </>
  );
}    
export const getStaticProps = async () => {
  const data = await client.get(
    { 
      endpoint: 'blog' ,
      queries: {  
        offset: 0, 
        limit: 3,
        fields:"title,main_image?q=40?dpr=2&?&w=200&h=200,id,createdAt,updatedAt,author.name,eye_catch" 
      } 
    }
  );
  
  //const categoryData = await client.get({ endpoint: "category" });
  //const tagData = await client.get({ endpoint: "tag" });

  //console.log(tagData)
  //console.log(data.contents[0].tags[0].name)

  return {
    props: {
      blog: data.contents,
      //category: categoryData.contents,
      totalCount: data.totalCount,
      //tag: tagData.contents
    },
    //category: categoryData.contents,
  };
};
