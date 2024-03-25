import TailInput from "../UI/TailInput"
import TailButton from "../UI/TailButton"
import { useState, useEffect, useRef } from "react"

export default function RefInput() {

    const inputRef = useRef()
    const [bts, setBts] = useState([])
    const [tags, setTags] = useState([])

    const hendleAdd = () => {
        if (inputRef.current.value === " ") {
            alert('값을 입력하세요')
            inputRef.current.focus();
            return
        }
        setBts([...bts, inputRef.current.value])
    }

    useEffect(() => {
        inputRef.current.value = '';
        inputRef.current.focus()
        let tm = bts.map((item, idx) =>
            <TailButton caption={item}
                key={`bt${idx}`}
                color='orange' />
        )
        setTags(tm)
    }, [bts])

    const hendleRemove = () => {
        setBts([])
        inputRef.current.value = ''
        inputRef.current.focus()
    }

    return (
        <div className="w-11/12 flex flex-col 
                        justify-center items-center">
            <div className="w-full flex justify-center items-center">
                <div className="w-1/2 flex justify-center items-center">
                    <TailInput type = 'text'
                        inputRef = {inputRef}
                        ph="값입력" />
                </div>
                <div className="w-1/2 flex justify-center items-center">
                    <TailButton caption='등록'
                        color='blue'
                        hendleClick={hendleAdd} />
                    <TailButton caption='취소'
                        color='blue'
                        hendleClick={hendleRemove} />
                </div>
            </div>
            <div className="w-full border p-5 bg-slate-100">
                {tags}
            </div>
        </div >
    )
}
