import React from 'react'
import "./Getway01.css";
import Footer from "../components/Footer";
import Heder_nav2 from "../components/Heder_nav2";

export default function Getway01() {
  return (
    <div>

      <Heder_nav2 />

      <div class="row bg_centerBox2">
        <div class="col-12 d-flex justify-content-center mt-5">
          <h4 class="tx_white">Choose Payment Methods</h4>
        </div>
        <div className='mt-5 col-12'>
          <div className='justify-center row color_darckYellow d-flex'>
            <div className='justify-center mt-5 col-12 d-flex'>
              <div className='justify-center row d-flex'>
                <h4 className='color_white' >Check out with this:</h4>
              </div>
            </div>
            <div className='justify-center col-12 d-flex'>
              <div className='justify-center row d-flex'>
                <img className='paypal_img' src="./images/paypal.png" alt="" />
              </div>
            </div>
            <div className='justify-center col-12 d-flex'>
              <div className='row'>
                <div className='col-4'>
                  <hr class="borderWhite2" />
                </div>
                <div className='justify-center col-4 d-flex'>
                  <h3>or</h3>
                </div>
                <div className='col-4'>
                  <hr class="borderWhite2" />
                </div>
              </div>
            </div>

            <div className='justify-center col-12 d-flex'>
              <div className='justify-center row d-flex'>
                <img className='paypal_img' src="./images/script.png" alt="" />
              </div>
            </div>

            <div className='justify-center mt-5 col-12 d-flex'>
              <div className='justify-center row d-flex'>
                <div className='round_btn'>
                  <img src="./images/Right.png" alt="" />
                </div>
              </div>
            </div>

            <div className='justify-center mt-5 mb-5 col-12 d-flex'>
              <div className='justify-center row d-flex'>
                <div className='col-3'>
                  <img className='lock_png' src="./images/lock.png" alt="" />
                </div>
                <div className='col-9'>
                  <h6 className='color_white'>SECURE_CHECKOUT</h6>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>



      <Footer />

    </div>
  )
}
