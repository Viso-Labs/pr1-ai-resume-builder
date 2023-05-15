import "./Heder_nav6.css";
import React from "react";

export default function Heder_nav6() {
  return (
    <div class="row">
      <div>
        <div class="row">
          <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid">
              <a class="navbar-brand ms-4" href="#">
                <img class="logo" src="./images/logo2.png" alt="" />
              </a>

              <div class="navbar-collapse" id="navbarNavDropdown">
                
              </div>

              <div>
                <ul class="navbar-nav2 me-2">
                  <li class="nav-item dropdown me-2">
                    <a class="ms-2" href="#">
                      <img src="./images/sout.png" alt="" />
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
