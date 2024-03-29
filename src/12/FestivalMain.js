
import { useRef, useState, useEffect } from "react"
import GalleryCard from "../11/GalleryCard"


export default function GalleryMain() {

    //부산 축제 전체 데이터
    const [tdata, setTdata] = useState()
    const [guname, setGuname] = useState()
    const [opTags, setOpTags] = useState()
    const [cardTags, setCardTags] = useState()

    //select 값
    const selRef = useRef()

    //select 선택
    const hendleSelGu = () => {

        if (!tdata) return;
        const tm = tdata.filter(item => item.GUGUN_NM === selRef.current.value)
        
        .map(item => 
            <GalleryCard  imgUrl = {item.MAIN_IMG_NORMAL} 
                        title = {item.TITLE} 
                        ptitle = {item.ADDR1} 
                        ktag = {item.MAIN_PLACE}
                        key = {item.UC_SEQ} />)

        setCardTags(tm)
    }
    
    useEffect(() => {
        let url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?`
        url = url + `serviceKey=${process.env.REACT_APP_APIKEY}`
        url = url + `&pageNo=1&numOfRows=40&resultType=json`

        getData(url)
    }, [])

    const getData = (url) => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => setTdata(data.getFestivalKr.item))
            .catch(err => console.log(err))
    }

    //구정보 만들기
    useEffect(() => {
        console.log(tdata)
        if (!tdata) return

        let tm = tdata.map(item => item.GUGUN_NM)
        tm = new Set(tm)
        tm = [...tm].sort()

        setGuname(tm)
    }, [tdata])

    //구데이터 정보
    useEffect(() => {
        if (!guname) return
        let tm = guname.map(item =>
            < option value={item} key={item}> {item} </option >
        )

        setOpTags(tm)
    }, [guname])

    
    return (
        <div className="w-full h-full flex flex-col justify-start items-center">
            <form className="w-full mx-auto flex justify-center items-center">
                <label htmlFor="gu" className="w-1/3 block mb-2 text-sm font-medium 
                                            text-gray-900 dark:text-white">지역 선택</label>
                <select id="gu"
                    onChange={hendleSelGu}
                    ref={selRef}
                    className="w-2/3 bg-gray-50 border border-gray-300 
                                        text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                                        focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 
                                        dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                                        dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>구 선택</option>
                    {opTags}
                </select>
            </form>
            <div className='w-full p-2 grid grid-col-1 md:grid-cols-3 gap-4
                bg-slate-100'>
            {cardTags}
        </div>
        </div>
    )
}