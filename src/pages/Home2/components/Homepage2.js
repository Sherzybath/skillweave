import Main from "./Main";
import Nav from "./Nav"
import SignUp from "./SignUp";
import Login from "./Login"
import Chatbot from "./Chatbot"
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
  return (
    <div className='homepage'>
        <div className='App'>
            <SignUp pare={changeZIndex}/>
            <Login pare={changeZIndex} />
            <Nav pare={changeZIndex}/>
            <Main />
            <Chatbot />
        </div>
    </div>
  )
}

export default Homepage