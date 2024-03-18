import {GiRoyalLove} from "react-icons/gi";
import {useState} from "react"

// props 구조분해할당으로 보내는 방법
export default function MyList({ title, imgUrl, content }) {
    //지역변수
    let cnt = 0

    //state 변수[변수, 변수를 바꿀 변수]
    const [stCnt, setStCnt] = useState(0);

    const handleLike = (t) => {
        console.log('handleLike' + t)
        cnt += 1
        console.log(`cnt = ${cnt}`)
        setStCnt(stCnt + 1);
    }

    return (
        <div className='w-10/12 flex border rounded'>
            <div className='w-1/4 max-w-40'>
                <img src={imgUrl} alt={title} />
            </div>
            <div className='w-3/4 px-5 py-3 hover:bg-gray-200'>
                <h1 className='text-2xl font-bold text-gray-700'>
                    {title}
                </h1>
                <p className='w-full text-gray-600'>
                    {content}
                </p>
                <p className='flex w-full justify-end items-center mt-5 font-bold'>
                    <span className='text-xl' onClick={() => {handleLike(title)}}>
                        <GiRoyalLove className='text-red-400 hover:text-zinc-800'/>
                    </span>
                    <span className='mx-2'>좋아요</span>
                    <span>{stCnt}</span>
                </p>
            </div>
        </div>
    )
}

//콘솔에서 누르면 바뀌는 것을 요소에서도 바뀌게 하는 방법이 react의 핵심 = hook.
//hook중 기본인 statehook
