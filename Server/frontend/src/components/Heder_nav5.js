import { Link } from "react-router-dom";
import "./Heder_nav5.css";
import React from "react";

export default function Heder_nav5() {
  return (
    <div class="row">
      <div>
        <div class="row">
          <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid">
              <a class="navbar-brand ms-4" href="#">
                <Link to="/"><img class="logo" src="./images/logo2.png" alt="" /></Link> 
              </a>

              <div class="navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                  <li class="nav-item dropdown ">
                    <a
                      class="nav-link dropdown-toggle tx_bold"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                     Tools
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          <div class="row">
                            <div class="col-4">
                              <img
                                class="dropimg"
                                src="./images/setting.png"
                                alt=""
                              />
                            </div>
                            <div class="col-8">
                              <h5 class="texmat">Settings</h5>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <div class="row">
                            <div class="col-4">
                              <img
                                class="dropimg"
                                src="./images/study.png"
                                alt=""
                              />
                            </div>
                            <div class="col-8">
                              <h5 class="texmat">Support</h5>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <div class="row">
                            <div class="col-4">
                              <img
                                class="dropimg"
                                src="./images/contac.png"
                                alt=""
                              />
                            </div>
                            <div class="col-8">
                            <Link to="/ContactUS"> <Link to="/ContactUS"><h5 class="texmat">Contact Us</h5></Link> </Link><Link to="/ContactUS"><h5 class="texmat">Contact Us</h5></Link> 
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <div class="row">
                            <div class="col-4">
                              <img
                                class="dropimg"
                                src="./images/signout.png"
                                alt=""
                              />
                            </div>
                            <div class="col-8">
                              <h5 class="texmat">Sign Out</h5>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="nav-item dropdown ms-2">
                    <a
                      class="nav-link dropdown-toggle tx_bold"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Resume
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          <div class="row">
                            <div class="col-4">
                              <img
                                class="dropimg"
                                src="./images/setting.png"
                                alt=""
                              />
                            </div>
                            <div class="col-8">
                              <h5 class="texmat">Settings</h5>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <div class="row">
                            <div class="col-4">
                              <img
                                class="dropimg"
                                src="./images/study.png"
                                alt=""
                              />
                            </div>
                            <div class="col-8">
                              <h5 class="texmat">Support</h5>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <div class="row">
                            <div class="col-4">
                              <img
                                class="dropimg"
                                src="./images/contac.png"
                                alt=""
                              />
                            </div>
                            <div class="col-8">
                            <Link to="/ContactUS"> <Link to="/ContactUS"><h5 class="texmat">Contact Us</h5></Link> </Link>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <div class="row">
                            <div class="col-4">
                              <img
                                class="dropimg"
                                src="./images/signout.png"
                                alt=""
                              />
                            </div>
                            <div class="col-8">
                              <h5 class="texmat">Sign Out</h5>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="nav-item dropdown ms-2">
                    <a
                      class="nav-link dropdown-toggle tx_bold"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      CV
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          <div class="row">
                            <div class="col-4">
                              <img
                                class="dropimg"
                                src="./images/setting.png"
                                alt=""
                              />
                            </div>
                            <div class="col-8">
                              <h5 class="texmat">Settings</h5>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <div class="row">
                            <div class="col-4">
                              <img
                                class="dropimg"
                                src="./images/study.png"
                                alt=""
                              />
                            </div>
                            <div class="col-8">
                              <h5 class="texmat">Support</h5>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <div class="row">
                            <div class="col-4">
                              <img
                                class="dropimg"
                                src="./images/contac.png"
                                alt=""
                              />
                            </div>
                            <div class="col-8">
                            <Link to="/ContactUS"> <Link to="/ContactUS"><h5 class="texmat">Contact Us</h5></Link> </Link>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <div class="row">
                            <div class="col-4">
                              <img
                                class="dropimg"
                                src="./images/signout.png"
                                alt=""
                              />
                            </div>
                            <div class="col-8">
                              <h5 class="texmat">Sign Out</h5>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="nav-item dropdown ms-2">
                    <a
                      class="nav-link dropdown-toggle tx_bold"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Cover Letter
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          <div class="row">
                            <div class="col-4">
                              <img
                                class="dropimg"
                                src="./images/setting.png"
                                alt=""
                              />
                            </div>
                            <div class="col-8">
                              <h5 class="texmat">Settings</h5>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <div class="row">
                            <div class="col-4">
                              <img
                                class="dropimg"
                                src="./images/study.png"
                                alt=""
                              />
                            </div>
                            <div class="col-8">
                              <h5 class="texmat">Support</h5>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <div class="row">
                            <div class="col-4">
                              <img
                                class="dropimg"
                                src="./images/contac.png"
                                alt=""
                              />
                            </div>
                            <div class="col-8">
                            <Link to="/ContactUS"> <Link to="/ContactUS"><h5 class="texmat">Contact Us</h5></Link> </Link>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <div class="row">
                            <div class="col-4">
                              <img
                                class="dropimg"
                                src="./images/signout.png"
                                alt=""
                              />
                            </div>
                            <div class="col-8">
                              <h5 class="texmat">Sign Out</h5>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="nav-item dropdown ms-2">
                    <a
                      class="nav-link dropdown-toggle tx_bold"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Career Blog
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          <div class="row">
                            <div class="col-4">
                              <img
                                class="dropimg"
                                src="./images/setting.png"
                                alt=""
                              />
                            </div>
                            <div class="col-8">
                              <h5 class="texmat">Settings</h5>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <div class="row">
                            <div class="col-4">
                              <img
                                class="dropimg"
                                src="./images/study.png"
                                alt=""
                              />
                            </div>
                            <div class="col-8">
                              <h5 class="texmat">Support</h5>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <div class="row">
                            <div class="col-4">
                              <img
                                class="dropimg"
                                src="./images/contac.png"
                                alt=""
                              />
                            </div>
                            <div class="col-8">
                            <Link to="/ContactUS"> <Link to="/ContactUS"><h5 class="texmat">Contact Us</h5></Link> </Link>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <div class="row">
                            <div class="col-4">
                              <img
                                class="dropimg"
                                src="./images/signout.png"
                                alt=""
                              />
                            </div>
                            <div class="col-8">
                              <h5 class="texmat">Sign Out</h5>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="nav-item dropdown ms-2">
                    <a
                      class="nav-link dropdown-toggle tx_bold"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      About
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          <div class="row">
                            <div class="col-4">
                              <img
                                class="dropimg"
                                src="./images/setting.png"
                                alt=""
                              />
                            </div>
                            <div class="col-8">
                              <h5 class="texmat">Settings</h5>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <div class="row">
                            <div class="col-4">
                              <img
                                class="dropimg"
                                src="./images/study.png"
                                alt=""
                              />
                            </div>
                            <div class="col-8">
                              <h5 class="texmat">Support</h5>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <div class="row">
                            <div class="col-4">
                              <img
                                class="dropimg"
                                src="./images/contac.png"
                                alt=""
                              />
                            </div>
                            <div class="col-8">
                            <Link to="/ContactUS"> <Link to="/ContactUS"><h5 class="texmat">Contact Us</h5></Link> </Link>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <div class="row">
                            <div class="col-4">
                              <img
                                class="dropimg"
                                src="./images/signout.png"
                                alt=""
                              />
                            </div>
                            <div class="col-8">
                              <h5 class="texmat">Sign Out</h5>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div>
                <ul class="navbar-nav2 me-2">
                  <li class="nav-item dropdown me-3 "></li>
                  <li class="nav-item dropdown me-3 ">
                    <a class="ms-2" href="#">
                      <Link to="/LogIn"><img src="./images/sin.png" alt="" /></Link>
                    </a>
                  </li>
                  <li class="nav-item dropdown me-2">
                    <a class="ms-2" href="#">
                    <Link to="/SignupAccoyunt"><img src="./images/sout.png" alt="" /></Link>
                    </a>
                  </li>
                  
                </ul>
              </div>

              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
