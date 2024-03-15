import styles from "./HelloYellow.module.css"

export default function HelloYellow() {
    return (
        // 중괄호를 따옴표로 감싸면 오류가 남
        <h1 className={styles.ch1}>
            HI
        </h1>
    )
}
