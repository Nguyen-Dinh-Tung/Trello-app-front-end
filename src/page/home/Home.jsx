import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import getBroad from "./../../api/GetBroad";
import { useState } from "react";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useDispatch } from "react-redux";
import { setDataBroad } from "../../redux/features/broad.slice";
import { setShowWorkSpace } from "../../redux/features/showModal.slice";

function Home(props) {
  const token = localStorage.getItem("token");
  const idUser = jwtDecode(token)["id"];
  const dispatch = useDispatch();

  let [listIdBroad, setListIdBroad] = useState([]);
  let [columnsOrder, setColumnOrder] = useState([]);
  let [workspace, setWorkSpace] = useState([]);
  useEffect(() => {
    getBroad(idUser)
      .then((res) => {
        console.log("🚀 ~ file: Home.jsx ~ line 24 ~ .then ~ res", res);
        setColumnOrder(res.data.data);
        setWorkSpace(res.data.listWorkSpace);
        dispatch(setShowWorkSpace(res.data.listWorkSpace));
      })
      .catch((e) => console.log(e.message));
  }, []);

  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <Sidebar columnsOrder={columnsOrder} WorkSpace={workspace} />
    </>
  );
}
export default Home;
