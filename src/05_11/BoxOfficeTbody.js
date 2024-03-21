import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { CgLoadbar } from "react-icons/cg";

export default function BoxOfficeTbody({ MovieList, setselMv }) {
    const handleClick = (i) => {
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
        <tbody>
            {trs}
        </tbody>
    )
}
