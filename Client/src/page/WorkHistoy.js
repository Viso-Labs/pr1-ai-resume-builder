import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Footer3 from "../components/Footer3";
import Heder_nav4 from "../components/Heder_nav4";
import "./WorkHistoy.css";



export default function WorkHistoy() {
    return (
        <div>
            <div>
                <Heder_nav4 />

                <div className='bg_list'>
                    <div className=' col-12'>
                        <div className='row ms-3 me-3'>
                            <div className='col-12'>
                                <div className='mt-5 row ms-4'>
                                    <div className='justify-center mt-3 col-12 d-flex'>
                                        <h2 className='tx_white'>Why do you need a resume?</h2>
                                    </div>
                                </div>
                                <div className='mt-1 row ms-4'>
                                    <div className='justify-center col-12 d-flex'>
                                        <h6 className='tx_white'>We'll show you a personalized experience based on your response.</h6>
                                    </div>
                                </div>
                                <div className='mt-3 row'>
                                    <div className='col-6'>
                                        <div className='row ms-4 me-4'>
                                            <InputGroup className="mt-4 mb-4">
                                                <Form.Control
                                                    className='bg_input_list inlist'
                                                    placeholder="A STUDENT OF MY IT UNIVERSITY"
                                                    aria-label="Recipient's username"
                                                    aria-describedby="basic-addon2"
                                                />
                                                <InputGroup.Text className='bg_input_list_mini' id="basic-addon2">
                                                    {/* <img src="./images/hari.png" alt="" /> */}
                                                </InputGroup.Text>
                                            </InputGroup>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className='row ms-4 me-4'>
                                            <InputGroup className="mt-4 mb-4">
                                                <Form.Control
                                                    className='bg_input_list inlist'
                                                    placeholder="A DIFFERENT PERSON"
                                                    aria-label="Recipient's username"
                                                    aria-describedby="basic-addon2"
                                                />
                                                <InputGroup.Text className='bg_input_list_mini' id="basic-addon2">
                                                    {/* <img src="./images/hari.png" alt="" /> */}
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
                                        <div className='align-middle d-flex wi'>
                                            <h6 className='mt-2 ms-3 me-3 tx54'>SKIP FOR NOW</h6>
                                        </div>
                                        <div className='nextbtn2'>
                                            <h4 className='mt-2'>Next</h4>
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
