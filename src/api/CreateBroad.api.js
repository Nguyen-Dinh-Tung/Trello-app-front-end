import axios from "axios";

const createBroad = async (data) => {
  console.log(data);
  return await axios.post("http://localhost:8080/broad", data);
};
export default createBroad;
