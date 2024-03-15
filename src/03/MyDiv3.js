export default function MyDiv3(props) {
    return (
        <div className="w-4/5 h-4/5
                        flex flex-col justify-center items-start
                        bg-lime-500
                        text-lime-50
                        ">
            <p className="w-4/5 
                        flex justify-start
                        font-bold text-2xl
                        ">
                {`${props.d11} > ${props.d22} > ${props.d3}`}
            </p>
        </div>
    )
}
