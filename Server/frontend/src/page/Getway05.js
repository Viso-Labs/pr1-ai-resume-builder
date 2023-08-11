import {React,useState }from "react";
import "./Getway05.css";
import Footer from "../components/Footer";
import Heder_nav2 from "../components/Heder_nav2";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link, useNavigate, useLocation } from "react-router-dom";
import config from "../env.json";

export default function Getway05() {
  const navigate = useNavigate();
  const [packageDetails, setPackageDetails] = useState({packageName:config.PACKAGE_1_NAME, packageValue:config.PACKAGE_1_PRICE})
  const [isChecked1, setIsChecked1] = useState(true);
  const [isChecked2, setIsChecked2] = useState(false);

  const handleCheckboxChange = (checkboxNumber) => {
    if (checkboxNumber === 1) {
      setPackageDetails({packageName:config.PACKAGE_1_NAME, packageValue:config.PACKAGE_1_PRICE})
      setIsChecked1(true);
      setIsChecked2(false);
    } else if (checkboxNumber === 2) {
      setPackageDetails({packageName:config.PACKAGE_2_NAME, packageValue:config.PACKAGE_2_PRICE})
      setIsChecked1(false);
      setIsChecked2(true);
    }
  };

  return (
    <div>

      <Heder_nav2 />



      <div className='row bg_blue'>
        <div className='justify-center mt-5 col-12 d-flex'>
          <div className='justify-center row d-flex'>
            <h4 className='color_white'>Upgrade for Instant Access to All Features</h4>
          </div>
        </div>
        <div className='mt-5 col-12'>
          <div className='row ms-4 me-4'>
            <div className='mt-5 col-md-4 col-12'>
              <div className='mt-3 mb-3 ms-1 me-1 row bg_white div_pay_box'>
                <div className='col-12'>
                  <div className='mt-4 row'>
                    <div className='justify-center col-3 d-flex'>
                    <Form.Check
                      className='with_set'
                      type="checkbox"
                      id={`default-checkbox1`}
                      checked={isChecked1}
                      onChange={() => handleCheckboxChange(1)}
                    />
                    </div>
                    <div className='col-9'>
                      <h2 className='tx_bold'>14-Day Full Access</h2>
                    </div>
                  </div>
                  <div className='mt-2 row'>
                    <div className='justify-center col-12 d-flex'>
                      <h1 className='tx_bold fond_zix'>$ 15</h1>
                    </div>
                  </div>
                  <div className='row ms-4 me-4'>
                    <hr />
                  </div>
                  <div className='row ms-4 me-4'>
                    <div className='col-12'>
                      <div className='mt-2 row'>
                        <div className='col-1'>
                          <h5>•</h5>
                        </div>
                        <div className='col-11'>
                          <h5>Unlimited printing and downloading for 14 days</h5>
                        </div>
                      </div>
                      <div className='mt-2 row'>
                        <div className='col-1'>
                          <h5>•</h5>
                        </div>
                        <div className='col-11'>
                          <h5>Create unlimited additional resume and letter variations</h5>
                        </div>
                      </div>
                      <div className='mt-2 row'>
                        <div className='col-1'>
                          <h5>•</h5>
                        </div>
                        <div className='col-11'>
                          <h5>After 14 days, auto-renews at $23.70 billed every 4 weeks</h5>
                        </div>
                      </div>
                      <div className='mt-2 row'>
                        <div className='col-1'>
                          <h5>•</h5>
                        </div>
                        <div className='col-11'>
                          <h5>Cancel anytime</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-12'>
              <div className='mt-3 mb-3 row ms-1 me-1 bg_white div_pay_box2'>
                <div className='col-12'>
                  <div className='mt-4 row'>
                    <div className='justify-center col-12 d-flex'>
                      <h2 className='tx_bold'>All Subscription Features</h2>
                    </div>
                  </div>

                  <div className='mt-5 ms-3 me-3 row'>
                    <div className='col-12'>
                      <h5>Download and save in multiple formats(Word, PDF, TXT)</h5>
                    </div>
                  </div>
                  <div className='mt-4 ms-3 me-3 row'>
                    <div className='col-12'>
                      <h5><span className='tx_bold'>Cover Letter Builder</span> Create a cover letter in minute</h5>
                    </div>
                  </div>
                  <div className='mt-4 ms-3 me-3 row'>
                    <div className='col-12'>
                      <h5>If you are unhappy for any reason during the first 14 days, just let us know <span className='tx_bold'>– we’ll refund your money.</span></h5>
                    </div>
                  </div>

                  <div className='justify-center mt-5 ms-3 me-3 row d-flex'>
                    <div className='mb-4 continue_btn'>
                <button onClick={()=>{navigate(`/Getway01`,{state:{packageDetails:packageDetails}})}}><h4 className='mt-1 color_white'>CONTINUE</h4></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-5 col-md-4 col-12'>
              <div className='mt-3 mb-3 row ms-1 me-1 bg_white div_pay_box'>
                <div className='col-12'>
                  <div className='mt-4 row'>
                    <div className='justify-center col-9 d-flex'>
                      <h2 className='tx_bold ms-5'>Monthly Access</h2>
                    </div>
                    <div className='justify-center col-3 d-flex'>
                    <Form.Check
                      className='with_set'
                      type="checkbox"
                      id={`default-checkbox2`}
                      checked={isChecked2}
                      onChange={() => handleCheckboxChange(2)}
                    />
                    </div>
                  </div>
                  <div className='mt-2 row'>
                    <div className='justify-center col-12 d-flex'>
                      <h1 className='tx_bold fond_zix'>$ 30</h1>
                    </div>
                  </div>
                  <div className='row ms-4 me-4'>
                    <hr />
                  </div>
                  <div className='row ms-4 me-4'>
                    <div className='col-12'>
                      <div className='mt-2 row'>
                        <div className='col-1'>
                          <h5>•</h5>
                        </div>
                        <div className='col-11'>
                          <h5>Pay $71.40 upfront and save 77%</h5>
                        </div>
                      </div>
                      <div className='mt-2 row'>
                        <div className='col-1'>
                          <h5>•</h5>
                        </div>
                        <div className='col-11'>
                          <h5>Full access to all features including cover letters</h5>
                        </div>
                      </div>
                      <div className='mt-2 row'>
                        <div className='col-1'>
                          <h5>•</h5>
                        </div>
                        <div className='col-11'>
                          <h5>Automatically renews each year, cancel anytime</h5>
                        </div>
                      </div>
                      <div className='mt-2 row'>
                        <div className='col-1'>
                          <h5>•</h5>
                        </div>
                        <div className='col-11'>
                          <h5>Pay once, use all year long</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='justify-center mt-5 col-12 d-flex'>
          <div className='justify-center row d-flex'>
            <h4 className='color_white'>You may cancel by email or by calling us</h4>
          </div>
        </div>
      </div>


      <Footer />

    </div>
  )
}
