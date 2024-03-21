export default function BoxOfficeInfo({selMv}) {
    return (
        <div className="w-4/5  h-10 text-center bg-slate-700 text-white">
            {selMv === undefined && '영화를 선택해 주세요'}
            {selMv &&
                `[${selMv.movieCd}] ${selMv.movieNm} :
        누적관객수 : ${parseInt(selMv.audiAcc).toLocaleString()}명
        누적매출액 : ${parseInt(selMv.salesAcc).toLocaleString()}명
        `
            }
        </div>
    )
}
