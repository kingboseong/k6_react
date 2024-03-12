function MyClockTime(){
    const currentTime = new Date();
    return(
        <h1>
            현재시각 : {currentTime.toLocaleString()}
        </h1>
    );
}
export default MyClockTime