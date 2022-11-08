import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { setDataBroad } from '../../redux/features/broad.slice';
import { setShowModalItem } from '../../redux/features/showModal.slice';
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

export default function ModalEditItem(props) {
  const dispatch = useDispatch() ;
  const isShowModalItem = useSelector(state => state.isShowModal.isShowModalItem)
  const itemIdTarget = useSelector(state => state.colHover.idItemTarget )
  const dataByStore = useSelector((state) => state.broad.data);
  const [valueItem , setValueItem] = useState('')
  const handleClose = () => dispatch(setShowModalItem(false))
  const columnHover = useSelector(state => state.colHover.column) ;
  const idItemTarget = useSelector(state => state.colHover.idItemTarget)
  const handleEditItemS = () =>{
    let newItems = [] ;
    console.log(itemIdTarget);
    dataByStore.columnOrder.forEach(column =>{
        if(columnHover.id === column){
          dataByStore.columns[`${columnHover.id}`].items.forEach((e,index) =>{
            if(e.id === idItemTarget){
              console.log(e.id);
              newItems = [...dataByStore.columns[`${column}`].items]
              newItems.splice(index,1 , {
                id : itemIdTarget ,
                text : valueItem
              })
              let newData = {
                ...dataByStore ,
                columns : {
                  ...dataByStore.columns ,
                  [`${column}`] : {
                    ...dataByStore.columns[`${column}`] ,
                    items : [...newItems]
                  }
                }
              }
              dispatch(setShowModalItem(false))
              dispatch(setDataBroad(newData))
            }
          })

        }
    })
  }
  return (
    <div>
      <Modal
        open={isShowModalItem}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <TextField id="outlined-basic" label="Thay đổi thẻ" variant="outlined" onChange={(e) =>{
            setValueItem(e.target.value)
          }}/>
          <ColorButton sx={{ml : '10px' , height : '54px'}}variant="contained" onClick={handleEditItemS}
          disabled={valueItem ? false : true}>Chỉnh sửa</ColorButton>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
