import { Route, Routes } from "react-router-dom";
import { Login } from "./page/home/login/Login";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
