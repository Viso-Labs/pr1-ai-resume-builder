import React from "react";
import "./DashBoard05.css";
import Footer from "../components/Footer";
import Heder_nav from "../components/Heder_nav";
import { Link } from "react-router-dom";

export default function DashBoard05() {
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
                                        <Link to="/DashBoard04"><div class="col-12 mt-4 ms-4" style={{ color: "#0560A4" }}>
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
                                <div class="col-12 bg_darck_blue">
                                    <div className="row">
                                        <div className="align-middle col-6 d-flex">
                                            <h5 className="mt-5 color_white me-3 ms-3">Need help or want to change your subscription?</h5>
                                        </div>
                                        <div className="align-middle col-6 d-flex">
                                            <div className="mt-3 mb-3 vl"></div>
                                            <h5 className="mt-5 color_white me-3 ms-3">Contact us 7 days a week Monday-Friday: 8am to 8pm (Central), Saturday: 8am to 5pm (Central), Sunday: 10am to 6pm (Central)</h5>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="row mt-5 ms-2">
                                <h4 style={{ color: "#50E78C" }}>Subscription</h4>
                            </div>
                            <div class="row mt-5 ms-2">
                                <div class="col-3">
                                    <h4 class="tx_white">Account ID:</h4>
                                </div>
                                <div class="col-6">
                                    <h4 class="tx_white">407567606</h4>
                                </div>
                                <hr class="mt-3 borderhe" />
                            </div>
                            <div class="row mt-3 ms-2">
                                <div class="col-3">
                                    <h4 class="tx_white">Subscription Status:Basic:</h4>
                                </div>
                                <div class="col-5">
                                    <h4 class="color_green">PRO</h4>
                                </div>
                                <div class="col-2">
                                </div>
                                <hr class="mt-3 borderhe" />
                            </div>
                            <div class="row mt-3 ms-2">
                                <div class="col-3">
                                    <h4 class="tx_white">Registration Date:</h4>
                                </div>
                                <div class="col-5">
                                    <h4 class="tx_white">March 16, 2023</h4>
                                </div>
                                <div class="col-2">
                                </div>
                                <hr class="mt-3 borderhe" />
                            </div>
                            <div class="row mt-3 ms-2">
                                <div class="col-12">
                                    <h4 class="tx_white">
                                        For more information or changes to your subscription, email
                                        us at <p className="color_green">cs@MyITUniversity.com</p>
                                    </h4>
                                </div>
                            </div>
                            <div class="row mt-5 ms-2">
                                <div class="col-10 mt-5">
                                    <div className="mt-5 btn_upgrade ms-5 me-5">
                                        <h1 className="color_white">UPGRADE TO FULL ACCESS</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
