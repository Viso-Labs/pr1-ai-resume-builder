import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard01 from "./page/DashBoard01";
import DashBoard02 from "./page/DashBoard02";
import DashBoard03 from "./page/DashBoard03";
import Getway01 from "./page/Getway01";
import Getway02 from "./page/Getway02";
import Getway03 from "./page/Getway03";
import Getway04 from "./page/Getway04";

function App() {
  return (

    <BrowserRouter>
    <Routes>
    <Route path="/" element={<DashBoard01/>} />
    <Route path="/setting" element={<DashBoard02/>} />
    <Route path="/jobs" element={<DashBoard03/>} />
    <Route path="/Getway01" element={<Getway01/>} />
    <Route path="/Getway02" element={<Getway02/>} />
    <Route path="/Getway03" element={<Getway03/>} />
    <Route path="/Getway04" element={<Getway04/>} />
  </Routes>
    </BrowserRouter>

  
  );
}

export default App;
