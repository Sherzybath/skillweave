import Process from "./Process";
import Nav from "./Nav";
 
function Forms({username}) {
  return (
    <div className='Forms'>
        <Nav />
        <Process username={username}/>
    </div>
  )
}

export default Forms