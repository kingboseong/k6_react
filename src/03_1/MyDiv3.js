export default function MyDiv3({d11,d22,d3}) {
    return (
        <div className="w-4/5 h-4/5
                        flex flex-col justify-center items-center
                        bg-lime-500
                        text-lime-50
                        ">
            <p className="w-4/5 
                        flex justify-start
                        font-bold text-2xl
                        ">
                {`${d11} > ${d22} > ${d3}`}
            </p>
        </div>
    )
}
