import { useState } from "react";
import "./App.css";
import Login from "./Components/Login";
import Nav from "./Components/Nav";
import SignUp from "./Components/SignUp";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import Users from "./Components/Users";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <Routes>
        <Route
          path={"/"}
          element={
            isLoggedIn ? (
              <div>
                <Nav setIsLoggedIn={setIsLoggedIn} />
                <Home />
              </div>
            ) : (
              <Login setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />
        <Route path={"/signup"} element={<SignUp />} />
        <Route
          path={"/users"}
          element={
            isLoggedIn && (
              <>
                <Nav />
                <Users />
              </>
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
