import bank from './img/bank.png'
import busan from './img/busan.png'
import market from './img/market.png'
import { useState } from 'react'

export default function FoodCard({ fobj }) {

    const [isClick, setIsClick] = useState()

    const fimg = fobj["구분"] === "기초푸드뱅크" ? bank :
        fobj["구분"] === "기초푸드마켓" ? market : busan

    const handleIsClick = () => {
        setIsClick(!isClick)
    }

    return (
        <div className='w-11/12 p-1 flex justify-center items-center border rounded}
                        'onClick={handleIsClick}>
            <div className='w-1/6 max-w-xl flex justify-center items-center'>
                <img src={fimg} alt={bank} />
            </div>
            <div className='w-5/6 p-3 mx-3 flex flex-col justify-between items-start'>
                <h1 className='text-2xl font-bold text-gray-700'>{fobj["사업장명"]}</h1>
                <h2 className='text-xl font-bold text-gray-600'>{fobj["운영주체명"]}</h2>
                <p className='text-sm font-bold text-gray-500'>{fobj["사업장 소재지"]}</p>
                <div className='w-full h-8 mt-5 p-2 text-sm  bg-slate-800 text-white'>
                    {isClick && `Tel : ${fobj["연락처(대표번호)"]} , Fax :  ${fobj["팩스번호"]}`}
                </div>
            </div>
        </div>
    )
}

