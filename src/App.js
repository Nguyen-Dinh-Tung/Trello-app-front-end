import { Route, Routes } from "react-router-dom";
import { Login } from "./page/home/Home";
import Register from "./page/Register/Register";

function App() {
  return (
    <div>
      <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>

      </Routes>
    </div>
  );
}

export default App;
