import koreaLoge from "../koreaLogo.jpg";
import "./HelloCss.css"
import HelloWhite from "./HelloWhite";
import HelloYellow from "./HelloYellow";
import HelloBlue from "./HelloBlue";
import HelloImg from "./HelloImg";


export default function HelloCss() {
const apikey = process.env.REACT_APP_MV_API;
console.log(apikey)

    return (
        <div className="hellomain">
            {/* <p>
                <img className="korea" src={koreaLoge} alt="logo" />
            </p> */}
            <HelloImg/>
            <HelloWhite/>
            <HelloYellow></HelloYellow>
            <HelloBlue></HelloBlue>
        </div>
    )
}
