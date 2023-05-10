import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Footer3 from "../components/Footer3";
import Heder_nav4 from "../components/Heder_nav4";
import "./Creation.css";



export default function Creation() {
    return (
        <div>
            <div>
                <Heder_nav4 />

                <div className='bg_list'>
                    <div className=' col-12'>
                        <div className='row ms-3 me-3'>
                            <div className='col-12'>
                                <div className='mt-3 row ms-4'>
                                    <h2 className='tx_white'>What’s the best way for employers to contact you?</h2>
                                </div>
                                <div className='mt-1 row ms-4'>
                                    <h6 className='tx_white'>We suggest including an email and phone number.</h6>
                                </div>
                                <div className='mt-3 row'>
                                    <div className='col-6'>
                                        <div className='row ms-4 me-4'>
                                            <label className='lableTX' htmlFor="">First Name</label>
                                            <InputGroup className="mb-3 ">
                                                <Form.Control
                                                    className='bg_input_list'
                                                    placeholder=""
                                                    aria-label="Recipient's username"
                                                    aria-describedby="basic-addon2"
                                                />
                                                <InputGroup.Text className='bg_input_list_mini' id="basic-addon2">
                                                    <img src="./images/hari.png" alt="" />
                                                </InputGroup.Text>
                                            </InputGroup>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className='row ms-4 me-4'>
                                            <label className='lableTX' htmlFor="">Surname</label>
                                            <InputGroup className="mb-3 ">
                                                <Form.Control
                                                    className='bg_input_list'
                                                    placeholder=""
                                                    aria-label="Recipient's username"
                                                    aria-describedby="basic-addon2"
                                                />
                                                <InputGroup.Text className='bg_input_list_mini' id="basic-addon2">
                                                    <img src="./images/hari.png" alt="" />
                                                </InputGroup.Text>
                                            </InputGroup>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className='row ms-4 me-4'>
                                            <label className='lableTX' htmlFor="">Profession</label>
                                            <InputGroup className="mb-3 ">
                                                <Form.Control
                                                    className='bg_input_list'
                                                    placeholder=""
                                                    aria-label="Recipient's username"
                                                    aria-describedby="basic-addon2"
                                                />
                                                <InputGroup.Text className='bg_input_list_mini' id="basic-addon2">
                                                    <img src="./images/hari.png" alt="" />
                                                </InputGroup.Text>
                                            </InputGroup>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-6'>
                                        <div className='row ms-4 me-4'>
                                            <label className='lableTX' htmlFor="">District</label>
                                            <InputGroup className="mb-3 ">
                                                <Form.Control
                                                    className='bg_input_list'
                                                    placeholder=""
                                                    aria-label="Recipient's username"
                                                    aria-describedby="basic-addon2"
                                                />
                                                <InputGroup.Text className='bg_input_list_mini' id="basic-addon2">
                                                    <img src="./images/hari.png" alt="" />
                                                </InputGroup.Text>
                                            </InputGroup>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className='row'>
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
                                                            <img src="./images/hari.png" alt="" />
                                                        </InputGroup.Text>
                                                    </InputGroup>
                                                </div>
                                            </div>
                                            <div className='col-6'>
                                                <div className='row ms-4 me-4'>
                                                    <label className='lableTX' htmlFor="">Postal Code</label>
                                                    <InputGroup className="mb-3 ">
                                                        <Form.Control
                                                            className='bg_input_list'
                                                            placeholder=""
                                                            aria-label="Recipient's username"
                                                            aria-describedby="basic-addon2"
                                                        />
                                                        <InputGroup.Text className='bg_input_list_mini' id="basic-addon2">
                                                            <img src="./images/hari.png" alt="" />
                                                        </InputGroup.Text>
                                                    </InputGroup>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-6'>
                                        <div className='row ms-4 me-4'>
                                            <label className='lableTX' htmlFor="">Phone</label>
                                            <InputGroup className="mb-3 ">
                                                <Form.Control
                                                    className='bg_input_list'
                                                    placeholder=""
                                                    aria-label="Recipient's username"
                                                    aria-describedby="basic-addon2"
                                                />
                                                <InputGroup.Text className='bg_input_list_mini' id="basic-addon2">
                                                    <img src="./images/hari.png" alt="" />
                                                </InputGroup.Text>
                                            </InputGroup>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className='row ms-4 me-4'>
                                            <label className='lableTX' htmlFor="">Email</label>
                                            <InputGroup className="mb-3 ">
                                                <Form.Control
                                                    className='bg_input_list'
                                                    placeholder=""
                                                    aria-label="Recipient's username"
                                                    aria-describedby="basic-addon2"
                                                />
                                                <InputGroup.Text className='bg_input_list_mini' id="basic-addon2">
                                                    <img src="./images/hari.png" alt="" />
                                                </InputGroup.Text>
                                            </InputGroup>
                                        </div>
                                    </div>
                                </div>

                                <div className='mt-3 mb-5 row ms-4 me-4'>
                                    <div className='justify-start col-6 d-flex'>
                                        <div className='backbtn'>
                                            <h4 className='mt-2'>BACK</h4>
                                        </div>
                                    </div>
                                    <div className='justify-end col-6 d-flex'>
                                    <div className='nextbtn_his'>
                                            <h4 className='mt-2'>Next: Working History</h4>
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
