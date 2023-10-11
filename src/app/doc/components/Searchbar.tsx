import Icon from "./Icon";

import styles from "./styles/Searchbar.module.css";

export default function Searchbar() {
    return (
        <div className={styles.searchbarContainer}>
            <input className={styles.searchbarInput}/>
            <Icon name="search" className={styles.searchbarIcon}/>
        </div>
    )
}
