// React Route
import React from "react";
import {BrowserRouter , Route , Routes  } from  "react-router-dom"
//components
import Register from "./Components/Register";
import Login from "./Components/Login";
import Notfound from "./Components/Notfound";
import Home from "./Components/Home";
import ResetPassword from "./Components/ResetPassword";
import Forgotpassword from "./Components/Forgotpassword";
import Profile from "./Components/Profile";
import ProtectRoute from "./Utils/ProtectRoute";


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element = {<Home />}  />
      <Route path="/Register" element = {<Register />}  />
      <Route path="/Login" element = {<Login />}  />
      <Route element = {<ProtectRoute />}  >
          <Route path="/profile" element = {<Profile />}  />
          <Route path="/forgotpassword" element = {<Forgotpassword/>} />
          <Route path="/resetpassword/:token" element = {<ResetPassword/>}></Route>
      </Route>
      <Route path="/*" element = {<Notfound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
