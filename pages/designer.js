import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialItems = [
  { id: '1', content: 'Ventilatore' },
  { id: '2', content: 'Condensatore' },
  { id: '3', content: 'Compressore' },
  { id: '4', content: 'Evaporatore' },
];

export default function Designer() {
  const [items, setItems] = useState(initialItems);
  const [image, setImage] = useState(null);

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const newItems = Array.from(items);
    const [reorderedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, reorderedItem);
    setItems(newItems);
  }

  function handleImageUpload(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>HVAC Layout Designer</h1>

      <div style={{ marginBottom: '20px' }}>
        <label>
          Carica immagine di sfondo:
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </label>
      </div>

      {image && (
        <div style={{ marginBottom: '20px' }}>
          <h3>Anteprima:</h3>
          <img src={image} alt="Uploaded" style={{ maxWidth: '100%', maxHeight: '400px', border: '1px solid #ccc' }} />
        </div>
      )}

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
