// React Route
import React from "react";
import {BrowserRouter , Route , Routes  } from  "react-router-dom"
//components
import Register from "./Components/Register";
import Login from "./Components/Login";
import Notfound from "./Components/Notfound";
// import Forgotpassword from "./Components/Forgotpassword";
import Home from "./Components/Home";
import ResetPassword from "./Components/ResetPassword";
import Forgotpassword from "./Components/Forgotpassword";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home />}  />
        <Route path="/Register" element = {<Register />}  />
        <Route path="/Login" element = {<Login />}  />
        <Route  path="/forgotpassword" element = {<Forgotpassword/>} />
        <Route path="/resetpassword/:token" element = {<ResetPassword/>}></Route>
        <Route path="*" element = {<Notfound/>} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
