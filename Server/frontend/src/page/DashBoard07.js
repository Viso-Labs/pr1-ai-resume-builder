import React from "react";
import "./DashBoard07.css";
import Footer from "../components/Footer";
import Heder_nav from "../components/Heder_nav";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

export default function DashBoard07() {
  return (
    <div>
      <Heder_nav />

      <div class="row bg_midle_box2">
        <div>
          <div class="row">
            <div class="col-md-4 col-12 mt-5">
              <div className="mt-5">
                <div class="WhiteBox mt-5 ms-5 me-5">
                <div class="row d-flex justify-content-center align-items-center">
                                        <div class="col-12 d-flex justify-content-center">
                                            <Link to="/DashBoard02"><h4 class="mt-4" >
                                                General Account Settings
                                            </h4></Link>
                                        </div>
                                        <Link to="/DashBoard04"><div class="col-12 mt-4 ms-4" >
                                            <h4 class="mt-3 ms-3">Subscription</h4>
                                        </div></Link>
                                        <Link to="/DashBoard06"><div class="col-12 mt-3 ms-4">
                                            <h4 class="mt-3 ms-3">Communication Preferences</h4>
                                        </div></Link>
                                        <Link to="/DashBoard07"><div class="col-12 mt-3 ms-4" style={{ color: "#0560A4" }}>
                                            <h4 class="mt-3 ms-3">Privacy Settings</h4>
                                        </div></Link>
                                    </div>
                </div>
              </div>
            </div>
            <div class="col-md-7 col-12 mt-5">
              <div class="row mt-5 ms-2">
                <h4 style={{ color: "#50E78C" }}>Privacy Settings</h4>
              </div>
              <div class="row mt-1 ms-1">
                <h5 className="color_white">Cookie Files settings</h5>
              </div>
              <div class="row mt-1">
                <h6 className="color_white">
                  Click on the type of cookies below to customize your
                  experience on our site. You may freely give, refuse or
                  withdraw your consent. Keep in mind that disabling cookies may
                  affect your experience on the site. For more information
                  please visit our Cookie Policy and Privacy Policy.
                </h6>
              </div>
              <div class="row mt-5 ms-2">
                <div class="col-1">
                  <Form.Check
                    className="with_set"
                    type="checkbox"
                    id={`default-checkbox`}
                  />
                </div>
                <div class="col-6">
                  <h5 class="tx_white">Analytics</h5>
                </div>
              </div>
              <div class="row mt-2 ms-2">
                <div class="col-1">
                  <Form.Check
                    className="with_set"
                    type="checkbox"
                    id={`default-checkbox`}
                  />
                </div>
                <div class="col-6">
                  <h5 class="tx_white">Advertising</h5>
                </div>
              </div>
              <div class="row mt-2 ms-2">
                <div class="col-1">
                  <Form.Check
                    className="with_set"
                    type="checkbox"
                    id={`default-checkbox`}
                  />
                </div>
                <div class="col-6">
                  <h5 class="tx_white">Personalization</h5>
                </div>
              </div>
              <div class="row mt-2 ms-2">
                <div class="col-1">
                  <Form.Check
                    className="with_set"
                    type="checkbox"
                    id={`default-checkbox`}
                  />
                </div>
                <div class="col-6">
                  <h5 class="tx_white">Necessary</h5>
                </div>
              </div>

              <div class="row mt-2">
                <div class="col-6 ms-2">
                  {/* active = className="btn_active"
                                    disable = className="btn_block" */}
                  <div className="mt-5 btn_save_chane me-5 btn_active">
                    <h5 className="color_white">SAVE CHANGES</h5>
                  </div>
                </div>
              </div>

              <div class="row mt-3">
                <h6 className="color_white">
                  We will try to complete all changes in 24 hours but may take
                  up to 5-7 business days.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
