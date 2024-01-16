import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { userActionCreator } from "../Redux/Action";
import { useDispatch } from "react-redux";

function Login({ setIsLoggedIn }) {
  const dispatch = useDispatch();
  let [state, setState] = useState({
    username: "",
    password: "",
  });

  const login = () => {
    axios
      .post("http://localhost:5050/users/login", state)
      .then((res) => {
        if (res.data.ok) {
          // console.log(res.data.result[0]);
          localStorage.setItem("token", res.data.token);
          dispatch(userActionCreator(res.data.result[0]));
          setIsLoggedIn(true);
        } else {
          throw Error("User Does not Exist");
        }
      })
      .catch((error) => {
        console.log("error", error);
        alert(error.message);
      });
  };
  return (
    <div className="container  mt-5">
      <div className="row mt-5">
        <div className="col-5"></div>
        <div className="col-4">
          <h2>Login Form</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <input
            type="text"
            placeholder="username"
            className="form-control"
            onChange={(e) => {
              setState({
                ...state,
                username: e.target.value,
              });
            }}
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-4"></div>
        <div className="col-4">
          <input
            type="password"
            placeholder="password"
            className="form-control"
            onChange={(e) => {
              setState({
                ...state,
                password: e.target.value,
              });
            }}
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-4"></div>
        <div className="col-4 text-center">
          <button className="btn px-5 btn-outline-primary" onClick={login}>
            Login
          </button>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-4"></div>
        <div className="col-4 text-center">
          <Link to="/signup">
            {" "}
            <button className="btn px-5 btn-outline-primary">
              Create Account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
