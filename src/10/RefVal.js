import TailButton from "../UI/TailButton"
import { useState, useEffect, useRef } from "react";

export default function RefVal() {
    //버튼을 누르면 각각의 값이 증가되게 만들거임
    let cnt = 0                            // 컨포넌트 변수
    const [stCnt, setStCnt] = useState(0)   // State 변수 ,  0은 초기값이라서 없으면 Nan
    const refCnt = useRef(0)               // Ref 변수 

    const hendleLocal = () => {
        cnt = cnt + 1
        console.log('cnt = ', cnt)
    }

    const hendleState = () => {
        setStCnt(stCnt + 1)
    }

    const hendleRef = () => {
        refCnt.current = refCnt.current + 1
        console.log(refCnt.current)
    }
    
    useEffect(() => {
        console.log("stCnt: ", stCnt)
    },[stCnt])

    return (
        <div className="w-full
                        grid grid-cols-3
                        text-center
                        gap-3">
            <div>
                컴포넌트 변수(지역변수) : {cnt}
            </div>
            <div>
                State 변수(지역변수) : {stCnt}
            </div>
            <div >
                {/* Ref 변수는 호출시 .current 해야 오류가 안남. */}
                Ref 변수(지역변수) : {refCnt.current}  
            </div>
            <div>
                <TailButton caption='컴포넌드 변수'
                            color='blue'
                            hendleClick={hendleLocal}/>
            </div>
            <div>
                <TailButton caption='State 변수'
                            color='blue'
                            hendleClick={hendleState}/>
            </div>
            <div>
                <TailButton caption='Ref 변수'
                            color='blue'
                            hendleClick={hendleRef}/>
            </div>
        </div>
    )
}
