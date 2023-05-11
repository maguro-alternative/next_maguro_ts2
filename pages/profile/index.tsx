import Header from '../../components/Header'

export default function Profile (){
    return(
    <>
        <Header title='自己紹介' 
                description='DAAAAA' 
                icon='/zu3.png' 
                url='/' 
                image='/zu3.png' 
                twittercard=''
        ></Header>
        <h1 className="container mx-auto text-white px-10 pt-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 relative z-2">
            自己紹介
        </h1>
        <div className='container mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 relative z-2'>
            <div className="wrapper">
                <div className="textback">
                    リンク集
                    <ul className='text-left flex justify-around '>
                        <a href="http://twitter.com/sigumataityouda">
                            <img className='' height="20" src="https://img.shields.io/twitter/follow/sigumataityouda?label=Twitter&logo=twitter&style=flat" />
                        </a>
                        <a href="https://github.com/maguro-alternative">
                            <img className='' height="20" src="https://img.shields.io/github/followers/maguro-alternative?label=follow&logo=github&style=flat" />
                        </a>
                    </ul>
                    <ul className='text-left flex justify-around '>
                        <a href="https://qiita.com/maguro-alternative">
                            <img height="20" src="https://img.shields.io/badge/maguro-alternative-${color}.svg?style=social&logo=qiita" />
                        </a>  
                        <a href="https://zenn.dev/maguro_alterna">
                            <img height="20" src="https://img.shields.io/badge/マグロ-alterna-${color}.svg?style=social&logo=zenn" />
                        </a>
                    </ul>
                    使える言語
                    <ul className='text-left py-1 flex justify-around '>
                        <img className='px-1' src="https://img.shields.io/badge/Javascript-276DC3.svg?logo=javascript&style=flat"/>
                        <img className='px-1' src="https://img.shields.io/badge/-TypeScript-007ACC.svg?logo=typescript&style=flat"/>
                        <img className='px-1' src="https://img.shields.io/badge/-Python-F9DC3E.svg?logo=python&style=flat"/>
                    </ul>
                </div>
            </div>
        </div>
    </>
    )
}