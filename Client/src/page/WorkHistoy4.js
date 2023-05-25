import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Footer3 from "../components/Footer3";
import Heder_nav4 from "../components/Heder_nav4";
import "./WorkHistoy4.css";
import { Link } from 'react-router-dom';



export default function WorkHistoy4() {
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
                                    </div>
                                </div>
                                <div className='mt-1 row ms-4'>
                                    <h6 className='tx_white'>Include every school, even if you're still there or didn't graduate.</h6>
                                </div>
                                <div className='mt-5 row'>
                                    <div className='col-6'>
                                        <div className='row ms-4 me-4'>
                                            <label className='lableTX' htmlFor="">School Name</label>
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
                                            <label className='lableTX' htmlFor="">School Location</label>
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
                                            <label className='lableTX' htmlFor="">Degree</label>
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
                                            <label className='lableTX' htmlFor="">Graduation Start Date</label>
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
                                            <label className='lableTX' htmlFor="">Field of Study</label>
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
                                            <label className='lableTX' htmlFor="">Graduation End Date</label>
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
                                            <Link to="/Noexperience"><h4 className='mt-2'>Next</h4></Link>
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
