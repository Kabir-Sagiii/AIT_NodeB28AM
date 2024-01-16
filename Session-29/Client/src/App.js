import logo from "./logo.svg";
import "./App.css";
import Login from "./Components/Login";
import Nav from "./Components/Nav";
import SignUp from "./Components/SignUp";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Login />} />
        <Route path={"/signup"} element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
