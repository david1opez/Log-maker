'use client'

import { useState } from "react";
import styles from "../../../../styles/doc.module.css";
import { DragDropContext } from "react-beautiful-dnd";

// COMPONENTS
import { PagePreview, Searchbar, AddPageButton, Icon, DragComponent, SimpleDroppable, SimpleDraggable } from "../components/LogMakerComponents"

export default function Document({ params }: { params: { documentId: string } }) {
    const [components, setComponents] = useState([
        {
            componentType: 'tag',
            content: 'INTRODUCTION',
            id: 1
        },
        {
            componentType: 'title',
            content: 'INTRODUCTION',
            id: 1
        },
    ]);

    const updateComponent = (id: number, type: string, content: string) => {
        const componentIndex = components.findIndex((component) => component.id === id);

        if (componentIndex === -1) {
            return;
        }

        const updatedComponents = [...components];

        updatedComponents[componentIndex] = {
            id,
            componentType: type,
            content,
        };

        setComponents(updatedComponents);
    };
    
    return (
    <main className={styles.container}>
        <DragDropContext onDragEnd={() => {}}>
            {/* Pages Preview */}
            <div className={styles.leftContainer}>
                {/* Pages Container */}
                <div className={styles.pagesContainer}>
                    <h2 className={styles.pagesTitle}>Páginas:</h2>

                    {/* Searchbar */}
                    <Searchbar/>

                    {/* Pages */}
                    <SimpleDroppable droppableId="pages-droppable" type="pages" className={styles.pagePreviewsScrollContainer}>
                        {
                            [1,2,3,4,5,6].map((item, index) => (
                                <SimpleDraggable key={index} draggableId={`page-${index}`} index={index}>
                                    <PagePreview key={index} index={index}/>
                                </SimpleDraggable>
                            ))
                        }
                    </SimpleDroppable>
                    <div >
                        
                    </div>
                </div>

                {/* Add Page Buttons Container */}
                <div className={styles.addPageButtonsContainer}>
                    <AddPageButton text="Agregar Página"/>
                    <AddPageButton text="Agregar Portada"/>
                    <AddPageButton text="Agregar Índice"/>
                </div>

                {/* Custom Add Page Button */}
                <div className={styles.customAddPageButton}>
                    <Icon name="paintbrush"/>
                </div>
            </div>

            {/* Page */}
            <div className={styles.pageContainer}>
                <div className={styles.documentTitleContainer}>
                    <h1 className={styles.teamName}>ITESM1 / </h1>
                    <h1 className={styles.documentName}>Bitácora</h1>
                    <Icon name="doubleArrow" className={styles.teamMembersAccordionButton}/>
                </div>

                <SimpleDroppable droppableId="components-droppable" type="components" className={styles.page}>
                    {
                        components.map((item, index) => (
                            <SimpleDraggable
                                key={index}
                                draggableId={`page-component-${index}`} 
                                index={index}
                            >
                                <h1 className={styles.titleComponent}>{item.content}</h1>
                            </SimpleDraggable>
                        ))
                    }
                </SimpleDroppable>
            </div>

            {/* Components */}
            <div className={styles.componentsAndActionButtonsContainer}>
                {/* Components */}
                <div className={styles.components}>
                    <h2 className={styles.pagesTitle}>Componentes:</h2>
                    
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
        </DragDropContext>
    </main>
  )
}
