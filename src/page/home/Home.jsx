import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import getBroad from './../../api/GetBroad';
import { useState } from 'react';
import { useEffect } from 'react';
import jwtDecode from "jwt-decode";
import { useDispatch } from 'react-redux';
import { setDataBroad } from '../../redux/features/broad.slice';


function Home(props) {
  const token = localStorage.getItem('token') ;
  const idUser = jwtDecode(token)["id"] ;
  const dispatch = useDispatch()
  let [listIdBroad , setListIdBroad] = useState([])
  let [columnsOrder , setColumnOrder] = useState([])
  const initial = {
    columns: {
      "column-0": {
        id: "column-0",
        title: "First column",
        items: [
          {
            id: "1",
            text: "Tung",
          },
        ],
      },
    },
    columnOrder: ["column-0"],
  };
  useEffect(() =>{
    getBroad(idUser)
    .then(res => {
      console.log(res.data.data);
      setColumnOrder(res.data.data)
    })
    .catch(e => console.log(e.message))
  },[])
  return (
    <>
    <header>
    <Navbar></Navbar>
    </header>
    <Sidebar  columnsOrder={columnsOrder}/>
    </>
  );
}
export default Home;
