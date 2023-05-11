import { client } from '../../libs/client';
import type { Tag } from '../../types/tag';
import Link from 'next/link';
import Header from '../../components/Header'

type Props = {
    tag:Array<Tag>;
};

//export const TagHeader = async () => {
export default function TagHeader ({tag}:Props){
    
    return (
        <>
            <Header title='タグ一覧' 
                description='DAAAAA' 
                icon='/zu3.png' 
                url='/' 
                image='/zu3.png' 
                twittercard=''
            ></Header>
            <h1 className="container mx-auto text-white px-10 pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 relative z-2">
                タグ一覧
            </h1>
            <div className='container mx-auto text-white px-0 pt-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 relative z-2'>
                <div className="wrapper">
                    <div className="textback">
                        <ul>
                            {tag.map((tag) => (
                                <li className='justify-around text-white relative z-2 inline-block bg-red-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2' key={tag.id}>
                                    <Link href={`/tags/${tag.id}/page/1`}>
                                        <a>{tag.name}</a>
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
    const tagData = await client.get({ endpoint: "tag" });
  
    return {
      props: {
        tag: tagData.contents
      }
    };
  };