import React, { useEffect } from "react";
import "./DashBoard01.css";
import Footer from "../components/Footer";
import Heder_nav from "../components/Heder_nav";
import Token from "../services/token/Token";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function DashBoard01() {

  //check user role and navigate to upgrade the service -> '/Getway05'
  const token = Token.getAccessToken();
  const user = Token.getAuth(token);
  const navigate = useNavigate();

  useEffect(() => {
    const currentDate = new Date();
    const initDate = new Date(user.roleInit);  
    const expireDate = new Date(user.roleExpire);  
    if(currentDate>expireDate){
      navigate("/Getway05");
    }
  }, [])
  
  const cut = () => {
    const popbox = document.getElementsByClassName("hiddenpopbox");
    popbox[0].style.position = "absolute";
    popbox[0].style.visibility = "hidden";
  };
  const next = () => {
    alert("next");
  };

  return (
    <div className="">
      <Heder_nav />

      {/* POPBOX */}
      <div class="row box_grenn_heght d-flex align-items-end hiddenpopbox">
        <div>
          <div class="box_mg row">
            <div class="col-12 d-flex justify-content-end align-items-center">
              <img
                onClick={cut}
                class="close_icon"
                src="./images/close.webp"
                alt=""
              />
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
          <img onClick={next} class="mt-5 mb-5" src="./images/arrowlR.png" alt="" />
        </div>
      </div>

      <Footer />
    </div>
  );
}
