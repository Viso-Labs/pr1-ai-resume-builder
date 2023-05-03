import React from 'react'
import "./Getway02.css";
import Footer from "../components/Footer";
import Heder_nav2 from "../components/Heder_nav2";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from "react-router-dom";

export default function Getway02() {
  return (
    <div>

      <Heder_nav2 />



      <div className='row bg_blue'>
        <div className='mt-2 col-12 bg_white'>
          <div className='mt-4 row'>
            <h5 className='ms-5'>Haastrup</h5>
          </div>
          <div className='mt-1 mb-3 ms-5 me-5 row box_fream'>
            <div className='col-12'>
              <div className='row'>
                <div className='col-6'>
                  <img className='logo_paypal' src="./images/paypal2.png" alt="" />
                </div>
                <div className='col-6'>
                  <div className='mt-5 row'>
                    <div className='col-7'></div>
                    <div className='col-1'>
                      <img className='cart_png' src="./images/cart.png" alt="" />
                    </div>
                    <div className='col-4'>
                      <h4> $ 30.00</h4>
                    </div>
                  </div>
                </div>
              </div>
              <hr className='mt-5' />

              <div className='mt-5 row ms-2 me-2'>
                <div className='col-6 '>
                  <h5>Pay with paypal</h5>
                </div>
                <div className='justify-end col-6 d-flex'>
                  <img className='cart_wallet_png' src="./images/Card_Wallet.png" alt="" />
                </div>
              </div>

              <div className='mt-4 row ms-2 me-2'>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Email: haastrup***@*****.com"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </div>
              <div className='mt-2 row ms-2 me-2'>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Password: *******"
                    aria-label="Password"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </div>

              <div className='mt-2 row ms-2 me-2'>
                <div className='btn_login'>
                <Link to="/Getway03"><h3 className='color_white'>Log In</h3></Link>
                </div>
              </div>
              <div className='justify-center mt-3 row ms-2 me-2 d-flex'>
                <div className='justify-center col-12 d-flex '>
                <h6 className=''>Having trouble to logging in?</h6>
                </div>
              </div>
            </div>
          </div>

          <div className='mt-5 mb-5 row'>
            <h5 className='ms-5 color_blue'>Cancel and return to My IT</h5>
          </div>
        </div>

      </div>


      <Footer />

    </div>
  )
}
