import MyList from "./MyList"
import listData from "./MyListData.json"
//import listData from "./MyListData.json" 
//여기서 listData는 밑에서 사용하기 위한 변수이다(이름 마음대로 지어도 됨.).
export default function MyListMain() {
    console.log(listData)
    //map, object 공부하기
    //item = 배열의 요소 한개한개[0,1,~,7]
    //배열 요소가 오브잭트로 되어 있어서
    //MyListData에 있는 배열을 하나씩 가져와 새로운 배열들을 만들어 주는 map함수를 사용
    //그렇게 만든 배열들을 return값으로 보내줌.
    const myItems = listData.map(item => 
        <MyList title={item.title}
                imgUrl={item.imgUrl}
                content={item.content}
                key={item.title} //각각의 컨펀너트를 사용사기 위해서는 키 값이 필요함.
        />
    )
    return (
        <div className="w-10/12
                    grid grid-cols-1
                    md:grid-cols-2
                    gap-4">
            {myItems}
        </div>
    )
}
