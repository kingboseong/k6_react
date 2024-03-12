import "./Hello.css"

function Hello() {
    let n = Math.floor(Math.random() * 99) + 1;
    //스타일 적용 방법1
    const st1 = {
        backgroundColor: "darkblue",
        color: "white"
    }

    //이런식으로 안쓰고 삼항연산자 사용.
    // let s = '';
    // if(n % 2 ===0 ) s = '짝수';
    // else s = '홀수'

    let x;

    const currentTime = new Date();

    return (
        <h1 >
            <p>
                {currentTime.toLocaleString()}
            </p>
            <spen style={st1}>HELLO!</spen>
            {/* 스타일 적용 방법2 */}
            <spen style={{ display: "inline-flex", margin: "10px" }}>
                {/* {n < 10 && "0"}
                {n} 아래 삼항연산자랑 같은 결과*/}
                {n < 10 ? `0${n}` : n}
            </spen>
            {n % 2 === 0
                ? <spen style={{ color: "red" }}>짝수</spen>
                : <spen style={{ color: "green" }}>홀수</spen>
            }
            {/* 조건부 랜더링 */}
            {n % 2 === 0 && "🍎"}
            {n % 2 === 1 && "🍏"}
            {/* <P>{x || "x는 undefinded입니다."}</P> */}

        </h1>
    );
}


export default Hello;