import MyDiv3 from "./MyDiv3"

export default function MyDiv2({d1,d2,d3}) {
    return (
        <div className="w-4/5 h-2/3
                        flex flex-col justify-center items-center
                        bg-lime-700
                        text-lime-50
                        ">
            <p className="w-4/5 
                        flex justify-start
                        font-bold text-2xl
                        ">
                {`${d1} > ${d2}`}
            </p>
            <MyDiv3 d11={d1} d22={d2} d3={d3} />
        </div>
    )
}
