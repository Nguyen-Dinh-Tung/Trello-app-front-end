import axios from "axios";
import Http from "../http/http";

async function getBroad(idUser) {
  return await axios.get(`http://localhost:8080/user/broad/` + idUser);
}

export default getBroad;
