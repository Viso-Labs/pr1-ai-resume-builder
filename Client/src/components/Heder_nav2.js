import "./Heder_nav2.css";
import React from 'react'



export default function Heder_nav2() {
    return (
        <div class="row">
            <div>
                <div class="row">

                    <nav class="navbar navbar-expand-lg">
                        <div class="container-fluid">
                        <a class="navbar-brand ms-4" href="#">
                           <img class="logo" src="./images/logo2.png" alt="" />
                            </a>

                            <div>
                                <ul class="navbar-nav2 me-2">
                                    <li class="nav-item dropdown me-3 mt-3">
                                        <div className="row">
                                            <div className="nav_png col-3">
                                                <img src="./images/yes.png" alt="" />
                                            </div>
                                            <div className="mt-1 all_center col-9">
                                                <h6 className="color_dark">BUILD_RESUME</h6>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown me-3 mt-3">
                                        <div className="row">
                                            <div className="nav_png col-3">
                                                <h4 className="mt-1 color_white">2</h4>
                                            </div>
                                            <div className="mt-1 all_center col-9">
                                                <h6 className="color_dark">CHOOSE_ACCESS</h6>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown me-3 mt-3">
                                        <div className="row">
                                            <div className="nav_png col-3">
                                            <h4 className="mt-1 color_white">3</h4>
                                            </div>
                                            <div className="mt-1 all_center col-9">
                                                <h6 className="color_dark">PAYMENT_DETAILS</h6>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown me-3 mt-3">
                                        <div className="row">
                                            <div className="nav_png col-3">
                                            <h4 className="mt-1 color_white">4</h4>
                                            </div>
                                            <div className="mt-1 all_center col-9">
                                                <h6 className="color_dark">All_FINISHED!</h6>
                                            </div>
                                        </div>
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
