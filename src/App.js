import logo from "./logo.svg";
import "./App.css";
import "../src/assets/Styles/style.css";

import UserLogin from "./pages/User-login";
import UserRegist from "./pages/User-regist";
import UserEdit from "./pages/User-edit";
import CompLogin from "./pages/Comp-login";
import CompRegist from "./pages/Comp-regist";
import ResetPass from "./pages/Password-reset";
import ConfirmPass from "./pages/Password-confirm";
import ConfirmPassLogin from "./pages/Password-confirm-login";
import Landing from "./pages/Landing";

import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/comp-login" element={<CompLogin />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/user-regist" element={<UserRegist />} />
          <Route path="/user-edit" element={<UserEdit />} />
          <Route path="/comp-regist" element={<CompRegist />} />
          <Route path="/reset-password" element={<ResetPass />} />
          <Route path="/confirm-password" element={<ConfirmPass />} />
          <Route
            path="/confirm-password-login"
            element={<ConfirmPassLogin />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
