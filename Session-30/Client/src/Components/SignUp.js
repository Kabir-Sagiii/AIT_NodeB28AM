import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  let [newuser, setNewUser] = useState({
    email: "",
    password: "",
    username: "",
    phone: "",
    city: "",
  });
  const registerUser = () => {
    console.log(newuser);
    axios
      .post("http://localhost:5050/users/newuser", newuser)
      .then((res) => {
        navigate("/");
      })
      .catch((error) => {
        alert("Error while getting the data");
      });
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <h3 className="text-center text-primary">Register the User</h3>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-4"></div>
        <div className="col-4">
          <input
            onChange={(e) => {
              setNewUser({
                ...newuser,
                email: e.target.value,
              });
            }}
            type="text"
            className="form-control"
            placeholder="Email Id"
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-4"></div>
        <div className="col-4">
          <input
            onChange={(e) => {
              setNewUser({
                ...newuser,
                password: e.target.value,
              });
            }}
            type="password"
            className="form-control"
            placeholder="Password"
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-4"></div>
        <div className="col-4">
          <input
            type="text"
            className="form-control"
            placeholder="User Name"
            onChange={(e) => {
              setNewUser({
                ...newuser,
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
            type="number"
            className="form-control"
            placeholder="Phone"
            onChange={(e) => {
              setNewUser({
                ...newuser,
                phone: e.target.value,
              });
            }}
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-4"></div>
        <div className="col-4">
          <select
            className="form-control"
            onChange={(e) => {
              setNewUser({
                ...newuser,
                city: e.target.value,
              });
            }}
          >
            <option>Select City</option>
            <option>Hyderabad</option>
            <option>Pune</option>
            <option>Mumbai</option>
            <option>Banglore</option>
            <option>chennai</option>
            <option>Delhi</option>
            <option>Indore</option>
          </select>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-4"></div>
        <div className="col-4 text-center ">
          <button
            className="btn px-4 btn-outline-primary"
            onClick={registerUser}
          >
            Register
          </button>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-4"></div>
        <div className="col-4 text-center">
          <Link to="/">
            <button className="btn px-4 btn-outline-primary">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
