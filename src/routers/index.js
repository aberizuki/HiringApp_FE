import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  redirect,
} from "react-router-dom";
import Home from "src/pages/Home";
import ProfilePortofolio from "src/pages/PofilePortofolio";
import Hire from "src/pages/Hire";
import UserLogin from "src/pages/UserLogin";
import UserRegist from "src/pages/UserRegist";
import UserEdit from "src/pages/UserEdit";
import CompLogin from "src/pages/CompLogin";
import CompRegist from "src/pages/CompRegist";
import ResetPass from "src/pages/PasswordReset";
import ConfirmPass from "src/pages/PasswordConfirm";
import ConfirmPassLogin from "src/pages/PasswordConfirmLogin";
import Landing from "src/pages/Landing";
import CompEdit from "src/pages/CompEdit";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile-portofolio" element={<ProfilePortofolio />} />
        <Route path="/hire-page" element={<Hire />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/user-regist" element={<UserRegist />} />
        <Route path="/user-edit" element={<UserEdit />} />
        <Route path="/comp-login" element={<CompLogin />} />
        <Route path="/comp-regist" element={<CompRegist />} />
        <Route path="/comp-edit" element={<CompEdit />} />
        <Route path="/reset-password" element={<ResetPass />} />
        <Route path="/confirm-password" element={<ConfirmPass />} />
        <Route path="/confirm-password-login" element={<ConfirmPassLogin />} />
      </Routes>
    </Router>
  );
};

export default App;
