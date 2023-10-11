import styles from "../../../../styles/doc.module.css";
import Icon from "./Icon";

export default function Searchbar() {
    return (
        <div className={styles.searchbarContainer}>
            <input className={styles.searchbarInput}/>
            <Icon name="search" className={styles.searchbarIcon}/>
        </div>
    )
}
