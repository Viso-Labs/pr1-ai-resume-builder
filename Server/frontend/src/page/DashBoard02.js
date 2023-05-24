import React from "react";
import "./DashBoard02.css";
import Footer from "../components/Footer";
import Heder_nav from "../components/Heder_nav";
import { Link } from "react-router-dom";

export default function DashBoard02() {
  const detaile = {
    aId: "407567606",
    email: "shanratsharanadata@gmail.com",
    password: "******",
    contact: "SL, +94 716467055",
  };

  const edit = () => {
    alert("edit");
  };

  return (
    <div>
      <Heder_nav />

      <div class="row bg_midle_box2">
        <div>
          <div class="row">
            <div class="col-md-4 col-12">
              <div>
                <div class="WhiteBox mt-5 ms-5 me-5">
                  <div class="row d-flex justify-content-center align-items-center">
                    <div class="col-12 d-flex justify-content-center">
                      <Link to="/DashBoard02"><h4 class="mt-4" style={{ color: "#0560A4" }}>
                        General Account Settings
                      </h4></Link>
                    </div>
                    <Link to="/DashBoard04"><div class="col-12 mt-4 ms-4">
                      <h4 class="mt-3 ms-3">Subscription</h4>
                    </div></Link>
                    <Link to="/DashBoard06"><div class="col-12 mt-3 ms-4">
                      <h4 class="mt-3 ms-3">Communication Preferences</h4>
                    </div></Link>
                    <Link to="/DashBoard07"><div class="col-12 mt-3 ms-4">
                      <h4 class="mt-3 ms-3">Privacy Settings</h4>
                    </div></Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-7 col-12">
              <div class="row mt-5 ms-2">
                <h4 style={{ color: "#50E78C" }}>General Account Settings</h4>
              </div>
              <div class="row mt-5 ms-2">
                <div class="col-3">
                  <h4 class="tx_white">Account ID:</h4>
                </div>
                <div class="col-6">
                  <h4 class="tx_white">{detaile.aId}</h4>
                </div>
                <hr class="mt-3 borderhe" />
              </div>
              <div class="row mt-3 ms-2">
                <div class="col-3">
                  <h4 class="tx_white">Email ID:</h4>
                </div>
                <div class="col-5">
                  <h4 class="tx_white">{detaile.email}</h4>
                </div>
                <div class="col-2">
                  <img
                    onClick={edit}
                    class="edit_icon"
                    src="./images/edit.png"
                    alt=""
                  />
                </div>
                <hr class="mt-3 borderhe" />
              </div>
              <div class="row mt-3 ms-2">
                <div class="col-3">
                  <h4 class="tx_white">Password:</h4>
                </div>
                <div class="col-5">
                  <h4 class="tx_white">{detaile.password}</h4>
                </div>
                <div class="col-2">
                  <img
                    onClick={edit}
                    class="edit_icon"
                    src="./images/edit.png"
                    alt=""
                  />
                </div>
                <hr class="mt-3 borderhe" />
              </div>
              <div class="row mt-3 ms-2">
                <div class="col-3">
                  <h4 class="tx_white">Contact Info:</h4>
                </div>
                <div class="col-5">
                  <h4 class="tx_white">{detaile.contact}</h4>
                </div>
                <div class="col-2">
                  <img
                    onClick={edit}
                    class="edit_icon"
                    src="./images/edit.png"
                    alt=""
                  />
                </div>
                <hr class="mt-3 borderhe" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
