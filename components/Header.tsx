import Link from 'next/link';
import Head from 'next/head'
import { useRouter } from "next/router";
import { useState } from "react";

interface Props {
  title: string;
  description: string;
  icon: string;
  url: string;
  image: string;
  twittercard:string;
}
// <script defer src="//code.createjs.com/1.0.0/easeljs.min.js"></script>
export default function Header(
  { title, 
    description, 
    icon, 
    url, 
    image, 
    twittercard 
  }: Props
) {
  const asurl=`https://next-magurotaityouda.netlify.app${url}/`
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenuOpen = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <header className="body-font z-2">
      
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href={icon}></link>
        <meta property="og:url" content={asurl}></meta>
        <meta property="og:image" content={image} />
        <meta property="og:type" content=" website" />
        <meta property="og:locale" content="ja_JP" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="自分のTwitterのユーザー名" />
      </Head>
      <div className="container fixed px-3 z-20 xl:left-20">
        <header className="flex justify-between py-1 md:max-w-2xl lg:max-w-4xl xl:max-w-full grid-cols-1">
          <h1 className='text-white'>Maguro</h1>

          {/* humbergerbutton */}
          <button
            onClick={handleMenuOpen}
            type="button"
            className="z-20 space-y-2"
          >
            <div
              className={
                openMenu
                  ? "w-8 h-0.5 bg-gray-600 translate-y-2.5 rotate-45 transition duration-500 ease-in-out"
                  : "w-8 h-0.5 bg-gray-700 transition duration-500 ease-in-out"
              }
            />
            <div
              className={
                openMenu
                  ? "opacity-0 transition duration-500 ease-in-out"
                  : "w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out"
              }
            />
            <div
              className={
                openMenu
                  ? "w-8 h-0.5 bg-gray-600 -rotate-45 transition duration-500 ease-in-out"
                  : "w-8 h-0.5 bg-gray-500 transition duration-500 ease-in-out"
              }
            />
          </button>

          {/* nav ?:メニュー展開  :メニュー閉じ */}
          <nav
            className={
              openMenu
                ? 'z-10 text-left fixed bg-slate-200 right-0 top-0 h-screen flex flex-col justify-start pt-8 px-3 grid-cols-1 sm:w-7/12 md:w-4/12 lg:3/12 xl:w-2/12'
                : 'z-10 fixed right-[-100%]'
            }
          >
            <ul className="mt-6">
              <li className="p-1"><a href='/'>トップ</a></li>
              <li className="p-1"><a href="/blog/page/1/">記事</a></li>
              <li className="p-1"><a href="/catehead/">カテゴリ</a></li>
              <li className="p-1"><a href="/taghead/">タグ</a></li>
              <li className="p-1"><a href="/profile/">自己紹介</a></li>
            </ul>
          </nav>
        </header>
      </div>
    </header>
  );
}
