'use client'

import { DragDropContext } from "react-beautiful-dnd";

import styles from "../doc.module.css";

// SECTIONS
import PagesPreviewSection from "../sections/PagesPreviewSection";
import PageSection from "../sections/PageSection";
import ComponentsSection from "../sections/ComponentsSection";

export default function Document({ params }: { params: { documentId: string } }) {
    return (
        <main className={styles.container}>
            <DragDropContext onDragEnd={() => {}}>
                <PagesPreviewSection/>
                <PageSection/>
                <ComponentsSection/>
            </DragDropContext>
        </main>
    )
}
