import Icon from "./Icon"

import styles from "../../../../styles/doc.module.css";

export default function AddPageButton({text}: {text: string}) {
    return (
        <div className={styles.addPageButton}>
            <Icon name="addPage" className={styles.addPageButtonIcon}/>
            <h3 className={styles.addPageButtonText}>{text}</h3>
            <Icon name="threeDots" className={styles.addPageButtonThreeDots}/>
        </div>
    )
}
