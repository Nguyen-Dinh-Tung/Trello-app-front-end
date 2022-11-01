import Navbar from "./components/navbar/Navbar";

import { Route, Routes } from "react-router-dom";

import Register from "./page/Register/Register";
import Sidebar from "./components/sidebar/Sidebar";
import { Login } from "./page/login/Login";



function App() {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navbar />}>
          <Route path="/home" element={<Sidebar />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
