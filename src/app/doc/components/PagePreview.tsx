import Icon from "./Icon";

import styles from "../../../../styles/doc.module.css";

export default function PagePreview({index}: {index: number}) {
    return (
        <div key={index} className={styles.pagePreviewContainer}>
            <h3 className={styles.pagePreviewIndex}>{index+1}</h3>
            <div className={styles.pagePreview}>
                <Icon name="trash" className={styles.pagePreviewDeleteButton}/>
            </div>
        </div>
    )
}
