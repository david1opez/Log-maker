'use client'

import { useState, useEffect } from "react";
import { Direction, DraggableChildrenFn, Droppable, DroppableId, DroppableMode, TypeId } from "react-beautiful-dnd";

import styles from "../../../../styles/doc.module.css";

interface StrictModeDroppableProps {
    children: React.ReactElement<HTMLElement>;
    droppableId: DroppableId;
    type?: TypeId | undefined;
    mode?: DroppableMode | undefined;
    isDropDisabled?: boolean | undefined;
    isCombineEnabled?: boolean | undefined;
    direction?: Direction | undefined;
    ignoreContainerClipping?: boolean | undefined;
    renderClone?: DraggableChildrenFn | undefined;
    getContainerForClone?: (() => HTMLElement) | undefined;
}

export const StrictModeDroppable = ({ children, ...props }: StrictModeDroppableProps) => {
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
      const animation = requestAnimationFrame(() => setEnabled(true));
      return () => {
        cancelAnimationFrame(animation);
        setEnabled(false);
      };
    }, []);

    if (!enabled) return null;

    return <Droppable {...props}>
        {(provided, snapshot) => (
            <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className={styles.page}
            >
                {children}
            </div>
        )}
    </Droppable>;
};
