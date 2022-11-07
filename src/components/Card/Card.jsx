import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function MediaCard(props) {
  const broad = props.broad ;
  const navigate = useNavigate()
  console.log(broad);
  const handleCLick = ()=>{
    navigate('/broad' , {state : { broad : broad}})
  }
  return (
    <div onClick={handleCLick}>
      <a
        className="block p-2 cursor-pointer text-left max-w-sm bg-white rounded-lg border border-gray-200 shadow-md  hover:ring-2 hover::ring-slate-600 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        style={{ height: 130 + "px", width: 250 + "px" }}
      >
        <span className="text-left text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
          {broad ? broad.title : 'helo'}
        </span>
      </a>
    </div>
);
}
