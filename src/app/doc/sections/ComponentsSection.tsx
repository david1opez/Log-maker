import DragComponent from "../components/DragComponent";
import Icon from "../components/Icon";
import { SimpleDroppable, SimpleDraggable } from "../components/LogMakerComponents";

import styles from "./styles/ComponentsSection.module.css";

export default function ComponentsSection() {
    return (
        <div className={styles.componentsAndActionButtonsContainer}>
            {/* Components */}
            <div className={styles.components}>
                <h2 className={styles.componentsTitle}>Componentes:</h2>
                
                <SimpleDroppable
                    droppableId="component-droppable"
                    type="components"
                    isDropDisabled={true}
                    className={styles.componentsContainer}
                >
                    {
                        ["Título","Subtítulo","Texto","Imágen","Código","Lista","Tabla"].map((item, index) => (
                            <SimpleDraggable key={index} draggableId={`component-${index}`} index={index}>
                                <DragComponent key={index} type={item}/>        
                            </SimpleDraggable>
                        ))
                    }
                </SimpleDroppable>
            </div>

            {/* Action Buttons */}
            <div className={styles.actionButtonsContainer}>
                <div className={styles.actionButtonContainer}>
                    <Icon name="export" className={styles.actionButtonIcon}/>
                    <h1 className={styles.actionButtonText}>Exportar a PDF</h1>
                </div>

                <div className={styles.actionButtonContainer}>
                    <Icon name="cloudUpload" className={styles.actionButtonIcon}/>
                    <h1 className={styles.actionButtonText}>Guardar Cambios</h1>
                </div>

                <h3 className={styles.lastChangesSavedTitle}>Últimos cambios guardados:</h3>
                <h2 className={styles.lastChangesSaved}>Lun 28 de Agosto 2023 a las 11:14 hrs</h2>
            </div>
        </div>
    )
}
