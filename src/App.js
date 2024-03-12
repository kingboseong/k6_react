import './App.css';
import MainHeader from './01/MainHeader';
import Hello from './01/Hello';
function App() {
  return (
    //Fragment태그 <></> = 쓸데업는 div 태그르 쓰고싶지 않을 때 사용.
    <>
      <div className="App">
        <MainHeader />
        <Hello />
        <Hello />
        <Hello />
        <Hello />
        <Hello />
        <Hello />
        <Hello />
        <Hello />
        <Hello />
        <Hello />
        <Hello />
      </div>
    </>
  );
}

// function부분을, 화살표 함수로도 작석 가능
// const App = () => {

//   return();
// }

export default App;