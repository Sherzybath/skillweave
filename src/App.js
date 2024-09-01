import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/home/components/Homepage";
import Dashboard from "./pages/dashboard/Components/Dashboard";
import Forms from "./pages/forms/components/Forms";
import DashboardF from "./pages/dashboardF/Components/DashboardF";
import Home2 from "./pages/Home2/components/Homepage2";
import "./App.css";
import io from "socket.io-client";
import Chat from "./Chat";
import PaymentDetailsPage from "./pages/dashboardF/Components/PaymentDetailsPage";
import OtpVerificationPage from "./pages/dashboardF/Components/OtpVerificationPage";
import PaymentSuccessPage from "./pages/dashboardF/Components/PaymentSuccessPage";

const socket = io.connect("http://localhost:3001");
function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Homepage username={username} setUsername={setUsername} />}
          />
          <Route path="/Forms" element={<Forms username={username} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboardF" element={<DashboardF />}></Route>
          <Route path="/2" element={<Home2 />}></Route>
          <Route path="/payment" element={<PaymentDetailsPage />} />
          <Route path="/otp" element={<OtpVerificationPage />} />
          <Route path="/success" element={<PaymentSuccessPage />} />
          <Route path="/dashboard"></Route>
          <Route path="/dashboard/:filter" element={<Dashboard />}></Route>
          <Route path="/dashboardF/:filter" element={<DashboardF />}></Route>

          {/* Chat Route */}
          <Route
            path="/chat"
            element={
              !showChat ? (
                <div className="joinChatContainer">
                  <h3>Join A Chat</h3>
                  <input
                    type="text"
                    placeholder="John..."
                    onChange={(event) => {
                      setUsername(event.target.value);
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Room ID..."
                    onChange={(event) => {
                      setRoom(event.target.value);
                    }}
                  />
                  <button onClick={joinRoom}>Join A Room</button>
                </div>
              ) : (
                <Chat socket={socket} username={username} room={room} />
              )
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
