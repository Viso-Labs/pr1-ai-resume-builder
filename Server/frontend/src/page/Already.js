import React from "react";
import Footer2 from "../components/Footer2";
import Heder_nav3 from "../components/Heder_nav3";
import "./Already.css";
import { Link } from "react-router-dom";


export default function Already() {
  return (
    <div>

      <div className="mt-5 row">
        <div className="justify-center mt-5 col-12 d-flex">
          <div className="row">
            <div className="col-12 marbottnm5">
              <div className="mt-3 row">
                <div className="justify-center col-12 d-flex">
                  <h3 className="cho_tx">How do you want to start?</h3>
                </div>
              </div>
              <div className="mt-5 row">
                <div className="justify-center align-bottom col-3 d-flex full_het">
                  <div className="back_sig">
                    <Link to="/ChooseLeter"><h4>BACK</h4></Link>
                  </div>
                </div>
                <div className="justify-center align-bottom col-6 d-flex full_het">

                  <label for="open">
                    <input type="file"  id="open" name="open" style={{display:"none"}}/>
                    <div className="mt-4 mb-4 choosBox me-5 ms-5">
                      <div className="col-12">
                        <div className="row">
                          <div className="justify-center col-12 d-flex">
                            <img className="mt-5" src="./images/choos2.png" alt="" />
                          </div>
                        </div>
                        <div className="row">
                          <div className="justify-center col-12 d-flex">
                            <h3 className="mt-5 tx_bold">UPLOAD MY RESUME</h3>
                          </div>
                        </div>
                        <div className="row">
                          <div className="justify-center col-12 d-flex">
                            <h3 className="mt-5 clas_tx">Acceptable file types: <br/> DOC, DOCX, PDF, HTM, RTF, TXT</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
                <div className="justify-center align-bottom col-3 d-flex full_het">
                  <div className="nex_sig">
                    <Link to="/Experience"><h4>NEXT</h4></Link>
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
