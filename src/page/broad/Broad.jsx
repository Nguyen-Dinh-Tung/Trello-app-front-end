import React from 'react';
import Card from '../../components/Column/Column';
import { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Column from '../../components/Column/Column';
import { reorderList } from '../../reorderList/reorderList';
import { useEffect  } from 'react';
import {v4 as uuidv4} from 'uuid'
import UpdateBroad from '../../api/UpdateBroad';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setDataBroad } from '../../redux/features/broad.slice';

function Broad(props) {
  let initial = useSelector(state => state.broad.data)
  const dispatch = useDispatch()
  const [isTitleColumn , setIseTitleColumn] = useState(true) ;
  const [titleColumn , setTitleColumn] = useState() ;
  const [data , setData] = useState(initial) ;
  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    if (result.type === "column") {
      const columnOrder = reorderList(
        data.columnOrder,
        result.source.index,
        result.destination.index
      );
      setData({
        ...data,
        columnOrder
      });
      return;
    }

    // reordering in same list
    if (result.source.droppableId === result.destination.droppableId) {
      const column = data.columns[result.source.droppableId];
      const items = reorderList(
        column.items,
        result.source.index,
        result.destination.index
      );

      // updating column entry
      const newState = {
        ...data,
        columns: {
          ...data.columns,
          [column.id]: {
            ...column,
            items
          }
        }
      };
      setData(newState);
      return;
    }

    // moving between lists
    const sourceColumn = data.columns[result.source.droppableId];
    const destinationColumn = data.columns[result.destination.droppableId];
    const item = sourceColumn.items[result.source.index];

    // 1. remove item from source column
    const newSourceColumn = {
      ...sourceColumn,
      items: [...sourceColumn.items]
    };
    newSourceColumn.items.splice(result.source.index, 1);

    // 2. insert into destination column
    const newDestinationColumn = {
      ...destinationColumn,
      items: [...destinationColumn.items]
    };
    // in line modification of items
    newDestinationColumn.items.splice(result.destination.index, 0, item);

    const newState = {
      ...data,
      columns: {
        ...data.columns,
        [newSourceColumn.id]: newSourceColumn,
        [newDestinationColumn.id]: newDestinationColumn
      }
    };
    setData(newState);
  }
  const handleShowCreateColumn = () =>{
    setIseTitleColumn(false)
  }

  const handleGetTitleColunn = (e) =>{
    setTitleColumn(e.target.value)
  }
  const handleCreateColumn = () =>{
    setIseTitleColumn(true)
    if(titleColumn){
      const idColum = uuidv4() ;
      dispatch(setDataBroad({
        ...data ,
        columns :{
          ...data.columns ,
          [`${idColum}`] : {
            id : idColum ,
            title : titleColumn ,
            items : []
          }
        },
        columnOrder : [...data.columnOrder , `${idColum}`]
      }))
      setTitleColumn('')
    }
  }
  // useEffect(() =>{
  //   UpdateBroad(data)
  //   .then(res => console.log(res))
  //   .catch(e => console.log(e.message))
  // },[data.columnOrder])
  useEffect(() =>{
    setData({...initial})
  }, [initial])
  return (
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="Broad">
          <div className="add-column" style={{
            display : 'flex',
            alignItems : 'center',
            marginLeft: '8px'

          }}>
          {isTitleColumn
           ?
          <button className="asslsss" style={{margin : '20px' , padding : '8px' , width : '300px' , backgroundColor: 'white' , color : 'black' , borderRadius : '6px'}} onClick={handleShowCreateColumn}
          >Thêm cột</button>
          :
          (
          <>
          <input type="text" name='title' onChange={handleGetTitleColunn}  style={{border : '1px solid #ccc' , height : '40px' , paddingLeft : '4px' , borderRadius : '4px' , marginLeft : '14px'}} placeholder={'Tiêu đề cột'}/>
          <button className="asslsss" style={{margin : '20px 0' , padding : '8px'  , width : '104px', backgroundColor: 'white' , color : 'black' , borderRadius : '6px' , marginLeft : '8px'}} onClick={handleCreateColumn}
          disabled={titleColumn ? false : true}

          >Tạo</button>
          </>

          )

        }

          </div>
          <Droppable
          droppableId='broad'
          direction="horizontal"
          type='column'
          >
            {provided =>(
              <div className="columns"
              style={{display : 'flex' ,marginTop : '100px'}}
              {...provided.droppableProps}
              ref={provided.innerRef}
              >
                {data && data.columnOrder.map((column , index) =>(
                  <Column className="column"
                  key={column}
                  column={data.columns[column]}
                  index={index}
                  />
                ))}
                   {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
  );
}

export default Broad;