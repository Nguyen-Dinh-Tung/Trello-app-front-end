import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import ListItem from '../ListItem/ListItem';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import {v4 as uuidv4} from 'uuid'
import { useDispatch } from 'react-redux';
import { setItemBroad } from '../../redux/features/broad.slice';
import List from '@mui/material/List';
import ModalEditTitleColumn from '../ModalEditTitleColumn/ModalEditTitleColumn';
import { setColHover } from '../../redux/features/colHover';

function Column(props) {
  const data = useSelector(state => state.broad.data);
  // const columnDClick = useSelector(state => state.columnDClick.column)

  const colHover = useSelector(state => state.colHover.column)
  const dispatch = useDispatch();
  const [isItemInput , setItemInput] = useState(true) ;
  const [valueItem , setValueItem] = useState()
  const column = props.column ;
  if(column){
    const index = props.index ;
    const idColum = column.id ;
    const handleCLick = () =>{
      setItemInput(false)
    }
    const handleSetItemValue = (e) =>{
      setValueItem(e.target.value)
    }
    const handleAddItem = () =>{
      let item = {
        id : '' ,
        text : ''
      }  ;
      if(valueItem){
        const iTemId = uuidv4() ;
         item = {
          id : iTemId ,
          text : valueItem
        }
      }
      if(item.id !== '' && item.text){
        let newData = {
          ...data , columns : {
            ...data.columns ,
            [`${idColum}`] :{
              ...data.columns[`${idColum}`] ,
              items : [...data.columns[`${idColum}`].items , item ]
            }
          }
        }
        dispatch(setItemBroad(newData));
      }
      setItemInput(true)
      setValueItem('')
    }

    return (
      <Draggable
      draggableId={idColum} index={index}
      >
        {provided =>(
          <List className="column"
          sx={{ m: 2 ,boxShadow: 3  }}
          {...provided.draggableProps}
          ref={provided.innerRef}
          onDoubleClick={(e)=>{
            dispatch(setColHover(column))
          }}

          >
            <ModalEditTitleColumn column={column}/>
            <h2 className='column-title'
            style={{height : '40px'  , color : 'white' , fontSize : '18px'}}
            {...provided.dragHandleProps}
            >
            {column.title}
            </h2>
            <ListItem column={column} index={index} />
            <div>
            {isItemInput ? <button
            style={{
              height : '40px',
              width : '100%'  ,
              backgroundColor : 'white' ,
              borderRadius : '4px',
              color : 'black' ,
              position : 'relative',
              bottom : '-6px'
            }}
            className='btn-my-trello'
            onClick={handleCLick}
            >Thêm thẻ</button>
            : (
            <>
            <input type="text"
            style={{width : '100%' , height :'40px' , borderRadius : '4px'
            , border : '1px solid #ccc' , paddingLeft : '4px' }} placeholder={'Nhiệm vụ'}
            onChange={handleSetItemValue}
            />
            <button
            style={{
              height : '40px',
              width : '100%' ,
              backgroundColor : 'white' ,
              borderRadius : '4px',
              color : 'black',
              position : 'relative',
              bottom : '-6px'
            }}
            className={'btn-my-trello'}
            onClick={handleAddItem}
            disabled={valueItem ? false : true}
            >Tạo</button>
            </>
            )
           }
            </div>
          </List>
        )}
      </Draggable>
    );
  }

}

export default Column;
