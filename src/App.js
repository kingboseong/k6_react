import './App.css';
import { FaReact } from "react-icons/fa";
import { CiHome } from "react-icons/ci";
// import HelloCss from './02/HelloCss';
// import MainHeader from './01/MainHeader';
// import Hello from './01/Hello';
// import MyDiv from './03_1/MyDiv1';
// import MyList from './04/MyListMain';
// import MyListMain from './04/MyListMain';
import BoxOfficeTb from './05/BoxOfficeTb';

function App() {
  return (
    //Fragment태그 <></> = 쓸데업는 div 태그르 쓰고싶지 않을 때 사용.
    // tailwind 씀
    <div className='flex flex-col w-full 
                    max-w-screen-xl
                    h-screen mx-auto
                    overscroll-y-auto
                    '>
      <header className='flex justify-between
                        items-center
                        p-10 h-20 text-xl 
                        font-bold
                        text-blue-800 bg-slate-300
                        '>
        <div><FaReact className='text-6xl'/></div>
        <div><CiHome className='text-4xl' /></div>
      </header>
      <main className='grow flex flex-col
                      justify-center items-center
                      '>
        <BoxOfficeTb/>
      </main>
      <footer className='flex justify-center
                        items-center h-20
                        bg-slate-600 text-white
                        text-base
                        '>
        @ 2024 KimBoSeong. All right reserved.
      </footer>
    </div>
  );
}

// function부분을, 화살표 함수로도 작석 가능
// const App = () => {

//   return();
// }

export default App;