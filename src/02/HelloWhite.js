import styles from "./HelloWhite.module.css"
import { PiFlowerLotusThin } from "react-icons/pi";

export default function HelloWhite() {
    return (
        <h1 className={styles.ch1}>
            <PiFlowerLotusThin className="flex text-9xl"/>
            HI
        </h1>
    )
}
