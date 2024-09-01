import { BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import { useState } from "react";
import Homepage from "./pages/home/components/Homepage";
import Dashboard from "./pages/dashboard/Components/Dashboard";
import Forms from "./pages/forms/components/Forms";
import DashboardF from "./pages/dashboardF/Components/DashboardF";
import Home2 from './pages/Home2/components/Homepage2';
function App() {
  const [username, setUsername] = useState('');
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage username={username} setUsername={setUsername}/>}/>
          <Route path="/Forms" element={<Forms username={username}/>}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/dashboardF" element={<DashboardF/>}></Route>
          <Route path="/2" element={<Home2/>}></Route>
          <Route path="/dashboard"></Route>
          <Route path="/dashboard/:filter" element={<Dashboard />}></Route>
          <Route path="/dashboardF/:filter" element={<DashboardF />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
