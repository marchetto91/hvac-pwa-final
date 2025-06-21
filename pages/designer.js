import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialItems = [
  { id: '1', content: 'Ventilatore' },
  { id: '2', content: 'Condensatore' },
  { id: '3', content: 'Compressore' },
  { id: '4', content: 'Evaporatore' },
];

export default function Designer() {
  const [items, setItems] = React.useState(initialItems);

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const newItems = Array.from(items);
    const [reorderedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, reorderedItem);
    setItems(newItems);
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>HVAC Layout Designer</h1>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="hvacComponents">
          {(provided) => (
            <ul
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{
                background: '#f0f0f0',
                padding: '20px',
                width: '300px',
                listStyle: 'none',
                borderRadius: '8px',
              }}
            >
              {items.map(({ id, content }, index) => (
                <Draggable key={id} draggableId={id} index={index}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        userSelect: 'none',
                        padding: '16px',
                        margin: '0 0 8px 0',
                        background: '#fff',
                        borderRadius: '4px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                        ...provided.draggableProps.style,
                      }}
                    >
                      {content}
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
