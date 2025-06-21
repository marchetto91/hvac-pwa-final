import React, { useState } from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';

export default function CanvasDesigner() {
  const [components, setComponents] = useState([
    { id: 'ventilatore', x: 50, y: 60, color: 'lightblue', label: 'Ventilatore' },
    { id: 'compressore', x: 200, y: 60, color: 'lightgreen', label: 'Compressore' },
    { id: 'condensatore', x: 50, y: 200, color: 'lightpink', label: 'Condensatore' },
    { id: 'evaporatore', x: 200, y: 200, color: 'lightyellow', label: 'Evaporatore' }
  ]);

  const handleDragEnd = (e, id) => {
    const updated = components.map(item => {
      if (item.id === id) {
        return { ...item, x: e.target.x(), y: e.target.y() };
      }
      return item;
    });
    setComponents(updated);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>HVAC Canvas Designer</h1>
      <Stage width={window.innerWidth} height={window.innerHeight - 150} style={{ border: '1px solid #ccc' }}>
        <Layer>
          {components.map((item) => (
            <React.Fragment key={item.id}>
              <Rect
                x={item.x}
                y={item.y}
                width={120}
                height={80}
                fill={item.color}
                cornerRadius={10}
                draggable
                onDragEnd={(e) => handleDragEnd(e, item.id)}
                shadowBlur={5}
              />
              <Text
                text={item.label}
                x={item.x + 10}
                y={item.y + 30}
                fontSize={16}
                fill="black"
              />
            </React.Fragment>
          ))}
        </Layer>
      </Stage>
    </div>
  );
}

