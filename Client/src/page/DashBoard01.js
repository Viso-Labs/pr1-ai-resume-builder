import React from "react";
import "./DashBoard01.css";
import Footer from "../components/Footer";
import Heder_nav from "../components/Heder_nav";

export default function DashBoard01() {
  return (
    <div>
      <Heder_nav />

      <div class="row box_grenn_heght d-flex align-items-end">
        <div>
          <div class="box_mg row">
            <div class="col-12 d-flex justify-content-end align-items-center">
              <img class="close_icon" src="./images/close.webp" alt="" />
            </div>
            <div class="col-12 d-flex justify-content-center align-items-center">
              <h3 class="tex_green">Hello, User !</h3>
            </div>
          </div>
        </div>
      </div>

      <div class="row bg_centerBox">
        <div class="col-12 d-flex justify-content-center mt-5">
          <h4 class="tx_white">Welcome to your dashboard!</h4>
        </div>
        <div class="col-12 d-flex justify-content-center">
          <h5 class="tx_white">From here, you can:</h5>
        </div>
        <div class="col-10 offset-1">
          <hr class="borderWhite" />
        </div>
        <div class="col-12">
          <div class="row d-flex justify-content-center">
            <div class="col-6">
              <div class="row ms-5 mt-5">
                <div class="col-1">
                  <img
                    src="./images/Writing.png"
                    alt=""
                    style={{ width: "100%" }}
                  />
                </div>
                <div class="col-10">
                  <h5 class="tx_white">Fix errors on your resume</h5>
                </div>
              </div>
              <div class="row ms-5 mt-5">
                <div class="col-1">
                  <img
                    src="./images/Puzzle.png"
                    alt=""
                    style={{ width: "100%" }}
                  />
                </div>
                <div class="col-10">
                  <h5 class="tx_white">
                    See recommended jobs that are the best match for you
                  </h5>
                </div>
              </div>
              <div class="row ms-5 mt-5">
                <div class="col-1">
                  <img
                    src="./images/Bandwidth.png"
                    alt=""
                    style={{ width: "100%" }}
                  />
                </div>
                <div class="col-10">
                  <h5 class="tx_white">
                    Copy Apply faster and smarter on the top job boards
                  </h5>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="row ms-5 mt-5">
                <div class="col-1">
                  <img
                    src="./images/Writing_1.png"
                    alt=""
                    style={{ width: "100%" }}
                  />
                </div>
                <div class="col-10">
                  <h5 class="tx_white">Tailor your resume for any job</h5>
                </div>
              </div>
              <div class="row ms-5 mt-5">
                <div class="col-1">
                  <img
                    src="./images/Writing_2.png"
                    alt=""
                    style={{ width: "100%" }}
                  />
                </div>
                <div class="col-10">
                  <h5 class="tx_white">
                    Create a custom cover letter in minutes
                  </h5>
                </div>
              </div>
              <div class="row ms-5 mt-5">
                <div class="col-1">
                  <img
                    src="./images/Push_notification.png"
                    alt=""
                    style={{ width: "100%" }}
                  />
                </div>
                <div class="col-10">
                  <h5 class="tx_white">Get jobs sent right to your email</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 d-flex justify-content-center mt-5 mb-5">
          <img class="mt-5 mb-5" src="./images/arrowlR.png" alt="" />
        </div>
      </div>

      <Footer />
    </div>
  );
}
