import React from "react";
import Footer2 from "../components/Footer2";
import Heder_nav3 from "../components/Heder_nav3";
import "./SignUp.css";
import { Link } from "react-router-dom";


export default function SignUp() {
  return (
    <div>
      <Heder_nav3 />

      <div className="row">
        <div className="justify-center col-12 d-flex">
          <div className="row">
            <div className="col-md-6 col-12 leftSignup ">
              <div className="mt-5 row ms-5 me-5">
                <h1 className="hedtxsignup">Just three simple steps</h1>
              </div>
              <div className="mt-4 row ms-3 me-3">
                <div className="col-2">
                  <div className="numberBox">
                    <h3>1</h3>
                  </div>
                </div>
                <div className="col-10">
                  <h3>Select a template from our library of professional designs</h3>
                </div>
              </div>
              <div className="mt-4 row ms-3 me-3">
                <div className="col-2">
                  <div className="numberBox">
                    <h3>2</h3>
                  </div>
                </div>
                <div className="col-10">
                  <h3>Build your resume with our industry-specific bullet points</h3>
                </div>
              </div>
              <div className="mt-4 marbottnm row ms-3 me-3">
                <div className="col-2">
                  <div className="numberBox">
                    <h3>3</h3>
                  </div>
                </div>
                <div className="col-10">
                  <h3>Download your resume, print it out and get it ready to send!</h3>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row">
                <div className="justify-center align-middle col-12 d-flex">
                  <img className="signrighimg" src="./images/signLeft.png" alt="" />
                </div>
              </div>
              <div className="row">
                <div className="justify-center col-12 d-flex">
                  <div className="creMyREBTN">
                    <Link to="/ChooseLeter"><h4>CREATE MY RESUME</h4></Link>
                  </div>
                </div>
              </div>
              <div className="mt-4 mb-5 row ms-5 me-5">
                <div className="col-12">
                  <p className="sig7nTxP">By clicking Create My Resume, you agree to our Terms of Use and Privacy Policy.</p>
                </div>
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
