import { BrowserRouter as Router, Route, Routes, link } from "react-router-dom";
import Homepage from "./pages/home/components/Homepage";
import Dashboard from "./pages/dashboard/Components/Dashboard";
import Forms from "./pages/forms/components/Forms";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/Forms" element={<Forms />}/>
          
          <Route path="/dashboard" element={<Dashboard />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
