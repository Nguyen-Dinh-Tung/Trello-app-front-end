import Navbar from './page/navbar/Navbar';

import { Route, Routes } from "react-router-dom";
import { Login } from "./page/home/Home";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
