import Main from "./Main";
import Nav from "./Nav"
import SignUp from "./SignUp";
import Login from "./Login"
import { useState } from "react";
function changeZIndex(boxNumber) {
  var box1 = document.getElementById("signContainer");
  var box2 = document.getElementById("loginContainer");

  if (boxNumber === 1) {
    box1.style.zIndex = 2; 
    box1.style.opacity = 1;
  } else if (boxNumber === 2) {
    box2.style.zIndex = 2; 
    box2.style.opacity = 1;
  } else if (boxNumber === 3) {
    box1.style.zIndex = -1;
    box1.style.opacity = 0;
  } else if (boxNumber === 4) {
    box2.style.zIndex = -1;
    box2.style.opacity = 0;
  } else if (boxNumber === 5) {
    box1.style.zIndex = -1;
    box2.style.zIndex = 2;
    box2.style.opacity = 1;
    box1.style.opacity = 0;
  } else if (boxNumber === 6) {
    box2.style.zIndex = -1;
    box1.style.zIndex = 2;
    box1.style.opacity = 1;
    box2.style.opacity = 0;
  }
}
function Homepage() {
  const [username, setUsername] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      username,
      emailAddress,
      password,
    });
  };
  return (
    <div className='homepage'>
        <div className='App'>
            <SignUp pare={changeZIndex} username={setUsername} email={setEmailAddress} password={setPassword} submit={handleSubmit}/>
            <Login pare={changeZIndex} />
            <Nav pare={changeZIndex}/>
            <Main />
        </div>
    </div>
  )
}

export default Homepage