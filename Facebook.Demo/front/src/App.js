import {
  
  Routes,
  Route
} from "react-router-dom";
import Profile from "./pages/profile/Profile";
import LoginSignup from "./pages/login-signup/home";
import Home from "./pages/home/Home";
import React from "react";


function App() {
  return (
    
    <Routes>
      <Route exact path="/" element={<LoginSignup />}/>
        <Route path="/home" element={<Home />} />
        <Route path="/profile/:username" element={<Profile />}/>
        
      
    </Routes>
    
 
  );
}
export default App;