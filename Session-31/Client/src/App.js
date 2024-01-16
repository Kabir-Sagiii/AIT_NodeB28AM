import { useState } from "react";
import "./App.css";
import Login from "./Components/Login";
import Nav from "./Components/Nav";
import SignUp from "./Components/SignUp";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import Users from "./Components/Users";
import Profile from "./Components/Profile";
import Products from "./Components/Products";

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
          path={"/profile"}
          element={
            isLoggedIn ? (
              <div>
                <Nav />
                <Profile />
              </div>
            ) : (
              <Login setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />
        <Route
          path={"/products"}
          element={
            isLoggedIn ? (
              <div>
                <Nav />
                <Products />
              </div>
            ) : (
              <Login setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />
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
