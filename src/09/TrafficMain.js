import { useState, useEffect } from "react"
import TrafficNav from "./TrafficNav";

export default function TrafficMaon() {
  const [tdata, setTdata] = useState(); //전체  fatch데이터(17개 배열)

  const [C1, setC1] = useState(); //대분류(중복제거)
  const [selC1, setSelC1] = useState(); //선택된 대분류

  const [C2, setC2] = useState(); //중분류(중복제거)
  const [selC2, setSelC2] = useState(); //선택된 중분류

  const [detail, setDatail] = useState(); //상세 정보
  const [info, setInfo] = useState(); //상세 정보 info



  //자바스크립트 패치문법 (콘솔에 url로 이동시켜주는 문법)
  const getDataFetch = (url) => {
    fetch(url)
      .then(resp => resp.json()) // 비동기방식, 그냥은 못 보니 json으로 변경
      .then(data => setTdata(data.data)) // 변경 후 확인
      .catch(err => console.log(err)) // 에러가 나면 잡아줌.
  }

  //[]의존성배열, dependencyArray, 안에 값이 없으면 랜더링 후 무조건 한 번 실행
  //가져올 때 ?표까지 가져오기.. & url 띄어쓰기 x
  useEffect(() => {
    let url = `https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?`
    url = `${url}page=1&perPage=20&`
    url = `${url}serviceKey=${process.env.REACT_APP_APIKEY}`
    console.log(url)
    getDataFetch(url)
  }, []);

  //tdata setTdata에 의해서 바뀐 값이 여기 찍힘
  useEffect(() => {
    if (!tdata) return

    let tm = tdata.map(item => item['사고유형_대분류'])
    tm = new Set(tm)
    tm = [...tm] // tm을 배열로 전환
    console.log("tdata tm => ", tm)

    setC1(tm)

  }, [tdata])

  //중요 : 맨뒤에 ,[selC1]가 있어서 selC1(대분류)이 우선 만들어지고 selC2(중분류)가 만들어짐
  useEffect(() => {
    console.log("selC1: ", selC1)
    if (!tdata) return;
    let tm = tdata.filter(item => item.사고유형_대분류 === selC1)
      .map(item => item.사고유형_중분류)
  
      setInfo("") //다른건 눌렀을 떄 초기화해줌
      setC2(tm)
  }, [selC1])

  useEffect(() => {
    console.log("selC2: ", selC2)
    if (!tdata) return;
    let tm = tdata.filter(item => item.사고유형_대분류 === selC1 && item.사고유형_중분류 === selC2)  
    setDatail(tm[0])
  }, [selC2])

  useEffect(() => {
    console.log("detail: ", detail)
    if (!tdata) return;
    const keyArr = ['사고건수', '사망자수', '중상자수', '경상자수', '부상신고자수']
    let tm = keyArr.map(k => 
      <div className="flex justify-start items-center border font-bold" 
                      key = {k}>
        <div className="w-1/2 h-10 flex justify-center items-center bg-slate-300">{k}</div>
        <div className="w-1/2 flex justify-center items-center">{parseInt(detail[k]).toLocaleString()}</div>
      </div>
      )
      setInfo(tm)
  }, [detail])



  return (
    <div className="w-full h-full mt-5
                    flex flex-col
                    justify-start items-center
                    ">
      {C1 && <TrafficNav title="대분류"
        category={C1}
        sel={selC1}
        setSel={setSelC1} />
      }
      {C2 && <TrafficNav title="중분류"
        category={C2}
        sel={selC2}
        setSel={setSelC2} />
      }
      <div className="w-full
                      grid grid-cols-2
                      sm:grid-cols-3
                      md:grid-cols-5
                      gap-4">
        {info}
      </div>
    </div>
  )
}
