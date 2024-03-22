import { useState, useEffect } from "react";

function MyClockTime() {

    const [currentTime, setCurrentTime] = useState(new Date())

    //맨 첨에 useEffect가 콘솔에 찍히고 tm이 바뀔때 마다 또 콘솔에 찍히는데, 초기화 됐을 때도 한번 찍음.

    //컴퍼넌트 생성시 최초 1회 콘솔 출력
    useEffect(() => {
        const t = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000)
        console.log("[] => ", currentTime)

        return () => { clearInterval(t) }
    }, []);

    //tm변수가 바뀔때 마다 실행(초기화 됐을 때도 찍히고 바뀌고 또 찍힘)
    useEffect(() => {
        console.log("[] => ", currentTime)
    }, [currentTime])

    // //랜더링이 일어날 때마다 무조건 실행.
    // useEffect(() => {
    //     console.log("[]이 없는 경우 => ", currentTime)
    // })

    return (
        <h1 className="text-2xl font-bold text-gray-300">
            {currentTime && `현재시각 : ${currentTime.toLocaleString()}`}
        </h1>
    );
}
export default MyClockTime