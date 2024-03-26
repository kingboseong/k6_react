import BoxOfficeData from "./BoxOffice.json"
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { CgLoadbar } from "react-icons/cg";
import { useState, useEffect, useRef } from "react";
import TailInput from "../UI/TailInput";

export default function BoxOfficeTbRe() {

    const [boxList, setBoxList] = useState([])
    const [trs, setTrs] = useState()
    const boxRef = useRef()
    const [selMv, setselMv] = useState();
                 
    useEffect(() => {
        const tm = boxList.map(item =>
            <tr key={item.movieCd}
                onClick={() => { handleClick(item) }}
                className="h-10 p-1 hover:bg-blue-100 hover:font-bold">
                <th className="text-center">
                    <span className="inline-flex ">
                        {item.rank}
                    </span>
                </th>
                <th>{item.movieNm}</th>
                <th>{parseInt(item.salesAmt).toLocaleString()}</th>
                <th>{parseInt(item.audiCnt).toLocaleString()}</th>
                <th className="pt-3 flex justify-center items-center">
                    {parseInt(item.rankInten) === 0 ? <CgLoadbar />
                        : parseInt(item.rankInten) > 0 ? <FaArrowUp className="text-red-600" />
                            : <FaArrowDown className="text-blue-600" />
                    }
                    {parseInt(item.rankInten) !== 0 && Math.abs(item.rankInten)}
                </th>
            </tr>
        )
        setTrs(tm)
    },[boxList])

    const handleClick = (i) => {
        console.log(i)
        setselMv(i);
    }

    //boxoffice 데이터 fetch
    const getData = (dt) => {
        let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`
        url = url + `key=${process.env.REACT_APP_MV_API}&targetDt=${dt}`
        
        console.log(url)

        fetch(url)
        .then(resp => resp.json()) //resp, data = 변수명(아무거나ok)
        .then(data => setBoxList(data.boxOfficeResult.dailyBoxOfficeList))
        .catch(err => console.log(err))
    }
    const handleSelDate = () => {
        console.log(boxRef.current.value.replaceAll('-','')) //replaceAll는 첫번쨰를 두번째로 바꿔줌
        getData(boxRef.current.value.replaceAll('-','')) // 여기 getData가 위에 dt로 들어가고 {dt}로 들어감.
    }

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="w-4/5 flex justify-end items-center">
                <span className="text-sm mx-5 font-bold">날짜 선택 :</span>
                <div className="flex">
                    <TailInput type="date"
                        inputRef={boxRef}
                        handleChange={handleSelDate} // onChange가 일어날때마다 fetch가 일어나 데이터를 가져와야 함
                        ph="" />
                </div>
            </div>
            <table className="w-4/5 border">
                <thead>
                    <tr className="h-10 text-center bg-slate-700 text-white">
                        <th className="w-14">순위</th>
                        <th>영화명</th>
                        <th className="w-1/5">매출액</th>
                        <th className="w-1/5">관객수</th>
                        <th className="w-30">증감율</th>
                    </tr>
                </thead>
                <tbody>
                    {trs}
                </tbody>
            </table>
            <div className="w-4/5  h-10 text-center bg-slate-700 text-white">
                {selMv === undefined && '영화를 선택해 주세요'}
                {selMv &&
                    `[${selMv.movieCd}] ${selMv.movieNm} :
                    누적관객수 : ${parseInt(selMv.audiAcc).toLocaleString()}명
                    누적매출액 : ${parseInt(selMv.salesAcc).toLocaleString()}명
                    `
                }
            </div>
        </div>
    )
}