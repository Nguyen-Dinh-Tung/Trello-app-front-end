import Navbar from "./components/navbar/Navbar";

import {Route, Routes} from "react-router-dom";
import {DndProvider} from "react-dnd";
import Register from "./page/Register/Register";
import Sidebar from "./components/sidebar/Sidebar";
import {Login} from "./page/login/Login";
import Broad from "./page/broad/Broad";
import Home from "./page/home/Home";
import {DragDropContext} from "react-beautiful-dnd";
function App() {
  return (
    <div>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navbar />}>
            <Route path="/home" element={<Sidebar />} />
            <Route path="/broad" element={<Broad />} />
            <Route path="/test" element={<Home />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
