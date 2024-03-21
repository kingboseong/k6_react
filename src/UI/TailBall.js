export default function TailBall({ n }) {
    const bcolor = [
        'bg-red-800',
        'bg-orange-800',
        'bg-lime-800',
        'bg-blue-800',
        'bg-purple-800'
    ]

    const ballColor =
        `w-16 h-16 m-1 flex justify-center 
        items-center rounded-full
        font-bold text-xl
        ${bcolor[parseInt(n / 10)]} text-white`

    return (
        <div className={ballColor}>
            {n}
        </div>
    )
}
