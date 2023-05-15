import React from "react";
import Footer2 from "../components/Footer2";
import Heder_nav3 from "../components/Heder_nav3";
import Form from 'react-bootstrap/Form';
import "./SelectCoun.css";
import { Link } from "react-router-dom";


export default function SelectCoun() {


  const country = [
    {
      name: "Sri Lanka",
    },
    {
      name: "United States",
    },
    {
      name: "India",
    },
    {
      name: "Japan",
    },
    {
      name: "Australia",
    },
    {
      name: "United Kingdom",
    },
    {
      name: "Canada",
    },
    {
      name: "Armenia",
    },
    {
      name: "Denmark",
    },
    {
      name: "Qatar",
    },
  ];



  return (
    <div>
      <Heder_nav3 />

      <div className="row">
        <div className="justify-center col-12 d-flex">
          <div className="row">
            <div className="col-12 ">
              <div className="mt-3 row">
                <div className="justify-center col-12 d-flex">
                  <h3 className="cho_tx">Where are you focusing your job search?</h3>
                </div>
                <div className="justify-center col-12 d-flex">
                  <h4 className="">We'll recommend the right templates for your target country.</h4>
                </div>
              </div>
              <div className="mt-5 row marbottnm4">
                <div className="justify-center col-12 d-flex">
                  <div className="row">
                    <label className="mb-2 me-5 mar_leftS" htmlFor="">Select a Country</label>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      {country.map((country) => (
                        <option value={country.name}>{country.name}</option>
                      ))}
                    </Form.Select>
                  </div>
                </div>
                <div className="justify-center col-12 d-flex">
                  <div className="mt-5 row">
                    <div className="col-12">
                      <div className="BtnSeeTemp">
                        <Link to="/ChooseTemplate"><h5>SEE TEMPLATES</h5></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row poti_setSIgn">
            <div className="justify-center col-12 d-flex ">
              <h2 className="mt-2 mb-2 tx_foSign ms-2 me-2">TERMS AND CONDITIONS </h2>
              <h2 className="mt-2 mb-2 tx_foSign ms-2 me-2"> | PRIVACY POLICY </h2>
              <h2 className="mt-2 mb-2 tx_foSign ms-2 me-2">| ACCESSIBILITY</h2>
              <h2 className="mt-2 mb-2 tx_foSign ms-2 me-2">| CONTACT US</h2>
            </div>
          </div>
        </div>
      </div>

      <Footer2 />
    </div>
  );
}
