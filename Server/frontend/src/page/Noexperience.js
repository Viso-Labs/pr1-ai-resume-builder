import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Footer3 from "../components/Footer3";
import Heder_nav4 from "../components/Heder_nav4";
import "./Noexperience.css";
import { Link, useNavigate, useLocation } from 'react-router-dom';



export default function Noexperience() {

    const location = useLocation();
    const navigate = useNavigate();


    const nextpage = () =>{
        // var data = location.state.data;
        const resumeDetails = location?.state?.data??{};
        console.log("resumeDetails::: ",resumeDetails)

        navigate("/WorkHistoy4", {
            state: {
                data: resumeDetails
            }
        });
    }

    return (
        <div>
            <div>
                <Heder_nav4 />

                <div className='bg_list'>
                    <div className=' col-12'>
                        <div className='row ms-3 me-3'>
                            <div className='mb-5 mb_cla col-12'>
                                

                                <div className='mt-5 row ms-5 me-5'>
                                    <div className='mt-5 col-12 col-md-6'>
                                        <div className='mt-5 row'>
                                            <h3 className='tx_white'>Great, let’s work on your education</h3>
                                        </div>
                                        <div className='mt-3 row'>
                                            <h6 className='tx_white'>Here’s what you need to know:</h6>
                                        </div>
                                        <div className='mt-1 row'>
                                            <h6 className='tx_white px400'>Employers quickly scan the education section</h6>
                                        </div>
                                        <div className='row'>
                                            <h6 className='tx_white px400'>We’ll take care of the formatting so it’s easy to find.</h6>
                                        </div>
                                    </div>
                                    <div className='justify-end align-bottom col-12 col-md-6 d-flex'>
                                        <img src="./images/noex.png" alt="" />
                                        <img className='perevev2' src="./images/preview.png" alt="" />
                                    </div>
                                </div>


                                <div className='mt-5 mb-5 row ms-5 me-5'>
                                    <div className='justify-start col-6 d-flex mt-5'>
                                    <Link to="/WorkHistoy"><div className='backbtn'>
                                            <h4 className='mt-2'>BACK</h4>
                                        </div></Link>
                                    </div>
                                    <div className='justify-end col-6 d-flex mt-5'>
                                        <div className='align-middle d-flex wi'>
                                            <h6 className='mt-2 ms-3 me-3 tx54'></h6>
                                        </div>
                                    <div className='nextbtn2' onClick={nextpage}>
                                      <h4 className='mt-2'>Next</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='justify-center col-12 d-flex hiiden_popBOX'>
                                <div className='mt-5 mb-5 row ms-5 me-5 boxresum'>
                                    <div className='col-12'>
                                        <div className='row upborder'>
                                            <div className='justify-start col-10 d-flex' >
                                                <h3 className='mt-3 ms-2 me-2 tx_white'>Resume Preview</h3>
                                                <h5 className='mt-3 ms-2 me-2 tx_white'>Change Template</h5>
                                            </div>
                                            <div className='justify-end align-middle col-2 d-flex'>
                                                <img className='mt-3 cut me-3' src="./images/cut.png" alt="" />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='justify-center col-12 d-flex'>
                                                <img className='mt-5 mb-5' src="./images/peview.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <Footer3 />
            </div>
        </div>
    )
}
