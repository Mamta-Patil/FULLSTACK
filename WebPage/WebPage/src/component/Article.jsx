import React from 'react'
import { articledata } from '../data/article'
const Article = () => {
    return (
        <div>
            <p className='text-red-400 pt-4 font-semibold text-center'> Our Article</p>
            <p className='text-subtitle text-center font-bold'>Get More Update From <br />Our Article</p>
            <div className="grid grid-cols-3 px-10 gap-4">
                {articledata.map((article, index) => (
                    <div className='p-4 bg-white shadow-2xl'>
                        <img src={article.img} alt="" className='w-[100%]' />
                        <div className='flex pt-2'>
                            <p> {article.admin} </p>
                            <p>{article.comments} </p>
                        </div>
                        <p className='pt-2 text-title'> {article.title} </p>
                        <p className='pt-2 text-info'>Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                        <button className='mt-2'>Read More</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Article
