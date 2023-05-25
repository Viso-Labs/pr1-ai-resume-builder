import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Footer3 from "../components/Footer3";
import Heder_nav7 from "../components/Heder_nav7";
import Dropdown from "react-bootstrap/Dropdown";
import "./Finnishsec2.css";
import { Link } from "react-router-dom";

export default function Finnishsec2() {
  return (
    <div>
      <div className="bodyfc2">
        <Heder_nav7 />

        <div class="v529_3453">
          <div class="name"></div>
          <div class="name"></div>
          <div class="name"></div>
          <div class="name"></div>
          <span class="v529_3552">
            Looking good! This resume is optimized with Smart Apply TM
            technology to <span className="tx_bold">stand out from the competition</span>
          </span>
          <span class="v529_3553">
            Companies use software to read, filter and rank resumes. Our
            <span className="tx_bold">Patented Technology</span> increases your chances of getting in front of
            hiring managers and will: <span className="tx_redtx">Tell more</span>
          </span>
          <span class="v529_3554">
          • Make sure your resume gets past employer software filters<br/> 
            
          • Provide
            keywords companies look for <br/> 
            
            • Get you more interviews <br/> <br/> 
            
            Now, let’s
            finalize your resume!
          </span>
          <div class="v530_3559"></div>
          <div class="v530_3564">
            <div class="v530_3562"></div>
            <div class="v530_3558"></div>
          </div>
          <div class="v530_3563">
            <div class="v530_3561"></div>
            <div class="v530_3557"></div>
          </div>
        </div>

        <div className="'row potiback">
        <Link to="/Finnishsec"><div className="col-12">
            <img src="./images/BACK.png" alt="" />
          </div></Link>
        </div>

        <div className="'row potinext">
        <Link to="/Finnishsec3"><div className="col-12">
            <img src="./images/NEXT.png" alt="" />
          </div></Link>
        </div>

        <Footer3 />
      </div>
    </div>
  );
}
