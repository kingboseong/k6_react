import React from 'react'
// props 구조분해할당으로 보내는 방법
export default function MyList({ title, imgUrl, content }) {
    return (
        <div className='w-10/12 flex border rounded'>
            <div className='w-1/4 max-w-40'>
                <img src={imgUrl} alt="html" />
            </div>
            <div className='w-3/4 px-5 py-3 hover:bg-gray-200'>
                <h1 className='text-2xl font-bold text-gray-700'>
                    {title}
                </h1>
                <p className='w-full text-gray-600'>
                    {content}
                </p>
                <p className='flex w-full justify-end items-center mt-5 font-bold'>
                    <span className='text-xl '>❤️</span>
                    <span className='mx-2'>좋아요</span>
                    <span>0</span>
                </p>
            </div>
        </div>
    )
}
