import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

function Item({ provided, item, isDragging }) {
  return (
      <div
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
        className={`item ${isDragging ? "is-dragging" : ""} item-task`}
      >
        <ListItem disablePadding>
      <ListItemButton>
      {item.text}
      </ListItemButton>
    </ListItem>
      </div>

  );
}

export default Item;