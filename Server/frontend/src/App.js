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
import WorkHistoy3 from "./page/WorkHistoy3";
import WorkHistoy4 from "./page/WorkHistoy4";
import Noexperience from "./page/Noexperience";
import EducationPreveiw from "./page/EducationPreveiw";
import SKIllsSummry from "./page/SKIllsSummry";
import SKIllPic from "./page/SKIllPic";
import Home from "./page/Home";
import ContactUS from "./page/ContactUS";
import CoverTemp from "./page/CoverTemp";
import ChooseTemplate from "./page/ChooseTemplate";
import CoverLetter from "./page/CoverLetter";
import ResumBuilder from "./page/ResumBuilder";
import ResumTemp from "./page/ResumTemp";
import ResumExample from "./page/ResumExample";
import ResumExample2 from "./page/ResumExample2";
import Finnishsec from "./page/Finnishsec";
import Finnishsec2 from "./page/Finnishsec2";
import Finnishsec3 from "./page/Finnishsec3";
import Finnishsec4 from "./page/Finnishsec4";
import Finishted from "./page/Finishted";
import SMMERY01 from "./page/SMMERY01";
import SMMERYfinish from "./page/SMMERYfinish";
import SMMERYfinish2 from "./page/SMMERYfinish2";
import SMMERYfinish3 from "./page/SMMERYfinish3";
import Pdfview from './page/Pdfview';
import SignupAccoyunt from './page/SignupAccoyunt';
import GeneratePdf from './page/GeneratePdf';

import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/ChooseTemplate" element={<ChooseTemplate />} />
        <Route path="/CoverLetter" element={<CoverLetter />} />
        <Route path="/CoverTemp" element={<CoverTemp />} />
        <Route path="/ContactUS" element={<ContactUS />} />
        <Route path="/DashBoard01" element={<DashBoard01 />} />
        <Route path="/DashBoard02" element={<DashBoard02 />} />
        <Route path="/DashBoard03" element={<DashBoard03 />} />
        <Route path="/DashBoard04" element={<DashBoard04 />} />
        <Route path="/DashBoard05" element={<DashBoard05 />} />
        <Route path="/DashBoard06" element={<DashBoard06 />} />
        <Route path="/DashBoard07" element={<DashBoard07 />} />
        <Route path="/Getway01" element={<Getway01 />} />
        <Route path="/Getway02" element={<Getway02 />} />
        <Route path="/Getway03" element={<Getway03 />} />
        <Route path="/Getway04" element={<Getway04 />} />
        <Route path="/Getway05" element={<Getway05 />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/ChooseLeter" element={<ChooseLeter />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/SelectCoun" element={<SelectCoun />} />
        <Route path="/Already" element={<Already />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/Creation" element={<Creation />} />
        <Route path="/WorkHistoy" element={<WorkHistoy />} />
        <Route path="/WorkHistoy2" element={<WorkHistoy2 />} />
        <Route path="/WorkHistoy3" element={<WorkHistoy3 />} />
        <Route path="/Noexperience" element={<Noexperience />} />
        <Route path="/WorkHistoy4" element={<WorkHistoy4 />} />
        <Route path="/EducationPreveiw" element={<EducationPreveiw />} />
        <Route path="/SKIllPic" element={<SKIllPic/>} />
        <Route path="/SKIllsSummry" element={<SKIllsSummry />} />
        <Route path="/SMMERY01" element={<SMMERY01 />}/>
        <Route path="/SMMERYfinish" element={<SMMERYfinish />} />
        <Route path="/SMMERYfinish2" element={<SMMERYfinish2 />} />
        <Route path="/SMMERYfinish3" element={<SMMERYfinish3 />} />
        <Route path="/Finishted" element={<Finishted/>}/>
        <Route path="/Finnishsec" element={<Finnishsec/>} />
        <Route path="/Finnishsec2" element={<Finnishsec2/>} />
        <Route path="/Finnishsec3" element={<Finnishsec3/>} />
        <Route path="/Finnishsec4" element={<Finnishsec4 />} />
        <Route path="/ResumBuilder" element={<ResumBuilder />} />
        <Route path="/ResumTemp" element={<ResumTemp />} />
        <Route path="/ResumExample" element={<ResumExample/>} />
        <Route path="/ResumExample2" element={<ResumExample2/>} /> 
        <Route path="/Pdfview" element={<Pdfview/>} /> 
        <Route path="/SignupAccoyunt" element={<SignupAccoyunt/>} />   
        <Route path="/generatePdf" element={<GeneratePdf />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
