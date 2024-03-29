export default function TailButton({ caption, hendleClick, color }) {
    const colorObj = {
        'red': 'bg-red-500',
        'orange': 'bg-orange-500',
        'blue': 'bg-blue-500',
    }
    const hoverObj = {
        'red': 'hover:bg-red-700',
        'orange': 'hover:bg-orange-700',
        'blue': 'hover:bg-blue-700',
    }
    const dColor = `py-4 px-2 m-2 text-white rounded-md w-full
                    ${colorObj[color]} 
                    ${hoverObj[color]}`

    return (
        <button className={dColor}
                onClick={hendleClick}>
            {caption}
        </button>
    )
}
