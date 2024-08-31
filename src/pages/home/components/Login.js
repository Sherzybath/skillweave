import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCircleQuestion, faMessage } from '@fortawesome/free-regular-svg-icons';
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Login = ({ pare, email, password, submit}) => {
  return (
    <div className="box" id="loginContainer">
      <div className="myDiv" id="loginForm">
        <div className="tt">
          <button className="divClose" onClick={() => pare(4)}>
          <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <form id="form2" className="forms" method="post" onSubmit={submit}>
          <div className="heading">
            <span>Login to skillWeave</span>
          </div>
          <div className="enroll">
            <h3>Email</h3>
            <div className="spacer"></div>
            <input
              type="text"
              name="enroll"
              placeholder="Sherzybath"
              onChange={(e) => email(e.target.value)}
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
              onChange={(e) => password(e.target.value)}
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
