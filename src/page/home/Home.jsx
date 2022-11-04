import React from 'react';
import Broad from '../broad/Broad';
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import  {useState} from "react";
const itemData = [
  {
    id: 0,

    title: "Breakfast",
    author: "@bkristastucchio",
  },
  {
    id: 1,

    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    id: 2,

    title: "Camera",
    author: "@helloimnik",
  },
  {
    id: 3,

    title: "Coffee",
    author: "@nolanissac",
  },
  {
    id: 4,

    title: "Hats",
    author: "@hjrc33",
  },
];
function Home(props) {
  const [data, setData] = useState(itemData);
   const handleDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(data);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    console.log(items);
    setData(items);
  };
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
    <div >
      <div style={{width: "100%", backgroundColor: "#ccc", }}>
          <Droppable droppableId="list">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{
                  width: "400px",
                  backgroundColor: "green",
                  border: "1px solid #ccc",
                  margin: "40px",
                  display: "flex"
                }}
              >
                {data &&
                  data.map((item, index) => {
                    return (
                      <Draggable
                        key={item.id}
                        draggableId={item.id.toString()}
                        index={index}
                      >
                        {(provided) => (
                          <Broad
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            elevation={2}
                            sx={{marginBottom: "10px"}}
                          >
                          </Broad>
                        )}
                      </Draggable>
                    );
                  })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
      </div>
    </div>
    </DragDropContext>
  );
}
export default Home;
