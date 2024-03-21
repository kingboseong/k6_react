import BoxOfficeData from "./BoxOffice.json"
import BoxOfficeTHead from "./BoxOfficeTHead";
import BoxOfficeTbody from "./BoxOfficeTbody";
import BoxOfficeInfo from "./BoxOfficeInfo";
import { useState } from "react";

export default function BoxOfficeTb() {
    const MovieList = BoxOfficeData.boxOfficeResult.dailyBoxOfficeList
    const [selMv, setselMv] = useState();

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <table className="w-4/5 border">
                <BoxOfficeTHead />
                <BoxOfficeTbody MovieList={MovieList} setselMv={setselMv}/>
            </table>
                <BoxOfficeInfo selMv={selMv}/>
        </div>
    )
}