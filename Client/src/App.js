import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard01 from "./page/DashBoard01";
import DashBoard02 from "./page/DashBoard02";
import DashBoard03 from "./page/DashBoard03";
import DashBoard04 from "./page/DashBoard04";
import DashBoard05 from "./page/DashBoard05";
import DashBoard06 from "./page/DashBoard06";
import DashBoard07 from "./page/DashBoard07";
import Getway01 from "./page/Getway01";
import Getway02 from "./page/Getway02";
import Getway03 from "./page/Getway03";
import Getway04 from "./page/Getway04";
import Getway05 from "./page/Getway05";
import SignUp from "./page/SignUp";
import ChooseLeter from "./page/ChooseLeter";
import Experience from "./page/Experience";
import SelectCoun from "./page/SelectCoun";
import Already from "./page/Already";
import LogIn from "./page/LogIn";
import Creation from "./page/Creation";
import WorkHistoy from "./page/WorkHistoy";
import WorkHistoy2 from "./page/WorkHistoy2";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<DashBoard01/>} />
    <Route path="/DashBoard02" element={<DashBoard02/>} />
    <Route path="/DashBoard03" element={<DashBoard03/>} />
    <Route path="/DashBoard04" element={<DashBoard04/>} />
    <Route path="/DashBoard05" element={<DashBoard05/>} />
    <Route path="/DashBoard06" element={<DashBoard06/>} />
    <Route path="/DashBoard07" element={<DashBoard07/>} />
    <Route path="/Getway01" element={<Getway01/>} />
    <Route path="/Getway02" element={<Getway02/>} />
    <Route path="/Getway03" element={<Getway03/>} />
    <Route path="/Getway04" element={<Getway04/>} />
    <Route path="/Getway05" element={<Getway05/>} />
    <Route path="/SignUp" element={<SignUp/>} />
    <Route path="/ChooseLeter" element={<ChooseLeter/>} />
    <Route path="/Experience" element={<Experience/>} />
    <Route path="/SelectCoun" element={<SelectCoun/>} />
    <Route path="/Already" element={<Already/>} />
    <Route path="/LogIn" element={<LogIn/>} />
    <Route path="/Creation" element={<Creation/>} />
    <Route path="/WorkHistoy" element={<WorkHistoy/>} />
    <Route path="/WorkHistoy2" element={<WorkHistoy2/>} />
    </Routes>
    </BrowserRouter>

  );
}

export default App;
