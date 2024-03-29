

export default function GalleryCard({ imgUrl, title, ptitle, ktag }) {

    // probs 사용하면 밑에처럼 안써도 됨.
    // const imgUrl = gdata.galWebImageUrl
    // const title = gdata.galTitle
    // const ptitle = gdata.galPhotographyLocation
    // let ktag = gdata.galSearchKeyword

    if (ktag.includes(',')) {
        ktag = ktag.split(',').map(item =>  // 중괄호쓰면 꼭 리턴이 있어야 함!!
            <span key={item}
                className='inline-block bg-gray-200
                        rounded-full px-3 py-0
                        text-sm font-semibold
                        text-gray-700 mr-2 mb-2'>
                {item}
            </span>
        )
    }
    else {
        ktag = <span
            className='inline-block bg-gray-200
                    rounded-full px-3 py-0
                    text-sm font-semibold
                    text-gray-700 mr-2 mb-2'
        >
            {ktag}
        </span>
    }

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={imgUrl} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                    {title}
                </div>
                <div className="text-gray-700 text-base">
                    {ptitle}
                </div>
            </div>
            <div className="px-6 pt-4 pb-2">
            {ktag}
            </div>
        </div>
    )
}


