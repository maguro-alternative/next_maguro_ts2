import Link from 'next/link';
import { useRouter } from "next/router";

type count = {
  totalCount:number
}
//ページネーションの追加
export const Pagination = ({ totalCount }:count) => {
  const PER_PAGE = 5;
  const router = useRouter().asPath;
  let page_back_num:number=Number(router.slice(-1));
  let page_forward_num:number=Number(router.slice(-1));
  //console.log(page_back_num)
  if (page_back_num>1){
    page_back_num--
  }
  if(page_forward_num<Math.ceil(totalCount / PER_PAGE)){
    page_forward_num++
  }

  const range = (start:number, end:number) =>
        [...Array(end - start + 1)].map((_, i) => start + i)

  //console.log(Math.ceil(totalCount / PER_PAGE))

  return (
    <div className="wrapper">
      <div className="textback">
        <ul>
          <li className='inline-block relative m-2'>
              <Link  href={ `/blog/page/1`}>
                <a className='sm:text-2xl text-sm'>&lt;&lt;</a>
              </Link>
          </li>
          <li className='inline-block relative m-2'>
              <Link  href={ `/blog/page/${page_back_num}`}>
                <a className='sm:text-2xl text-sm'>&lt;</a>
              </Link>
          </li>
          {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
            <li className='inline-block relative m-2' key={index}>
              <Link  href={ `/blog/page/${number}`}>
                <a className='sm:text-2xl text-sm'>{number}</a>
              </Link>
            </li>
          ))}
          <li className='inline-block relative m-2'>
              <Link  href={ `/blog/page/${page_forward_num}`}>
                <a className='sm:text-2xl text-sm'>&gt;</a>
              </Link>
          </li>
          <li className='inline-block relative m-2'>
              <Link  href={ `/blog/page/${Math.ceil(totalCount / PER_PAGE)}`}>
                <a className='sm:text-2xl text-sm'>&gt;&gt;</a>
              </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}


export default Pagination;