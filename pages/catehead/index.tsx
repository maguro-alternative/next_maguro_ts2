import { client } from '../../libs/client';
import type { Category } from '../../types/category';
import Link from 'next/link';
import Header from '../../components/Header'

type Props = {
    category:Array<Category>;
};

//export const TagHeader = async () => {
export default function TagHeader ({category}:Props){
    
    return (
        <>
            <Header title='カテゴリー一覧' 
                description='DAAAAA' 
                icon='/zu3.png' 
                url='/' 
                image='/zu3.png' 
                twittercard=''
            ></Header>
            <h1 className="container mx-auto text-white px-10 pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 relative z-2">
                カテゴリー一覧
            </h1>
            <div className='container mx-auto text-white px-0 pt-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 relative z-2'>
                <div className="wrapper">
                    <div className="textback">
                        <ul>
                            {category.map((category) => (
                                <li className='justify-around inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2' key={category.id}>
                                    <Link href={`/${category.id}/page/1`}>
                                        <a>{category.name}</a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export const getServerSideProps = async () => {
    const categoryData = await client.get({ endpoint: "category" });
  
    return {
      props: {
        category: categoryData.contents,
      }
    };
  };