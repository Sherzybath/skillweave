import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCircleQuestion,
  faMessage,
} from "@fortawesome/free-regular-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const SignUp = ({ pare, username, email, password, submit }) => {
  return (
    <div className="box" id="signContainer">
      <div className="myDiv" id="signUpForm">
        <div className="tt">
          <button className="divClose" onClick={() => pare(3)}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <form id="form1" className="forms" method="post" onSubmit={submit}>
          <div className="heading">
            <span className="basic">Sign in to skillWeave</span>
          </div>
          <div className="enroll columner">
            <h3>Username</h3>

            <div className="spacer"></div>
            <input
              type="text"
              name="enrollment_id"
              placeholder="TommyJZ"
              onChange={(e) => username(e.target.value)}
            />
          </div>
          <div className="enroll columner">
            <h3>Email Address</h3>
            <div className="spacer"></div>
            <input
              type="text"
              name="batch"
              placeholder="something@gmail.com"
              onChange={(e) => email(e.target.value)}
            />
          </div>
          <div className="password columner">
            <h3>Password</h3>
            <div className="spacer"></div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => password(e.target.value)}
            />
          </div>
          <div className="confirm">
            <button className="submit" type="submit">
              Sign In
            </button>
          </div>
        </form>
        <div className="liner">
          <h5>Already a member?</h5>
          <div className="spacer"></div>
          <button onClick={() => pare(5)} className="redirect">
            <u>login</u>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
