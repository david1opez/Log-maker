'use client'

import { useState } from "react";
import { SimpleDroppable, SimpleDraggable } from "../components/LogMakerComponents";
import Icon from "../components/Icon";

import styles from "./styles/PageSection.module.css";

export default function PageSection() {
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
        <div className={styles.pageContainer}>
            {/* Header */}
            <div className={styles.documentTitleContainer}>
                <h1 className={styles.teamName}>ITESM1 / </h1>
                <h1 className={styles.documentName}>Bitácora</h1>
                <Icon name="doubleArrow" className={styles.teamMembersAccordionButton}/>
            </div>

            {/* Page */}
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
    )
}
