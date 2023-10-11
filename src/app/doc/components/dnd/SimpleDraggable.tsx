import { ReactNode } from "react";
import { Draggable, DraggableId } from "react-beautiful-dnd";

interface SimpleDraggableProps {
    children: ReactNode;
    className?: string | undefined;
    draggableId: DraggableId;
    index: number;
    isDragDisabled?: boolean | undefined;
    disableInteractiveElementBlocking?: boolean | undefined;
    shouldRespectForcePress?: boolean | undefined;
}

export default function SimpleDraggable ({ className, children, ...props }: SimpleDraggableProps) {

    return <Draggable {...props}>
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
                    {children}
                </div>
            )
        }}
    </Draggable>;
};
