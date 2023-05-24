import React from "react";
import Footer2 from "../components/Footer2";
import Heder_nav3 from "../components/Heder_nav3";
import "./Experience.css";
import { Link } from "react-router-dom";


export default function Experience() {
  const SELECT01 = () => {
    const pBox1 = document.getElementsByClassName("experiBox1");
    const pBox2 = document.getElementsByClassName("experiBox2");
    const pBox3 = document.getElementsByClassName("experiBox3");
    const pBox4 = document.getElementsByClassName("experiBox4");
    pBox1[0].style.border = "5px solid #0560A4";
    pBox2[0].style.border = "1px solid #0560A4";
    pBox3[0].style.border = "1px solid #0560A4";
    pBox4[0].style.border = "1px solid #0560A4";
};
const SELECT02 = () => {
  const pBox1 = document.getElementsByClassName("experiBox1");
  const pBox2 = document.getElementsByClassName("experiBox2");
  const pBox3 = document.getElementsByClassName("experiBox3");
  const pBox4 = document.getElementsByClassName("experiBox4");
  pBox1[0].style.border = "1px solid #0560A4";
  pBox2[0].style.border = "5px solid #0560A4";
  pBox3[0].style.border = "1px solid #0560A4";
  pBox4[0].style.border = "1px solid #0560A4";
};
const SELECT03 = () => {
  const pBox1 = document.getElementsByClassName("experiBox1");
  const pBox2 = document.getElementsByClassName("experiBox2");
  const pBox3 = document.getElementsByClassName("experiBox3");
  const pBox4 = document.getElementsByClassName("experiBox4");
  pBox1[0].style.border = "1px solid #0560A4";
  pBox2[0].style.border = "1px solid #0560A4";
  pBox3[0].style.border = "5px solid #0560A4";
  pBox4[0].style.border = "1px solid #0560A4";
};
const SELECT04 = () => {
  const pBox1 = document.getElementsByClassName("experiBox1");
  const pBox2 = document.getElementsByClassName("experiBox2");
  const pBox3 = document.getElementsByClassName("experiBox3");
  const pBox4 = document.getElementsByClassName("experiBox4");
    pBox1[0].style.border = "1px solid #0560A4";
    pBox2[0].style.border = "1px solid #0560A4";
    pBox3[0].style.border = "1px solid #0560A4";
    pBox4[0].style.border = "5px solid #0560A4";
};





  return (
    <div>
      <Heder_nav3 />

      <div className="row">
        <div className="justify-center col-12 d-flex">
          <div className="row">
            <div className="col-12 ">
              <div className="mt-3 row">
                <div className="justify-center col-12 d-flex">
                  <h3 className="cho_tx">How long have you been working?</h3>
                </div>
                <div className="justify-center col-12 d-flex">
                  <h4 className="">We'll find the best templates for your experience level.</h4>
                </div>
              </div>
              <div className="mt-5 row marbottnm3">
                {/* <div className="col-12"> */}
                  <div className="justify-center col-12 d-flex">
                    <div className="mt-2 mb-2 experiBox1 ms-2 me-2" onClick={SELECT01}>
                      <h3 className="experiTX">No Experience</h3>
                    </div>
                    <div className="mt-2 mb-2 experiBox2 ms-2 me-2" onClick={SELECT02}>
                      <h3 className="experiTX">Less Than 3 Years</h3>
                    </div>
                    <div className="mt-2 mb-2 experiBox3 ms-2 me-2" onClick={SELECT03}>
                      <h3 className="experiTX">3- 5 Years</h3>
                    </div>
                    <div className="mt-2 mb-2 experiBox4 ms-2 me-2" onClick={SELECT04}>
                      <h3 className="experiTX">5- 10+ Years</h3>
                    </div>
                  </div>
                {/* </div> */}
              </div>
            </div>
          </div>

          <div className="row poti_setSIgn">
            <div className="justify-center col-12 d-flex ">
              <h2 className="mt-2 mb-2 tx_foSign ms-2 me-2">TERMS AND CONDITIONS </h2>
              <h2 className="mt-2 mb-2 tx_foSign ms-2 me-2"> | PRIVACY POLICY </h2>
              <h2 className="mt-2 mb-2 tx_foSign ms-2 me-2">| ACCESSIBILITY</h2>
              <h2 className="mt-2 mb-2 tx_foSign ms-2 me-2">| CONTACT US</h2>
            </div>
          </div>
        </div>
      </div>

      <Footer2 />
    </div>
  );
}
