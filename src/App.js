import Navbar from "./components/navbar/Navbar";

import { Route, Routes } from "react-router-dom";
import Register from "./page/Register/Register";
import Sidebar from "./components/sidebar/Sidebar";
import { Login } from "./page/login/Login";
import { Home } from "./page/home/Home";
import axios from "axios";
import { GoogleOAuthProvider } from "@react-oauth/google";


function App() {
  return (
    <div>
      <GoogleOAuthProvider clientId="911041045826-05asjep9lakm58r23ckriuusu8mv38mp.apps.googleusercontent.com">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route path="/user" element={<Home />} />
          <Route path="/" element={<Navbar />}>
            <Route path="/home" element={<Sidebar />} />
          </Route>
        </Routes>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
