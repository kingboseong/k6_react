import BoxOfficeData from "./BoxOffice.json"
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { CgLoadbar } from "react-icons/cg";
import { useState } from "react";

export default function BoxOfficeTb() {
    console.log(BoxOfficeData)
    const MovieList = BoxOfficeData.boxOfficeResult.dailyBoxOfficeList
    
    //tr에 있는 handleClick(item)이 밑에 i로 왔다.
    //state특성상 stCnt변수를 setselMv변수에 저장 후 다시 selMv에 준다.
    const [selMv, setselMv] = useState();
    const handleClick = (i) => {
        console.log(i)
        setselMv(i);
    }

    const trs = MovieList.map(item =>
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

    return (
        <div className="w-full flex flex-col justify-center items-center">
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