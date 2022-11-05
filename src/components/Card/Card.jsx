import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function MediaCard(props) {
  const broad = props.broad ;
  const navigate = useNavigate()
  console.log(broad);
  const handleCLick = ()=>{
    navigate('/broad' , {state : { id : broad._id}})
  }
  return (
    <div onClick={handleCLick}>
      <a
        className="block p-2 text-left max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        style={{ height: 150 + "px", width: 300 + "px" }}
      >
        <span className="text-left text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
          {broad ? broad.title : 'helo'}
        </span>
      </a>
    </div>
);
}
