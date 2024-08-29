import React from "react";

const Login = ({ pare }) => {
  return (
    <div className="box" id="loginContainer">
      <div className="myDiv" id="loginForm">
        <div className="tt">
          <button className="divClose" onClick={() => pare(4)}>
            <i className="material-symbols-outlined"> close </i>
          </button>
        </div>
        <form id="form2" className="forms" action="/rilli_Login?" method="post">
          <div className="heading">
            <span>Login to skillWeave</span>
          </div>
          <div className="enroll">
            <h3>Username</h3>
            <div className="spacer"></div>
            <input
              type="text"
              name="enroll"
              placeholder="Sherzybath"
              required
            />
          </div>
          <div className="password">
            <h3>Password</h3>
            <div className="spacer"></div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="confirm">
            <button className="submit">Login</button>
          </div>
        </form>
        <div className="liner">
          <h5>Want to register?</h5>
          <div className="spacer"></div>
          <button onClick={() => pare(6)} className="redirect" onclick="changeZIndex(6)">
            <u>Sign in</u>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
