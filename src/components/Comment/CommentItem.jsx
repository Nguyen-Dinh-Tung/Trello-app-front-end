import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import jwtDecode from 'jwt-decode';
import { useEffect } from 'react';
import getImage from '../../api/getImage';
import { useState } from 'react';
export default function CommentItem(props) {
  let token = localStorage.getItem('token') ;
  let idUser = jwtDecode(token).id 
  const data = props.data ;
  const [urlAvatar , setUrlAvatar] = useState()
  useEffect(() =>{
    getImage(idUser)
    .then(res => setUrlAvatar(res.data.message))
    .catch(e => console.log(e.message))
  } , [] )
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={urlAvatar && urlAvatar} />
      </ListItemAvatar>
      <ListItemText
        primary={data.email}
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
            </Typography>
            {data.content}
          </React.Fragment>
        }
      />
    </ListItem>
  );
}
