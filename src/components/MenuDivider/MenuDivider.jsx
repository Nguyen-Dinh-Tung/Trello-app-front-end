import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Typography } from '@material-tailwind/react';
import { useDispatch } from "react-redux";
import { setShowModal } from "../../redux/features/showModal.slice";

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};

export default function MenuDivider() {
  const dispatch = useDispatch()
  const handleCreateBroad = () => {
    dispatch(setShowModal("block"));
  };
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button>
        <ListItemText  disableTypography
        primary={<Typography type="body2" style={{ color: 'black' , }} onClick={handleCreateBroad}>Tạo mới bảng</Typography>} />
      </ListItem>
      <ListItem button>
        <ListItemText  disableTypography
        primary={<Typography type="body2" style={{ color: 'black'}}>Tạo không gian</Typography>} />
      </ListItem>
    </List>
  );
}