import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Footer3 from "../components/Footer3";
import Heder_nav4 from "../components/Heder_nav4";
import "./WorkHistoy3.css";
// import { Link } from 'react-router-dom';



export default function WorkHistoy3() {
    return (
        <div>
            <div>
                <Heder_nav4 />

                <div className='bg_list'>
                    <div className=' col-12'>
                        <div className='row ms-3 me-3'>
                            <div className='col-12'>
                                <div className='mt-3 row ms-4'>
                                    <div className='col-9'>
                                        <h2 className='tx_white'>Tell us about your most recent job</h2>
                                    </div>
                                    <div className='col-3'>
                                        <img className='mt-3' src="./images/previewBTN.png" alt="" />
                                    </div>
                                </div>
                                <div className='mt-1 row ms-5'>
                                    <h6 className='tx_white ms-4'>We’ll start there and work backward.</h6>
                                </div>
                                <div className='mt-3 row'>
                                    <div className='col-6'>
                                        <div className='row ms-4 me-4'>
                                            <label className='lableTX' htmlFor="">Job Title</label>
                                            <InputGroup className="mb-3 ">
                                                <Form.Control
                                                    className='bg_input_list'
                                                    placeholder=""
                                                    aria-label="Recipient's username"
                                                    aria-describedby="basic-addon2"
                                                />
                                                <InputGroup.Text className='bg_input_list_mini' id="basic-addon2">
                                                    <img id ="newid" style={{display:"none"}} src="./images/hari.png" alt="" />
                                                </InputGroup.Text>
                                            </InputGroup>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className='row ms-4 me-4'>
                                            <label className='lableTX' htmlFor="">Employer</label>
                                            <InputGroup className="mb-3 ">
                                                <Form.Control
                                                    className='bg_input_list'
                                                    placeholder=""
                                                    aria-label="Recipient's username"
                                                    aria-describedby="basic-addon2"
                                                />
                                                <InputGroup.Text className='bg_input_list_mini' id="basic-addon2">
                                                    <img id ="newid" style={{display:"none"}} src="./images/hari.png" alt="" />
                                                </InputGroup.Text>
                                            </InputGroup>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-3 row'>
                                    <div className='col-6'>
                                        <div className='row ms-4 me-4'>
                                            <label className='lableTX' htmlFor="">City</label>
                                            <InputGroup className="mb-3 ">
                                                <Form.Control
                                                    className='bg_input_list'
                                                    placeholder=""
                                                    aria-label="Recipient's username"
                                                    aria-describedby="basic-addon2"
                                                />
                                                <InputGroup.Text className='bg_input_list_mini' id="basic-addon2">
                                                    <img id ="newid" style={{display:"none"}} src="./images/hari.png" alt="" />
                                                </InputGroup.Text>
                                            </InputGroup>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className='row ms-4 me-4'>
                                            <label className='lableTX' htmlFor="">Country</label>
                                            <InputGroup className="mb-3 ">
                                                <Form.Control
                                                    className='bg_input_list'
                                                    placeholder=""
                                                    aria-label="Recipient's username"
                                                    aria-describedby="basic-addon2"
                                                />
                                                <InputGroup.Text className='bg_input_list_mini' id="basic-addon2">
                                                    <img id ="newid" style={{display:"none"}} src="./images/hari.png" alt="" />
                                                </InputGroup.Text>
                                            </InputGroup>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-3 row'>
                                    <div className='col-6'>
                                        <div className='row ms-4 me-4'>
                                            <label className='lableTX' htmlFor="">Start</label>
                                            <InputGroup className="mb-3 ">
                                                <Form.Control
                                                    className='bg_input_list'
                                                    placeholder=""
                                                    aria-label="Recipient's username"
                                                    aria-describedby="basic-addon2"
                                                />
                                                <InputGroup.Text className='bg_input_list_mini' id="basic-addon2">
                                                    <img id ="newid" style={{display:"none"}} src="./images/hari.png" alt="" />
                                                </InputGroup.Text>
                                            </InputGroup>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className='row ms-4 me-4'>
                                            <label className='lableTX' htmlFor="">End Date</label>
                                            <InputGroup className="mb-3 ">
                                                <Form.Control
                                                    className='bg_input_list'
                                                    placeholder=""
                                                    aria-label="Recipient's username"
                                                    aria-describedby="basic-addon2"
                                                />
                                                <InputGroup.Text className='bg_input_list_mini' id="basic-addon2">
                                                    <img id ="newid" style={{display:"none"}} src="./images/hari.png" alt="" />
                                                </InputGroup.Text>
                                            </InputGroup>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-3 row ms-4 me-4'>
                                    <div className='col-6'></div>
                                    <div className='col-6'>
                                        <Form.Check
                                            className='checkbox'
                                            type="checkbox"
                                            id="default-checkbox"
                                            label={<h3 className='labletx'>I currently work here</h3>}
                                        />
                                    </div>
                                </div>

                                <div className='mt-3 mb-5 row ms-4 me-4'>
                                    <div className='justify-start col-6 d-flex'>
                                        <div className='backbtn'>
                                            <h4 className='mt-2'>BACK</h4>
                                        </div>
                                    </div>
                                    <div className='justify-end col-6 d-flex'>
                                        <div className='nextbtn2'>
                                            <h4 className='mt-2'>Next</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-12 cen_work'>
                                <div className='row masgBox'>
                                    <div className='col-12'>
                                        <div className='mt-4 row ms-5 me-2'>
                                            <div className='col-12 endcent'>
                                                <div className='row'>
                                                    <img src="./images/cuticon.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='mt-5 row ms-5 me-5'>
                                            <h3 className='ms-5 me-5'>More Information Needed</h3>
                                        </div>
                                        <div className='mt-4 row ms-5 me-5'>
                                            <h3 className='ms-5 me-5 cltx'>Looks like you haven't entered any past work experience. We recommend that you at least enter your past Position and Company.</h3>
                                        </div>
                                        <div className='mt-5 row ms-5 me-5'>
                                            <div className='mt-5 col-12'>
                                                <div className='row ms-5 me-5'>
                                                    <div className='col-8'>
                                                        <div className='row btn_dont'>
                                                            <p className='mt-2 ms-5'>I DONT HAVE EXPERIENCE</p>
                                                        </div>
                                                    </div>
                                                    <div className='col-4'>
                                                    <div className='row btn_ok'>
                                                  <p className='mt-2'>OK</p>
                                                    </div>
                                                    </div>
                                                </div> 
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
