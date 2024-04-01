import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { FaReact } from "react-icons/fa";
import { CiHome } from "react-icons/ci";
// import HelloCss from './02/HelloCss';
// import MainHeader from './01/MainHeader';
// import Hello from './01/Hello';
// import MyDiv from './03_1/MyDiv1';
// import MyList from './04/MyListMain';
// import MyListMain from './04/MyListMain';
// import BoxOfficeTb from './05_11/BoxOfficeTb';
import Lotto from './06/Lotto';
import FoodMain from './07/FoodMain';
import MyClock from './08/MyClock';
// import MyClockTime from './08/MyClockTime';
// import MyClockImage from './08/MyClockImage';
import TrafficMain from './09/TrafficMain';
import RefVal from './10/RefVal';
import RefInput from './10/RefInput';
import BoxOfficeRe from './05/BoxOfficeRe';
// import GalleryCard from './11/GalleryCard';
import GalleryMain from './11/GalleryMain';
import FestivalMain from './12/FestivalMain'
// import RouteMain from './13/RouteMain';
import Frcst from './14/Frcst';

function App() {
  return (
    //Fragment태그 <></> = 쓸데업는 div 태그르 쓰고싶지 않을 때 사용.
    // tailwind 씀
    <BrowserRouter>
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
          <div><FaReact className='text-6xl' /></div>
          <div className='flex justify-end items-center'>
            <div className='mx-5 p-2 rounded-md hover:bg-blue-800 hover:text-white'>
              <Link to='/Lotto'>로또</Link>
            </div>
            <div className='mx-5 p-2 rounded-md hover:bg-blue-800 hover:text-white'>
              <Link to='/RefVal'>선택</Link>
            </div>
            <div className='mx-5 p-2 rounded-md hover:bg-blue-800 hover:text-white'>
              <Link to='/RefInput'>삽입</Link>
            </div>
            <div className='mx-5 p-2 rounded-md hover:bg-blue-800 hover:text-white'>
              <Link to='/TrafficMain'>교통</Link>
            </div>
            <div className='mx-5 p-2 rounded-md hover:bg-blue-800 hover:text-white'>
              <Link to='/BoxOffice'>영화</Link>
            </div>
            <div className='mx-5 p-2 rounded-md hover:bg-blue-800 hover:text-white'>
              <Link to='/FoodMain'>음식</Link>
            </div>
            <div className='mx-5 p-2 rounded-md hover:bg-blue-800 hover:text-white'>
              <Link to='/GalleryMain'>사진</Link>
            </div>
            <div className='mx-5 p-2 rounded-md hover:bg-blue-800 hover:text-white'>
              <Link to='/FestivalMain'>축제</Link>
            </div>
            <div className='mx-5 p-2 rounded-md hover:bg-blue-800 hover:text-white'>
              <Link to='/Frcst'>예보</Link>
            </div>
            
              <Link to='/MyClock'><CiHome className='text-4xl' /></Link> 
          </div>
        </header>
        <main className='grow flex flex-col
                      justify-center items-center
                      '>
          <Routes>
            <Route path='/MyClock' element={<MyClock />} />
            <Route path='/Lotto' element={<Lotto />} />
            <Route path='/BoxOffice' element={<BoxOfficeRe />} />
            <Route path='/FoodMain' element={<FoodMain />} />
            <Route path='/GalleryMain' element={<GalleryMain />} />
            <Route path='/FestivalMain' element={<FestivalMain />} />
            <Route path='/Frcst' element={<Frcst />} />
            <Route path='/TrafficMain' element={<TrafficMain />} />
            <Route path='/RefInput' element={<RefInput />} />
            <Route path='/RefVal' element={<RefVal />} />
          </Routes>
        </main>
        <footer className='flex justify-center
                        items-center h-20
                        bg-slate-600 text-white
                        text-base
                        '>
          @ 2024 KimBoSeong. All right reserved.
        </footer>
      </div>
    </BrowserRouter>
  );
}

// function부분을, 화살표 함수로도 작석 가능
// const App = () => {

//   return();
// }

export default App;