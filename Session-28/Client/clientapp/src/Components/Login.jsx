import React from "react";

function Login() {
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
          <input type="text" className="form-control" />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-4"></div>
        <div className="col-4">
          <input type="password" className="form-control" />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-4"></div>
        <div className="col-4 text-center">
          <button className="btn px-5 btn-outline-primary">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
