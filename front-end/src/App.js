// React Route
import React from "react";
import {BrowserRouter , Route , Routes  } from  "react-router-dom"
//components
import Register from "./Components/Register";
import Login from "./Components/Login";
import Notfound from "./Components/Notfound";
import Forgotpasswod from "./Components/Forgotpasswod";
import Home from "./Components/Home";
import EmailVerify from "./Components/EmailVerify";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home />}  />
        <Route path="/Register" element = {<Register />}  />
        <Route path="/Login" element = {<Login />}  />
        <Route  path="/Forgotpassword" element = {<Forgotpasswod/>} />
        <Route path="*" element = {<Notfound/>} />
        <Route path="/EmailVerify" element = {<EmailVerify/>}></Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
