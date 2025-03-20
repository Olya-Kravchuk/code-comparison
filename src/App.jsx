import { Route,BrowserRouter as Router, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home.jsx";
import Profile from "./components/Profile.jsx";
import Setting from "./components/Setting.jsx";
import About from "./components/About.jsx";
import More from "./components/More.jsx";
import User from "./components/User.jsx";

function App() {

  return (
    <Router>
    <div className="flex">
      <Sidebar />
      <div className="flex-1 min-h-screen bg-blue-200 flex items-center justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/setting" element={<Setting />}>
            <Route path="about" element={<About/>}/>
            <Route path="more" element={<More/>}/>
          </Route>
          <Route path="/user/:id" element={<User/>}/>
        </Routes>
      </div>
    </div>
  </Router>
  )
}

export default App
