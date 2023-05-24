import "./Heder_nav3.css";
import React from 'react'
import { Link } from "react-router-dom";



export default function Heder_nav3() {
    return (
        <div class="row">
            <div>
                <div class="row">

                    <nav class="navbar navbar-expand-lg nav3Border">
                        <div class="container-fluid">
                            <a class="navbar-brand ms-4" href="#">
                                <Link to="/"><img class="logo" src="./images/logo2.png" alt="" /></Link> 
                            </a>


                            <div className="">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="creatBTN2 me-4">
                                            <h6 className="cteatTx ms-2 me-2">CREATE ACCOUNT</h6>
                                        </div>
                                    </div>
                                </div>
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
