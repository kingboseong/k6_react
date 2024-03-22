import fdata from './fooddata'
import FoodCard from './FoodCard'
import TailButton from '../UI/TailButton'
import { useState } from 'react'


export default function FoodMain() {

    const [cards, setCards] = useState([])

    let c1 = fdata.map(item => item["운영주체 분류"])
    c1 = new Set(c1)
    c1 = [...c1] //전개연산자 => 배열로 변환

    const handleList = (citem) => {

        const tm = fdata.filter(item => item["운영주체 분류"] === citem)
            .map(item =>
                <FoodCard fobj={item} key={item["사업장명"]} />
            )
        setCards(tm)
    }

    const c1Bts = c1.map(item =>
        <TailButton caption={item}
            color='blue'
            key={item}
            hendleClick={() => handleList(item)}
        />
    )

    return (
        <div className='w-full h-full flex flex-col justify-start items-center'>
            <div className='w-full p-5 md-10 flex justify-center items-center bg-blue-100'>
                {c1Bts}
            </div>
            <div className="w-full
                            grid grid-cols-1
                            md:grid-cols-2
                            xl:grid-cols-3
                            gap-2">
                {cards}
            </div>
        </div>
    )
}
