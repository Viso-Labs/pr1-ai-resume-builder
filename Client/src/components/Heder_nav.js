import "./Heder_nav.css";
import React from 'react'
import { Link } from "react-router-dom";



export default function Heder_nav() {
  return (
    <div class="row">
    <div>
        <div class="row">

            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid">
                    <Link to="/"><a class="navbar-brand ms-4" href="#">
                  <img class="logo" src="./images/logo2.png" alt=""/>
                    </a></Link>

                    <div class="navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                            <Link to="/"><a class="nav-link tx_bold active" href="#">DASHBOARD</a></Link>
                            </li>
                            <li class="nav-item">
                            <Link to="/DashBoard03"><a class="nav-link tx_bold" href="#">JOBS</a></Link>
                            </li>
                            <li class="nav-item">
                            <Link to="/Getway05"><a class="nav-link tx_bold" href="#">RESUMES</a></Link>
                            </li>
                            <li class="nav-item">
                            <Link to="/Getway05"><a class="nav-link tx_bold" href="#">COVER LETTERS</a></Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <ul class="navbar-nav2 me-2">
                            <li class="nav-item dropdown me-3 "></li>
                            <li class="nav-item dropdown me-3 ">
                                <a class="ms-2" href="#">
                                    <img src="./images/Bell.png" alt=""/>
                                </a>
                            </li>
                            <li class="nav-item dropdown me-2">
                                <a class="ms-2" href="#">
                                    <img src="./images/User.png" alt=""/>
                                </a>
                            </li>
                            <li class="nav-item dropdown me-5 mt-4">
                                <a class="nav-link dropdown-toggle tx_bold" href="#" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    My Account

                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">
                                        <div class="row">
                                            <div class="col-4">
                                                <img class="dropimg" src="./images/setting.png" alt=""/>
                                            </div>
                                            <div class="col-8">
                                            <Link to="/DashBoard02"><h5 class="texmat">Settings</h5></Link>
                                            </div>
                                        </div>
                                    </a></li>
                                    <li><a class="dropdown-item" href="#">
                                        <div class="row">
                                            <div class="col-4">
                                                <img class="dropimg" src="./images/study.png" alt=""/>
                                            </div>
                                            <div class="col-8">
                                                <h5 class="texmat">Support</h5>
                                            </div>
                                        </div>
                                    </a></li>
                                    <li><a class="dropdown-item" href="#">
                                        <div class="row">
                                            <div class="col-4">
                                                <img class="dropimg" src="./images/contac.png" alt=""/>
                                            </div>
                                            <div class="col-8">
                                                <h5 class="texmat">Contact Us</h5>
                                            </div>
                                        </div>
                                    </a></li>
                                    <li><a class="dropdown-item" href="#">
                                        <div class="row">
                                            <div class="col-4">
                                                <img class="dropimg" src="./images/signout.png" alt=""/>
                                            </div>
                                            <div class="col-8">
                                                <h5 class="texmat">Sign Out
                                                </h5>
                                            </div>
                                        </div>
                                    </a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>



                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>

        </div>
    </div>
</div>
  )
}
