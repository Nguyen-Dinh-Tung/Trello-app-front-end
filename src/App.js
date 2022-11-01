import Navbar from "./page/navbar/Navbar";
import { Route, Routes } from "react-router-dom";

import Register from "./page/Register/Register";
import Sidebar from "./page/sidebar/Sidebar";
import { Login } from "./page/home/login/Login";


function App() {
  return (
    <div>
      <Routes>
          <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navbar />}>
          <Route path="/home" element={<Sidebar />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
