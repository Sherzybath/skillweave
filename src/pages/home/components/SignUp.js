import React from "react";

const SignUp = ({ pare }) => {
  return (
    <div className="box" id="signContainer">
      <div className="myDiv" id="signUpForm">
        <div className="tt">
          <button className="divClose" onClick={() => pare(3)}>
            <i className="material-symbols-outlined"> close </i>
          </button>
        </div>
        <form id="form1" className="forms" action="/rilli_signUp" method="post">
          <div className="heading">
            <span>Sign in to skillWeave</span>
          </div>
          <div className="enroll columner">
            <h3>Username</h3>

            <div className="spacer"></div>
            <input
              type="text"
              name="enrollment_id"
              placeholder="TommyJZ"
            />
          </div>
          <div className="enroll columner">
            <h3>Email Address</h3>
            <div className="spacer"></div>
            <input type="text" name="batch" placeholder="something@gmail.com" />
          </div>
          <div className="password columner">
            <h3>Password</h3>
            <div className="spacer"></div>
            <input type="password" name="password" placeholder="Password" />
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
