import React from "react";
import axios from "axios";

async function getBroad(idUser) {
  return await axios.get(`http://localhost:8080/user/broad/` + idUser);
}

export default getBroad;
