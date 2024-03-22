import TailButton from "../UI/TailButton"
import TailBall from "../UI/TailBall"
import { useState } from "react"

export default function Lotto() {
    const [ballTags, setballTags] = useState();

    const hendleLottoClick1 = () => {
        let nums = [];

        while (nums.length < 7) {
            let n = Math.floor(Math.random() * 45) + 1;
            if (!nums.includes(n)) nums.push(n);
        }

        nums.splice(6, 0, '+')

        const tm = nums.map((item, idx) =>
            idx === 6 ? <span key={`ball${item}`} 
                              className="font-bold mx-2 text-2xl" >
                              {item} 
                        </span>
                      : <TailBall n={item} key={`ball${item}`} />
        )

        setballTags(tm)
    }

    return (
        <div className="flex flex-col 
                        justify-center items-center
                        w-full h-full">
            <div className="flex justify-center items-center my-10">
                {ballTags}
            </div>
            <div>
                <TailButton caption='로또번호생성1'
                    hendleClick={hendleLottoClick1}
                    color='red'/>
            </div>
        </div>
    )
}
