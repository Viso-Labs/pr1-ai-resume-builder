import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Footer3 from "../components/Footer3";
import Heder_nav7 from "../components/Heder_nav7";
import Dropdown from 'react-bootstrap/Dropdown';
import "./Finnishsec3.css";

export default function Finnishsec3() {
  return (
    <div>
      <div className="bodyfc1">
        <Heder_nav7 />

        <div class="v530_3681">

          <div class="name"></div>
          <div class="name"></div>
          <div class="name"></div>
          <div class="name"></div>
          <div class="v530_3688"></div>
          <div class="name"></div>
          <div class="name"></div>
          <div class="name"></div>
          <div class="name"></div>

          <div className="mt-5 ms-5 row">
            <div className="justify-center col-12 d-flex">
              <img className="pencile" src="./images/pencile.png" alt="" />
              <div className='row ms-2 me-2'>
                <InputGroup className="mt-4 mb-4">
                  <Form.Control
                    className='bg_input_list inlist borderhidein'
                    placeholder="[ Haastrup Adewale ]"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Text className='bg_input_list_mini borderhidein' id="basic-addon2">
                    {/* <img id ="newid" style={{display:"none"}} src="./images/hari.png" alt="" /> */}
                  </InputGroup.Text>
                </InputGroup>
              </div>
            </div>
          </div>
          
          <div className="row potidrop">
            <div className="col-12">
              <Dropdown>
                <Dropdown.Toggle className="tx_bold" variant="" id="dropdown-basic">
                More option
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Delete</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Duplicate</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>

          <div class="v530_3889">
            <span class="v530_3890 ms-4 mt-3">Download</span>
            <span class="v530_3891 ms-4 mt-3">PDF,JPG,PNG</span>
            <div class="v530_3892 ms-4 mt-3"></div>
          </div>
        </div>

        <div className="'row potiback">
          <div className="col-12">
            <img src="./images/BACK.png" alt="" />
          </div>
        </div>

        <div className="'row potinext">
          <div className="col-12">
            <img src="./images/NEXT.png" alt="" />
          </div>
        </div>

        <Footer3 />
      </div>
    </div>
  );
}
