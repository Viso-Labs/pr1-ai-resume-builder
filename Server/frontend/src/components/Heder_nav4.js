import "./Heder_nav2.css";
import { React, useEffect } from 'react'
import { Link } from "react-router-dom";



export default function Heder_nav2() {

    useEffect(() => {
        var head1 = sessionStorage.getItem("head1");
        var head2 = sessionStorage.getItem("head2");
        var head3 = sessionStorage.getItem("head3");
        var head4 = sessionStorage.getItem("head4");
        var head5 = sessionStorage.getItem("head5");
        var head6 = sessionStorage.getItem("head6");

        if (head1 === "true") {
            const navround = document.getElementsByClassName("newnav1");
            navround[0].style.background = "#3CDE43";
        }
        if (head2 === "true") {
            const navround = document.getElementsByClassName("newnav2");
            navround[0].style.background = "#3CDE43";

        }
        if (head3 === "true") {
            const navround = document.getElementsByClassName("newnav3");
            navround[0].style.background = "#3CDE43";

        }
        if (head4 === "true") {
            const navround = document.getElementsByClassName("newnav4");
            navround[0].style.background = "#3CDE43";

        }
        if (head5 === "true") {
            const navround = document.getElementsByClassName("newnav5");
            navround[0].style.background = "#3CDE43";

        }
        if (head6 === "true") {
            const navround = document.getElementsByClassName("newnav6");
            navround[0].style.background = "#3CDE43";

        }

    }, []);

    return (
        <div class="row">
            <div>
                <div class="row">

                    <nav class="navbar navbar-expand-lg">
                        <div class="container-fluid">
                            <a class="navbar-brand ms-4" href="#">
                                <Link to="/"><img class="logo" src="./images/logo2.png" alt="" /></Link>
                            </a>

                            <div>
                                <ul class="navbar-nav2 me-2">
                                    <li class="nav-item dropdown me-3 mt-3">
                                        <div className="row">
                                            <div className="nav_png newnav1 col-3">
                                                <img src="./images/yes.png" alt="" />
                                            </div>
                                            <div className="mt-1 all_center col-8">
                                                <h6 className="color_dark">HEADING</h6>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown me-3 mt-3">
                                        <div className="row">
                                            <div className="nav_png newnav2 col-3">
                                                <h4 className="mt-1 color_white">2</h4>
                                            </div>
                                            <div className="mt-1 all_center col-9">
                                                <h6 className="color_dark">WORK_HISTORY</h6>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown me-3 mt-3">
                                        <div className="row">
                                            <div className="nav_png newnav3 col-3">
                                                <h4 className="mt-1 color_white">3</h4>
                                            </div>
                                            <div className="mt-1 all_center col-8">
                                                <h6 className="color_dark">EDUCATION</h6>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown me-3 mt-3">
                                        <div className="row">
                                            <div className="nav_png newnav4 col-3">
                                                <h4 className="mt-1 color_white">4</h4>
                                            </div>
                                            <div className="mt-1 all_center col-7">
                                                <h6 className="color_dark">SKILLS</h6>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown me-3 mt-3">
                                        <div className="row">
                                            <div className="nav_png newnav5 col-3">
                                                <h4 className="mt-1 color_white">5</h4>
                                            </div>
                                            <div className="mt-1 all_center col-7">
                                                <h6 className="color_dark">SUMMARY</h6>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown me-3 mt-3">
                                        <div className="row">
                                            <div className="nav_png  newnav6 col-3">
                                                <h4 className="mt-1 color_white">6</h4>
                                            </div>
                                            <div className="mt-1 all_center col-7">
                                                <h6 className="color_dark">FINISHED!</h6>
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
