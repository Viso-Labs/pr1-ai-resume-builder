import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Footer3 from "../components/Footer3";
import Heder_nav4 from "../components/Heder_nav4";
import "./Finishted.css";
import { Link } from 'react-router-dom';



export default function Finishted() {


    const cut = () => {
        const popbox = document.getElementsByClassName("bg_popboxfinish");
        popbox[0].style.position = "absolute";
        popbox[0].style.visibility = "hidden";
      };


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
                                        <div className='row'>
                                            <h3 className='r1tx'>Do you have anything else to add?</h3>
                                        </div>

                                        <div className='row'>
                                            <div className='col-6'>
                                                <div className='mt-4 row'>
                                                    <h5 className='tcro2'>These sections are optional.</h5>
                                                </div>
                                                <div className='mt-4 row'>
                                                    <div className='justify-start col-12 d-flex'>
                                                        <div>
                                                            <Form.Check
                                                                className='checkbox'
                                                                type="checkbox"
                                                                id="default-checkbox"
                                                                label={<h3 className='labletx'>Accomplishments</h3>}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-2 row'>
                                                    <div className='justify-start col-12 d-flex'>
                                                        <div>
                                                            <Form.Check
                                                                className='checkbox'
                                                                type="checkbox"
                                                                id="default-checkbox"
                                                                label={<h3 className='labletx'>Affiliations</h3>}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-2 row'>
                                                    <div className='justify-start col-12 d-flex'>
                                                        <div>
                                                            <Form.Check
                                                                className='checkbox'
                                                                type="checkbox"
                                                                id="default-checkbox"
                                                                label={<h3 className='labletx'>Additional Information</h3>}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-2 row'>
                                                    <div className='justify-start col-12 d-flex'>
                                                        <div>
                                                            <Form.Check
                                                                className='checkbox'
                                                                type="checkbox"
                                                                id="default-checkbox"
                                                                label={<h3 className='labletx'>Software</h3>}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-2 row'>
                                                    <div className='justify-start col-12 d-flex'>
                                                        <div>
                                                            <Form.Check
                                                                className='checkbox'
                                                                type="checkbox"
                                                                id="default-checkbox"
                                                                label={<h3 className='labletx'>Languages</h3>}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-2 row'>
                                                    <div className='justify-start col-12 d-flex'>
                                                        <div>
                                                            <Form.Check
                                                                className='checkbox'
                                                                type="checkbox"
                                                                id="default-checkbox"
                                                                label={<h3 className='labletx'>Certifications</h3>}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-2 row'>
                                                    <div className='justify-start col-12 d-flex'>
                                                        <div>
                                                            <Form.Check
                                                                className='checkbox'
                                                                type="checkbox"
                                                                id="default-checkbox"
                                                                label={<h3 className='labletx'>Interests</h3>}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-6'>
                                                <div className='mt-5 ms-5 row'>
                                                    <h5 className='tcro2'>Add Your Own</h5>
                                                </div>
                                                <div className='row ms-4'>
                                                    <div className='justify-center col-12 d-flex'>
                                                        <div className='mt-3'>
                                                            <Form.Check
                                                                className='checkbox'
                                                                type="checkbox"
                                                                id="default-checkbox"
                                                                label={<h3 className='labletx'></h3>}
                                                            />
                                                        </div>
                                                        <div>
                                                            <InputGroup className="">
                                                                <Form.Control
                                                                    className='bg_input_list inlist sizesetnew'
                                                                    placeholder="     e.g Hobbies"
                                                                    aria-label="Recipient's username"
                                                                    aria-describedby="basic-addon2"
                                                                />
                                                                <InputGroup.Text className='bg_input_list_mini' id="basic-addon2">
                                                                    {/* <img id ="newid" style={{display:"none"}} src="./images/hari.png" alt="" /> */}
                                                                </InputGroup.Text>
                                                            </InputGroup>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className='justify-end align-bottom col-12 col-md-6 d-flex'>
                                        <img src="./images/finishtwd.png" alt="" />
                                        <img className='perevev2' src="./images/preview.png" alt="" />
                                    </div>
                                </div>


                                <div className='mt-5 mb-5 row ms-5 me-5'>
                                    <div className='justify-start mt-5 col-6 d-flex'>
                                    <Link to="/SMMERYfinish3"><div className='backbtn'>
                                            <h4 className='mt-2'>BACK</h4>
                                        </div></Link>
                                    </div>
                                    <div className='justify-end mt-5 col-6 d-flex'>
                                        <div className='align-middle d-flex wi'>
                                            <h6 className='mt-2 ms-3 me-3 tx54'></h6>
                                        </div>
                                        <Link to="/Finnishsec"><div className='nextbtn2'>
                                            <h4 className='mt-2'>Next</h4>
                                        </div></Link>
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

                    {/* HIDDEN BOX */}
                    <div className='col-12 bg_popboxfinish'>
                        <div className='row borderboto'>
                            <div className='justify-center col-6 d-flex'>
                                <h3 className='mt-3 mb-3 tx_white ms-2 me-2'>Resume Preview</h3>
                                <h3 className='mt-3 mb-3 tx_blue ms-2 me-2'>Change Template</h3>
                            </div>
                            <div className='col-5'></div>

                            <div className='justify-end col-1 d-flex'>
                                <img onClick={cut} className='mt-4 mb-3 me-5' src="./images/cut.png" alt="" />
                            </div>
                        </div>
                        <div className='mt-5 mb-5 row'>
                            <div className='justify-center align-middle col-12 d-flex'>
                                <img src="./images/singlefinset.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>


                <Footer3 />
            </div>
        </div>
    )
}
