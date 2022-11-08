import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ModalEditItem from '../ModalEditItem/ModalEditItem';
import { setShowModalItem } from '../../redux/features/showModal.slice';

import { useState  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIdItemTarget } from '../../redux/features/colHover';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { setDataBroad } from '../../redux/features/broad.slice';
import { useEffect } from 'react';

const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#0063cc',
  borderColor: '#0063cc',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Item({ provided, item, isDragging  } , props) {
  const [showModal, setShowModal] = React.useState(false);
  const dispatch = useDispatch() ;
  const [valueItem , setValueItem] = useState('');
  const [itemTarget , setItemTarget] = useState()
  const handleEditItem = (e) =>{
    dispatch(setShowModalItem(true))
  }

  return (
      <div
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
        className={`item ${isDragging ? "is-dragging" : ""} item-task`}
        onDoubleClick={handleEditItem}
        onMouseOver={(e) =>{
          let valueTarget = e.target.getAttribute('data-rbd-draggable-id') ;
          if(valueTarget !== null && valueTarget){
            dispatch(setIdItemTarget(valueTarget))
          }
        }}
      >
        <ModalEditItem/>
      {item.text}
      </div>
  );
}

export default Item;