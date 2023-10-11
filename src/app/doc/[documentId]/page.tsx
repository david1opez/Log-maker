'use client'

import { useState, useEffect } from "react";
import styles from "../../../../styles/doc.module.css";
import { DragDropContext, Droppable, Draggable, DroppableProps } from "react-beautiful-dnd";

// COMPONENTS
import PagePreview from "../components/PagePreview";
import Searchbar from "../components/Searchbar";
import AddPageButton from "../components/AddPageButton";
import DragComponent from "../components/DragComponent";

const StrictModeDroppable = ({ children, ...props }: DroppableProps) => {
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
      const animation = requestAnimationFrame(() => setEnabled(true));
      return () => {
        cancelAnimationFrame(animation);
        setEnabled(false);
      };
    }, []);

    if (!enabled) return null;

    return <Droppable {...props}>{children}</Droppable>;
};

export default function Document({ params }: { params: { documentId: string } }) {
    const onDragEnd = () => {};

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
        <DragDropContext
            onDragEnd={onDragEnd}
        >
            {/* Pages Preview */}
            <div className={styles.leftContainer}>
                {/* Pages Container */}
                <div className={styles.pagesContainer}>
                    <h2 className={styles.pagesTitle}>Páginas:</h2>

                    {/* Searchbar */}
                    <Searchbar/>

                    {/* Pages */}
                    <StrictModeDroppable droppableId="pages-droppable" type="pages">
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                className={styles.pagePreviewsScrollContainer}
                            >
                                {
                                    [1,2,3,4,5,6].map((item, index) => (
                                        <Draggable
                                            key={index}
                                            draggableId={`page-${index}`} 
                                            index={index}
                                        >
                                            {(provided, snapshot) => {
                                                if (snapshot.isDragging && provided.draggableProps.style) {
                                                    provided.draggableProps.style.left = provided.draggableProps.style.offsetLeft;
                                                    provided.draggableProps.style.top = provided.draggableProps.style.offsetTop;
                                                }

                                                return (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                    >
                                                        <PagePreview key={index} index={index}/>
                                                    </div>
                                                )
                                            }}
                                        </Draggable>
                                    ))
                                }
                                {provided.placeholder}
                            </div>
                        )}
                    </StrictModeDroppable>
                    <div >
                        
                    </div>
                </div>

                {/* Add Page Buttons Container */}
                <div className={styles.addPageButtonsContainer}>
                    {/* Add Page Button */}
                    <AddPageButton text="Agregar Página"/>

                    {/* Add Cover Button */}
                    <AddPageButton text="Agregar Portada"/>

                    {/* Add Index Button */}
                    <AddPageButton text="Agregar Índice"/>
                </div>

                {/* Custom Add Page Button */}
                <div className={styles.customAddPageButton}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9248 2.15C17.4571 1.68612 16.8252 1.42558 16.1664 1.425C15.5958 1.42686 15.043 1.62388 14.5998 1.98334L6.79144 8.33334L6.66644 8.45834C5.57813 9.53732 5.3367 11.2069 6.07477 12.55C5.77197 12.4576 5.45794 12.4072 5.14144 12.4C3.30049 12.4 1.80811 13.8924 1.80811 15.7333V17.8167C1.80811 18.507 2.36775 19.0667 3.05811 19.0667H5.14144C6.29861 19.0603 7.3697 18.4543 7.97105 17.4656C8.57241 16.4769 8.61798 15.2471 8.09144 14.2167C8.4245 14.3291 8.77325 14.3882 9.12477 14.3917C10.0477 14.3979 10.9341 14.0313 11.5831 13.375L11.6664 13.2833L18.0581 5.475C18.8649 4.49376 18.8075 3.06349 17.9248 2.15ZM5.17477 17.8167H3.09144V15.7333C3.09144 14.5827 4.02418 13.65 5.17477 13.65C6.32537 13.65 7.25811 14.5827 7.25811 15.7333C7.25811 16.8839 6.32537 17.8167 5.17477 17.8167ZM10.7331 12.5L17.1248 4.68334C17.5166 4.19258 17.4771 3.48579 17.033 3.04175C16.589 2.59771 15.8822 2.55821 15.3914 2.95L7.58311 9.34167C6.71096 10.2115 6.70909 11.6237 7.57894 12.4958C8.44879 13.368 9.86096 13.3699 10.7331 12.5Z" fill="black"/>
                        <path d="M10.9998 8.19167L8.49977 10.6917C8.25606 10.9357 8.25606 11.331 8.49977 11.575C8.74379 11.8187 9.13909 11.8187 9.38311 11.575L11.8831 9.075C12.0503 8.9192 12.1191 8.68454 12.0626 8.4631C12.006 8.24165 11.8331 8.06874 11.6117 8.01218C11.3902 7.95563 11.1556 8.02446 10.9998 8.19167Z" fill="black"/>
                    </svg>
                </div>
            </div>

            {/* Page */}
            <div className={styles.pageContainer}>
                <div className={styles.documentTitleContainer}>
                    <h1 className={styles.teamName}>ITESM1 / </h1>
                    <h1 className={styles.documentName}>Bitácora</h1>
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={styles.teamMembersAccordionButton}
                    >
                        <path d="M8 3L13 8L8 13" stroke="black" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3 3L8 8L3 13" stroke="black" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <StrictModeDroppable droppableId="components-droppable" type="components">
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className={styles.page}
                        >
                            {
                                components.map((item, index) => (
                                    <Draggable
                                        key={index}
                                        draggableId={`page-component-${index}`} 
                                        index={index}
                                        isDragDisabled={item.componentType === 'tag'}
                                    >
                                        {(provided, snapshot) => {
                                            if (snapshot.isDragging && provided.draggableProps.style) {
                                                provided.draggableProps.style.left = provided.draggableProps.style.offsetLeft;
                                                provided.draggableProps.style.top = provided.draggableProps.style.offsetTop;
                                            }

                                            return (
                                                <h1
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    className={styles.titleComponent}
                                                >{item.content}</h1>
                                            )
                                                    
                                        }}
                                    </Draggable>
                                ))
                            }
                            {provided.placeholder}
                        </div>
                    )}
                </StrictModeDroppable>
            </div>

            {/* Components */}
            <div className={styles.componentsAndActionButtonsContainer}>
                {/* Components */}
                <div className={styles.components}>
                    <h2 className={styles.pagesTitle}>Componentes:</h2>
                    
                    <StrictModeDroppable
                        droppableId="component-droppable"
                        type="components"
                        isDropDisabled={true}
                    >
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                className={styles.componentsContainer}
                            >
                                {
                                    ["Título","Subtítulo","Texto","Imágen","Código","Lista","Tabla"].map((item, index) => (
                                        <Draggable key={index} draggableId={`component-${index}`} index={index}>
                                            {(provided, snapshot) => {
                                                if (snapshot.isDragging && provided.draggableProps.style) {
                                                    if(provided.draggableProps.style?.left && provided.draggableProps.style?.top && provided.draggableProps.style.offsetLeft && provided.draggableProps.style.offsetTop) {
                                                        provided.draggableProps.style.left = provided.draggableProps.style.offsetLeft;
                                                        provided.draggableProps.style.top = provided.draggableProps.style.offsetTop;
                                                    }
                                                }

                                                return (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                    >
                                                        <DragComponent key={index} type={item}/>
                                                    </div>
                                                )
                                            }}
                                        </Draggable>
                                    ))
                                }
                                {provided.placeholder}
                            </div>
                        )}
                    </StrictModeDroppable>
                </div>

                {/* Action Buttons */}
                <div className={styles.actionButtonsContainer}>
                    <div className={styles.actionButtonContainer}>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={styles.actionButtonIcon}
                        >
                            <path d="M13.0236 3.21934L18.7833 9.03934C19.0722 9.33216 19.0722 9.80652 18.7833 10.0993C18.6457 10.2423 18.4569 10.3229 18.2597 10.3229C18.0625 10.3229 17.8737 10.2423 17.7361 10.0993L13.241 5.55934V16.7893C13.241 17.2036 12.9092 17.5393 12.5 17.5393C12.0908 17.5393 11.759 17.2036 11.759 16.7893V5.55934L7.26391 10.0993C7.12636 10.2419 6.93719 10.3214 6.7403 10.3193C6.54364 10.3203 6.35489 10.241 6.2167 10.0993C5.92777 9.80652 5.92777 9.33216 6.2167 9.03934L11.9764 3.21934C12.2657 2.92689 12.7343 2.92689 13.0236 3.21934Z" fill="black"/>
                            <path d="M7.5603 19.0793H17.4397C17.8489 19.0793 18.1807 19.4151 18.1807 19.8293C18.1807 20.2436 17.8489 20.5793 17.4397 20.5793H7.5603C7.15108 20.5793 6.81934 20.2436 6.81934 19.8293C6.81934 19.4151 7.15108 19.0793 7.5603 19.0793Z" fill="black"/>
                        </svg>
                        <h1 className={styles.actionButtonText}>Exportar a PDF</h1>
                    </div>

                    <div className={styles.actionButtonContainer}>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={styles.actionButtonIcon}
                        >
                            <path d="M8.99978 19.4985H6.74978C6.00525 19.4978 5.26939 19.3387 4.59104 19.0319C3.9127 18.725 3.30738 18.2774 2.81526 17.7187C2.32314 17.16 1.95548 16.503 1.73669 15.7913C1.5179 15.0797 1.45297 14.3296 1.54623 13.591C1.63948 12.8523 1.88877 12.1419 2.27757 11.507C2.66636 10.872 3.18576 10.327 3.80129 9.90817C4.41682 9.4893 5.1144 9.20615 5.84773 9.0775C6.58105 8.94886 7.33336 8.97765 8.05471 9.16199" stroke="black" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7.5 11.9985C7.50012 10.8102 7.78261 9.63888 8.3242 8.58113C8.86579 7.52338 9.65097 6.60946 10.615 5.91468C11.5791 5.21991 12.6945 4.76416 13.8693 4.585C15.044 4.40584 16.2445 4.50839 17.3719 4.8842C18.4992 5.26001 19.5211 5.89833 20.3534 6.74656C21.1857 7.59478 21.8045 8.62863 22.1588 9.76292C22.5132 10.8972 22.5929 12.0995 22.3915 13.2706C22.19 14.4417 21.7132 15.5483 21.0002 16.499" stroke="black" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.0684 15.1806L14.2503 11.9985L17.4323 15.1806" stroke="black" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14.25 19.4985V11.9985" stroke="black" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
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
