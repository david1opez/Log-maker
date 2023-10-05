'use client'

import { useState, useEffect } from "react";
import styles from "../../../../styles/document.module.css";
import { DragDropContext, Droppable, Draggable, DroppableProps } from "react-beautiful-dnd";

function PagePreview({index}: {index: number}) {
    return (
        <div key={index} className={styles.pagePreviewContainer}>
            <h3 className={styles.pagePreviewIndex}>{index+1}</h3>
            <div className={styles.pagePreview}>
                <svg className={styles.pagePreviewDeleteButton} width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.6062 5.17722C13.2091 5.17722 12.8873 5.49909 12.8873 5.89611V13.9404C12.8873 15.6341 11.5143 17.007 9.82061 17.007H4.65189C2.95823 17.007 1.58524 15.6341 1.58524 13.9404V5.89611C1.58524 5.49909 1.26339 5.17722 0.86635 5.17722C0.469323 5.17722 0.147461 5.49909 0.147461 5.89611V13.9404C0.172413 16.4355 2.2022 18.4449 4.69739 18.4448H9.86611C12.3435 18.4202 14.3459 16.4178 14.3705 13.9404V5.89611C14.3709 5.6973 14.289 5.5072 14.1441 5.371C13.9994 5.23479 13.8045 5.16464 13.6062 5.17722Z" fill="black"/>
                    <path d="M13.6062 3.88507H0.86635C0.469323 3.88507 0.147461 3.56322 0.147461 3.16618C0.147461 2.76914 0.469323 2.44729 0.86635 2.44729H3.27781L4.3516 1.28251C4.76206 0.865199 5.32232 0.629303 5.90767 0.627319H8.56483C9.14167 0.62731 9.69485 0.856445 10.1027 1.26431L11.1947 2.44729H13.6062C14.0032 2.44729 14.325 2.76914 14.325 3.16618C14.325 3.56322 14.0032 3.88507 13.6062 3.88507ZM8.56483 2.0651H5.90767C5.72577 2.06516 5.55045 2.13334 5.41628 2.25619L5.24338 2.43819H9.22912L9.05622 2.25619C8.923 2.13176 8.7471 2.06334 8.56483 2.0651Z" fill="black"/>
                    <path d="M5.60742 7.90723V12.4572" stroke="black" stroke-width="1.16478" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.24707 7.90723V12.4572" stroke="black" stroke-width="1.16478" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
    )
}

function Searchbar() {
    return (
        <div className={styles.searchbarContainer}>
            <input className={styles.searchbarInput}/>
            <svg
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.searchbarIcon}
            >
                <path d="M1.3848 5.39119C2.5733 2.53733 5.35801 0.675113 8.44945 0.666855C11.7813 0.64931 14.7439 2.78346 15.7825 5.94933C16.8211 9.1152 15.6984 12.5896 13.0037 14.5491C10.3089 16.5086 6.65771 16.5057 3.96612 14.5419L1.56612 16.9419C1.3221 17.1856 0.926798 17.1856 0.682783 16.9419C0.439072 16.6978 0.439072 16.3025 0.682783 16.0585L3.00778 13.7335C0.836036 11.5334 0.196297 8.24505 1.3848 5.39119ZM2.49909 10.8076C3.49699 13.2124 5.8459 14.7786 8.44945 14.7752V14.7419C11.983 14.7374 14.8516 11.8837 14.8744 8.35019C14.8778 5.74664 13.3116 3.39773 10.9069 2.39983C8.50217 1.40194 5.73306 1.95182 3.89207 3.79281C2.05108 5.6338 1.5012 8.40291 2.49909 10.8076Z" fill="#A7A7A7" stroke="#A7A7A7" stroke-width="0.3"/>
            </svg>
        </div>
    )
}

function AddPageButton({text}: {text: string}) {
    return (
        <div className={styles.addPageButton}>
            <svg
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.addPageButtonIcon}
            >
                <path d="M10.4302 0.420012L17.4302 7.42001C17.5816 7.57395 17.6614 7.78438 17.6502 8.00001V15C17.6502 17.6234 15.5235 19.75 12.9002 19.75H10.0002C9.58596 19.75 9.25017 19.4142 9.25017 19C9.25017 18.5858 9.58596 18.25 10.0002 18.25H12.9002C14.6928 18.2445 16.1447 16.7927 16.1502 15V8.75001H11.9002C10.3814 8.75001 9.15017 7.5188 9.15017 6.00001V1.73001H6.90017C6.03474 1.73 5.20505 2.07515 4.59497 2.68898C3.9849 3.3028 3.64485 4.1346 3.65017 5.00001V10C3.65017 10.4142 3.31438 10.75 2.90017 10.75C2.48596 10.75 2.15017 10.4142 2.15017 10V5.00001C2.13682 3.73159 2.63136 2.51053 3.52361 1.60889C4.41586 0.707245 5.63168 0.199942 6.90017 0.200012H9.90017C10.099 0.200187 10.2897 0.27932 10.4302 0.420012ZM10.6502 2.77001V6.00001C10.6611 6.68255 11.2176 7.2301 11.9002 7.23001H15.1102L10.6502 2.77001Z" fill="black"/>
                <rect x="3.7002" y="12" width="1.4" height="7" rx="0.7" fill="black"/>
                <rect x="1" y="15" width="7" height="1.4" rx="0.7" fill="black"/>
            </svg>
            <h3 className={styles.addPageButtonText}>{text}</h3>
            <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.addPageButtonThreeDots}
            >
                <path d="M10 10.9375C10.5178 10.9375 10.9375 10.5178 10.9375 10C10.9375 9.48223 10.5178 9.0625 10 9.0625C9.48223 9.0625 9.0625 9.48223 9.0625 10C9.0625 10.5178 9.48223 10.9375 10 10.9375Z" fill="black"/>
                <path d="M10 5.9375C10.5178 5.9375 10.9375 5.51777 10.9375 5C10.9375 4.48223 10.5178 4.0625 10 4.0625C9.48223 4.0625 9.0625 4.48223 9.0625 5C9.0625 5.51777 9.48223 5.9375 10 5.9375Z" fill="black"/>
                <path d="M10 15.9375C10.5178 15.9375 10.9375 15.5178 10.9375 15C10.9375 14.4822 10.5178 14.0625 10 14.0625C9.48223 14.0625 9.0625 14.4822 9.0625 15C9.0625 15.5178 9.48223 15.9375 10 15.9375Z" fill="black"/>
            </svg>
        </div>
    )
}

function LogMakerDragComponent({type}: {type: string}) {
    return (
        <div className={styles.componentContainer}>
            <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.componentIcon}
            >
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.82617 0.585022H14.1737C16.659 0.585022 18.6737 2.59974 18.6737 5.08502V15.21C18.6737 16.4035 18.1996 17.5481 17.3557 18.392C16.5117 19.2359 15.3671 19.71 14.1737 19.71H5.82617C3.34089 19.71 1.32617 17.6953 1.32617 15.21V5.08502C1.32617 2.59974 3.34089 0.585022 5.82617 0.585022ZM16.9412 5.08502C16.935 3.55913 15.6996 2.32369 14.1737 2.31752H5.82617C4.30028 2.32369 3.06484 3.55913 3.05867 5.08502V15.21C3.06484 16.7359 4.30028 17.9714 5.82617 17.9775H14.1737C15.6996 17.9714 16.935 16.7359 16.9412 15.21V5.08502Z" fill="black"/>
                <path d="M13.6112 9H6.38867C5.92268 9 5.54492 8.62224 5.54492 8.15625C5.54492 7.69026 5.92268 7.3125 6.38867 7.3125H13.6112C14.0772 7.3125 14.4549 7.69026 14.4549 8.15625C14.4549 8.62224 14.0772 9 13.6112 9Z" fill="black"/>
            </svg>

            <h2 className={styles.componentName}>{type}</h2>

            <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.componentDragIcon}
            >
                <path d="M12.2094 15.9153L9.99973 18.125L7.79004 15.9153" stroke="#A7A7A7" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10 12.5V18.125" stroke="#A7A7A7" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.79004 4.08469L9.99973 1.875L12.2094 4.08469" stroke="#A7A7A7" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10 7.5V1.875" stroke="#A7A7A7" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.08469 12.2097L1.875 9.99997L4.08469 7.79028" stroke="#A7A7A7" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.5 10H1.875" stroke="#A7A7A7" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15.915 7.79028L18.1247 9.99997L15.915 12.2097" stroke="#A7A7A7" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.5 10H18.125" stroke="#A7A7A7" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.componentThreeDots}
            >
                <path d="M10 10.9375C10.5178 10.9375 10.9375 10.5178 10.9375 10C10.9375 9.48223 10.5178 9.0625 10 9.0625C9.48223 9.0625 9.0625 9.48223 9.0625 10C9.0625 10.5178 9.48223 10.9375 10 10.9375Z" fill="black"/>
                <path d="M10 5.9375C10.5178 5.9375 10.9375 5.51777 10.9375 5C10.9375 4.48223 10.5178 4.0625 10 4.0625C9.48223 4.0625 9.0625 4.48223 9.0625 5C9.0625 5.51777 9.48223 5.9375 10 5.9375Z" fill="black"/>
                <path d="M10 15.9375C10.5178 15.9375 10.9375 15.5178 10.9375 15C10.9375 14.4822 10.5178 14.0625 10 14.0625C9.48223 14.0625 9.0625 14.4822 9.0625 15C9.0625 15.5178 9.48223 15.9375 10 15.9375Z" fill="black"/>
            </svg>
        </div>
    )
}

const StrictModeDroppable = ({ children, ...props }: DroppableProps) => {
    const [enabled, setEnabled] = useState(false);
    useEffect(() => {
      const animation = requestAnimationFrame(() => setEnabled(true));
      return () => {
        cancelAnimationFrame(animation);
        setEnabled(false);
      };
    }, []);
    if (!enabled) {
      return null;
    }
    return <Droppable {...props}>{children}</Droppable>;
};

export default function Document({ params }: { params: { documentId: string } }) {
    const onDragEnd = () => {};
  
    return (
    <main className={styles.container}>
        <DragDropContext
            onDragEnd={onDragEnd}
        >
            {/* Pages Preview */}
            <div>
                {/* Pages Container */}
                <div className={styles.pagesContainer}>
                    <h2 className={styles.pagesTitle}>Páginas:</h2>

                    {/* Searchbar */}
                    <Searchbar/>

                    {/* Pages */}
                    <StrictModeDroppable droppableId="droppable">
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                className={styles.pagePreviewsScrollContainer}
                            >
                                {
                                    [1,2,3,4,5,6].map((item, index) => (
                                        <Draggable key={index} draggableId={`page-${index}`} index={index}>
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
                <div className={styles.page}></div>
            </div>

            {/* Components */}
            <div className={styles.componentsAndActionButtonsContainer}>
                {/* Components */}
                <div className={styles.components}>
                    <h2 className={styles.pagesTitle}>Componentes:</h2>
                    
                    <StrictModeDroppable droppableId="component-droppable">
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
                                                    provided.draggableProps.style.left = provided.draggableProps.style.offsetLeft;
                                                    provided.draggableProps.style.top = provided.draggableProps.style.offsetTop;
                                                }

                                                return (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                    >
                                                        <LogMakerDragComponent key={index} type={item}/>
                                                    </div>
                                                )
                                            }}
                                        </Draggable>
                                    ))
                                }
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
