import TailInput from "../UI/TailInput"
import TailButton from "../UI/TailButton"
import GalleryCard from "./GalleryCard"
import { useRef, useState, useEffect } from "react"

export default function GalleryMain() {

    const keyword = useRef()
    const [tdata, setTdata] = useState()
    const [tags, setTags] = useState()

    useEffect(() => {
        if (!tdata) return

        let tm = tdata.map(item => 
            <GalleryCard  imgUrl = {item.galWebImageUrl.replace('http://', 'https://')} 
                        title = {item.galTitle} 
                        ptitle = {item.galPhotographyLocation} 
                        ktag = {item.galSearchKeyword}
                        key = {item.galContentId} />)

        setTags(tm)

    }, [tdata])

    const getData = (w) => {
        console.log(w)
        let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?`
        url = url + `serviceKey=${process.env.REACT_APP_APIKEY}`
        url = url + `&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A`
        url = url + `&keyword=${w}&_type=json`

        fetch(url)
            .then(resp => resp.json())
            .then(data => setTdata(data.response.body.items.item))
            .catch(err => console.log(err))
    }

    const hendleFetch = () => {
        if (keyword.current.value === "") {
            alert('키워드를 입력하세요.')
            keyword.current.focus()
            return
        }

        hendleClear()
        let w = encodeURI(keyword.current.value)
        getData(w)
    }

    const hendleClear = () => {
        setTdata('')
        setTags('')
        keyword.current.focus()
    }

    return (
        <div className="w-11/12 h-full flex flex-col mt-5
                        justify-start  items-center">
            <div className='w-full p-2 grid grid-col-1 md:grid-cols-3 gap-4
                            bg-slate-100'>
                <div className="p-2">
                    <TailInput type="text"
                        inputRef={keyword}
                        ph="키워드 입력" />
                </div>
                <div className="px-3">
                    <TailButton caption='조회'
                        color='blue'
                        hendleClick={hendleFetch} />
                </div>
                <div className="px-3">
                    <TailButton caption='취소'
                        color='blue'
                        hendleClick={hendleClear} />
                </div>
            </div>
            <div className='w-full p-2 grid grid-col-1 md:grid-cols-3 gap-4
                bg-slate-100'>
            {tags}
        </div>
        </div >
    )
}
