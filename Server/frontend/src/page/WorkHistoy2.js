import Footer3 from "../components/Footer3";
import Heder_nav4 from "../components/Heder_nav4";
import "./WorkHistoy2.css";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Pdfview from "./Pdfview";



export default function WorkHistoy2() {

    const location = useLocation();
    const navigate = useNavigate();
    

    const displaypdf = () => {
        alert(sessionStorage.getItem("pdflink"));
        navigate("/Pdfview");
    }

    const nexpage = () =>{
        const resumeData = location?.state?.data??{};
        console.log("resumeDetails::: ",resumeData)

        navigate("/WorkHistoy3", {
            state: {
                data: resumeData
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
                                            <h3 className='tx_white'>Now, let's fill out your Experience</h3>
                                        </div>
                                        <div className='mt-3 row'>
                                            <h6 className='tx_white'>Here’s what you need to know:</h6>
                                        </div>
                                        <div className='mt-1 row'>
                                            <h6 className='tx_white'>• You can include any work experience, internships, scholarships</h6>
                                        </div>
                                        <div className='row'>
                                            <h6 className='tx_white'>• relevant coursework and academic achievements</h6>
                                        </div>
                                    </div>
                                    <div onClick={displaypdf} className='justify-end align-bottom col-12 col-md-6 d-flex'>
                                        <img src="./images/sample.png" alt="" />
                                        <img className='perevev' src="./images/preview.png" alt="" />
                                    </div>
                                </div>


                                <div className='mt-5 mb-5 row ms-5 me-5'>
                                    <div className='justify-start col-6 d-flex'>
                                        <Link to="/WorkHistoy"><div className='backbtn'>
                                            <h4 className='mt-2'>BACK</h4>
                                        </div></Link>
                                    </div>
                                    <div className='justify-end col-6 d-flex'>
                                        <Link to="/WorkHistoy3"><div className='align-middle d-flex wi'>
                                            <h6 className='mt-2 ms-3 me-3 tx54'>SKIP FOR NOW</h6>
                                        </div></Link>
                                        <div className='nextbtn2' onClick={nexpage}>
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
                                         <div onClick={displaypdf} className='row'>

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
