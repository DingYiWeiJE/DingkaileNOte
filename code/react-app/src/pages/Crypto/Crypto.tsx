import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { Resizable, ResizeCallbackData } from 'react-resizable';

const DraggableResizableWindow = () => {
  const [width, setWidth] = useState<number>(200);
  const [height, setHeight] = useState<number>(200);

  const onResize = (event: React.SyntheticEvent, { size }: ResizeCallbackData) => {
    setWidth(size.width);
    setHeight(size.height);
  };

  return (
    <Draggable>
      <Resizable
        width={width}
        height={height}
        onResize={onResize}
      >
        <div
          style={{
            width: `${width}px`,
            height: `${height}px`,
            border: '1px solid #000',
            backgroundColor: '#fff',
            position: 'relative',
          }}
        >
          <div style={{ padding: '10px' }}>Resizable and draggable window</div>
          <div
            style={{
              position: 'absolute',
              bottom: '5px',
              right: '5px',
              cursor: 'nwse-resize',
              width: '10px',
              height: '10px',
              backgroundColor: '#000',
            }}
          />
        </div>
      </Resizable>
    </Draggable>
  );
};

export default DraggableResizableWindow;
