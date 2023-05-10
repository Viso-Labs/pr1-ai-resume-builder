import React from "react";
import Footer2 from "../components/Footer2";
import Heder_nav3 from "../components/Heder_nav3";
import "./ChooseLeter.css";
import { Link } from "react-router-dom";


export default function ChooseLeter() {
  return (
    <div>
      <Heder_nav3 />

      <div className="row">
        <div className="justify-center col-12 d-flex">
          <div className="row">
            <div className="col-12 marbottnm2">
              <div className="mt-3 row">
                <div className="justify-center col-12 d-flex">
                  <h3 className="cho_tx">How do you want to start?</h3>
                </div>
              </div>
              <div className="mt-5 row">
                <div className="justify-center col-12 col-md-6 d-flex">
                  <div className="mt-4 mb-4 choosBox me-5 ms-5">
                    <div className="col-12">
                      <div className="row">
                        <div className="justify-center col-12 d-flex">
                          <img className="mt-5" src="./images/choos1.png" alt="" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="justify-center col-12 d-flex">
                          <h3 className="mt-5 tx_bold">CREATE A NEW RESUME</h3>
                        </div>
                      </div>
                      <div className="row">
                        <div className="justify-center col-12 d-flex">
                          <h3 className="mt-5 clas_tx">We will help you create a resume step-by-step.</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="justify-center col-12 col-md-6 d-flex">
                  <div className="mt-4 mb-4 choosBox me-5 ms-5">
                    <div className="col-12">
                      <div className="row">
                        <div className="justify-center col-12 d-flex fix_up">
                          <img className="mt-5 " src="./images/choos2.png" alt="" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="justify-center col-12 d-flex">
                          <h3 className="mt-5 tx_bold">I ALREADY HAVE A RESUME</h3>
                        </div>
                      </div>
                      <div className="row">
                        <div className="justify-center col-12 d-flex">
                          <h3 className="mt-5 clas_tx">We'll re-format it and fill in your information so you don't have to.</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 mb-5 row">
                <div className="mt-4 col-12">
                  <div className="row">
                    <div className="justify-start col-6 d-flex">
                      <div className="back_sig">
                        <h4>BACK</h4>
                      </div>
                    </div>
                    <div className="justify-end col-6 d-flex">
                      <div className="nex_sig">
                      <Link to="/Already"><h4>NEXT</h4></Link>
                      </div>
                    </div>
                  </div>
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
