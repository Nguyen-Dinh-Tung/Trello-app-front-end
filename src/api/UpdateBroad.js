import React from "react";
import axios from "axios";
async function UpdateBroad(data) {
  return await axios.put("http://localhost:8080/user/broad-data", data);
}
export default UpdateBroad;
