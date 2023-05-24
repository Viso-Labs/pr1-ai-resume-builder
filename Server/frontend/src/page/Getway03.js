import React from 'react'
import "./Getway03.css";
import Footer from "../components/Footer";
import Heder_nav2 from "../components/Heder_nav2";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Getway03() {
  return (
    <div>

      <Heder_nav2 />



      <div className='row bg_blue'>
        <div className='mt-2 col-12 bg_white'>
          <div className='mt-4 row'>
            <div className='col-6'>
            <h5 className='ms-5'>Transaction receipt</h5>
            </div>
            <div className='justify-end col-6 d-flex'>
          <h6 className='color_blue me-5'>PROCEED</h6>
            </div>
          </div>

          <div className='mt-4 ms-5 me-5 row'>
            <div className='col-1'></div>
            <div className='col-1'>
             <h5>Name: </h5>
            </div>
            <div className='col-10'>
             <h5>Haastrup</h5>
            </div>
          </div>
          
          <div className='mt-3 ms-5 me-5 row'>
            <div className='col-1'></div>
            <div className='col-1'>
             <h5>Email: </h5>
            </div>
            <div className='col-10'>
             <h5>haastrup***@*****.com</h5>
            </div>

            <hr className='mt-3 mb-3'/>
          </div>
          
          <div className='mt-3 ms-5 me-5 row'>
            <div className='col-1'></div>
            <div className='col-2'>
             <h5 className='tx_bold'>Transaction ID: </h5>
            </div>
            <div className='col-9'>
             <h5>34892213478</h5>
            </div>
          </div>

          <div className='mt-3 ms-5 me-5 row'>
            <div className='col-1'></div>
            <div className='col-10 bg_darck'>
              <div className='mt-2 row'>
                <div className='col-6'>
                  <h5>Description</h5>
                </div>
                <div className='justify-end col-6 d-flex'>
                  <h5>Amount</h5>
                </div>
              </div>
            </div>
            <div className='col-1'></div>
          </div>

          <div className='mt-3 ms-5 me-5 row'>
            <div className='col-1'></div>
            <div className='col-1'>
             <h5 className='tx_bold'>Resume: </h5>
            </div>
            <div className='justify-end col-9 d-flex'>
             <h5>$ 30.00</h5>
            </div>
            <div className='col-1'></div>
            
            <div className='col-1'></div>
            <div className='col-1'>
             <h5 className='tx_bold'>Qty: </h5>
            </div>
            <div className='justify-end col-9 d-flex'>
             <h5>1</h5>
            </div>
            <div className='col-1'></div>
            
            <hr className='mt-3 mb-3'/>
            
            <div className='col-1'></div>
            <div className='col-1'></div>
            <div className='justify-end col-7 d-flex'></div>
            <div className='col-1'>
            <h5 className='justify-end tx_bold d-flex'>Subtotal: </h5>
            </div>
            <div className='justify-end col-1 d-flex'>
            <h6>$ 30.00</h6>
            </div>
            <div className='col-1'></div>
            
            <hr className='mt-3 mb-3'/>

            <div className='col-10'></div>
            <div className='justify-end col-1 d-flex'>
            <h5 className='tx_bold'>$ 30.00</h5>
            </div>
            <div className='col-1'></div>
          </div>


          <div className='mt-4 ms-5 me-5 row'>
            <div className='justify-center col-12 d-flex'>
            <p>This transaction has been proceed by paypal and will appear on your statement as paypal My IT Resume</p>
            </div>
          </div>

          <div className='mt-4 mb-5 row ms-2'>
            <div className='col-3'> 
            <hr className='border_blue'/>
            <h2 className='ms-5 tx_blod'>THANK YOU</h2>
            </div>
            <div className='col-9'>
            </div>
          </div>
        </div>

      </div>


      <Footer />

    </div>
  )
}
