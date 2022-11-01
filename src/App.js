import Navbar from './page/navbar/Navbar';

import { Route, Routes } from "react-router-dom";
import { Login } from "./page/home/Home";
import Sidebar from './page/sidebar/Sidebar';

function App() {
  return (
    <div>
      <Sidebar/>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
