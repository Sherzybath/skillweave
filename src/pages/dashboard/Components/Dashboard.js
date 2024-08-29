import Nav from "./Nav";
import Main from "./Main";
import Chatbot from "./Chatbot";
import MainCont from "./MainCont";
import { useState } from "react";
function Dashboard() {
    const [showComponent, setShowComponent] = useState(false);
  const toggleComponent = () => { 
    setShowComponent(prevState => !prevState);
  };
  return (
    <div className='Dashboard'>
        <MainCont toggle2={toggleComponent}/>
        {/* <div className="liner">
        <Nav toggle={toggleComponent}/>
        <Main/>
        </div> */}
        {showComponent && <Chatbot toggle={toggleComponent} />}
    </div>
  )
}

export default Dashboard