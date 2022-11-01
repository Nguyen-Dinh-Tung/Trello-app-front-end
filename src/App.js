import { Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import Sidebar from "./component/sidebar/Sidebar";
import { Login } from "./page/home/Home";

function App() {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
