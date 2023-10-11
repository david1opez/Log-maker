'use client'

import { useState, useEffect, ReactNode } from "react";
import { Direction, DraggableChildrenFn, Droppable, DroppableId, DroppableMode, TypeId } from "react-beautiful-dnd";

interface SimpleDroppableProps {
    children: ReactNode;
    className?: string | undefined;
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

export default function SimpleDroppable ({ className, children, ...props }: SimpleDroppableProps) {
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
                className={className}
            >
                {children}
                {provided.placeholder}
            </div>
        )}
    </Droppable>;
};
