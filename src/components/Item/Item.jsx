import React from 'react';

function Item({ provided, item, isDragging }) {
  return (
      <div
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
        className={`item ${isDragging ? "is-dragging" : ""} item-task`}
      >
        {item.text}
      </div>
  );
}

export default Item;