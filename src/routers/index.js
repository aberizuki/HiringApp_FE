import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  redirect,
} from "react-router-dom";
// import Home from "src/pages/Home";
// import ProfilePortofolio from "src/pages/Pofile-Portofolio";
// import Hire from "src/pages/Hire";
import UserLogin from "../../src/pages/User-login";
import UserRegist from "../../src/pages/User-regist";
import UserEdit from "../../src/pages/User-edit";
import CompLogin from "../../src/pages/Comp-login";
import CompRegist from "../../src/pages/Comp-regist";
import ResetPass from "../../src/pages/Password-reset";
import ConfirmPass from "../../src/pages/Password-confirm";
import ConfirmPassLogin from "../../src/pages/Password-confirm-login";
import Landing from "../../src/pages/Landing";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Landing />} />
        {/* <Route path="/home" element={<Home />} /> */}
        {/* <Route path="/profile-portofolio" element={<ProfilePortofolio />} /> */}
        {/* <Route path="/hire-page" element={<Hire />} /> */}
        <Route path="/comp-login" element={<CompLogin />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/user-regist" element={<UserRegist />} />
        <Route path="/user-edit" element={<UserEdit />} />
        <Route path="/comp-regist" element={<CompRegist />} />
        <Route path="/reset-password" element={<ResetPass />} />
        <Route path="/confirm-password" element={<ConfirmPass />} />
        <Route path="/confirm-password-login" element={<ConfirmPassLogin />} />
      </Routes>
    </Router>
  );
};

export default App;
