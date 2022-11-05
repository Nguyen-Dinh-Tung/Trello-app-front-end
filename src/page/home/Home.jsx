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
  useEffect(() =>{
    getBroad(idUser)
    .then(res => dispatch(setDataBroad(res.data.data)))
    .then(e => console.log(e.message))
  },[])
  return (
    <>
    <header>
    <Navbar></Navbar>
    </header>
    <Sidebar/>
    </>
  );
}

export default Home;