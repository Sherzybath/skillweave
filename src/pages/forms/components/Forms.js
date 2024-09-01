import Process from "./Process";
import Nav from "./Nav";
import Chatbot from "./Chatbot"
function Forms({username}) {
  return (
    <div className='Forms'>
        <Nav />
        <Process username={username}/>
        <Chatbot />
    </div>
  )
}

export default Forms