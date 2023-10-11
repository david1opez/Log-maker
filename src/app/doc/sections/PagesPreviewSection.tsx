import { AddPageButton, PagePreview, Searchbar, SimpleDroppable, SimpleDraggable } from "../components/LogMakerComponents";
import Icon from "../components/Icon";

import styles from "./styles/PagesPreviewSection.module.css";

export default function PagesPreviewSection() {
    return (
        <div className={styles.leftContainer}>
            {/* Page Previews */}
            <div className={styles.pagesContainer}>
                {/* Header */}
                <h2 className={styles.pagesTitle}>Páginas:</h2>
                <Searchbar/>

                {/* Page Previews*/}
                <SimpleDroppable droppableId="pages-droppable" type="pages" className={styles.pagePreviewsScrollContainer}>
                    {
                        [1,2,3,4,5,6].map((item, index) => (
                            <SimpleDraggable key={index} draggableId={`page-${index}`} index={index}>
                                <PagePreview key={index} index={index}/>
                            </SimpleDraggable>
                        ))
                    }
                </SimpleDroppable>
            </div>

            {/* Add Page Buttons */}
            <div className={styles.addPageButtonsContainer}>
                <AddPageButton text="Agregar Página"/>
                <AddPageButton text="Agregar Portada"/>
                <AddPageButton text="Agregar Índice"/>
            </div>

            {/* Add Custom Page Button */}
            <div className={styles.customAddPageButton}>
                <Icon name="paintbrush"/>
            </div>
        </div>
    )
}
