import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "./LogIn.css";
import { Link } from 'react-router-dom';



export default function LogIn() {
    return (
        <div className='bg_login'>
            <div className='justify-center col-12 d-flex'>
                <div className='mt-4 mb-4 row ms-5 me-5 bg_Log_box'>
                    <div className='col-12'>
                        <div className='row'>
                            <div className='justify-center mt-5 col-12 d-flex'>
                                <div className='logoBoxLOg'>
                                    <img class="logo_log" src="./images/logo2.png" alt="" />
                                </div>
                            </div>
                            <div className='justify-center mt-3 col-12 d-flex'>
                                <h3 className='logTX'>Sign in to your account.</h3>
                            </div>
                            <div className='justify-center mt-5 col-12 d-flex'>
                                <div className='row widthInput'>
                                    <InputGroup size="lg">
                                        <InputGroup.Text className='bg_input' id="inputGroup-sizing-lg">
                                            <div className='justify-center col-12 d-flex'>
                                                <img className='logpngicon me-2' src="./images/email.png" alt="" />
                                                <h5 className='inputx'>Email:</h5>
                                            </div>
                                        </InputGroup.Text>
                                        <Form.Control
                                            className='bg_input2'
                                            aria-label="Large"
                                            aria-describedby="inputGroup-sizing-sm"
                                        />
                                    </InputGroup>
                                </div>
                            </div>
                            <div className='justify-center mt-2 col-12 d-flex'>
                                <div className='row widthInput'>
                                    <InputGroup size="lg">
                                        <InputGroup.Text className='bg_input' id="inputGroup-sizing-lg">
                                            <div className='justify-center col-12 d-flex'>
                                                <img className='logpngicon2 me-2' src="./images/pw.png" alt="" />
                                                <h5 className='inputx'>Password:</h5>
                                            </div>
                                        </InputGroup.Text>
                                        <Form.Control
                                            className='bg_input2'
                                            aria-label="Large"
                                            aria-describedby="inputGroup-sizing-sm"
                                        />
                                    </InputGroup>
                                </div>
                            </div>
                            <div className='justify-center mt-5 col-12 d-flex'>
                                <div className='signinbtn'>
                                    <Link to="/SignUp"><h3>SIGN IN</h3></Link>
                                </div>
                            </div>
                            <div className='justify-center mt-3 mb-3 col-12 d-flex'>
                                <h3 className=''>OR sign in with</h3>
                            </div>
                            <div className='justify-center mb-3 col-12 d-flex'>
                                <img className='mt-2 mb-2 ms-2 me-2' src="./images/linkin.png" alt="" />
                                <img className='mt-2 mb-2 ms-2 me-2' src="./images/Google.png" alt="" />
                                <img className='mt-2 mb-2 ms-2 me-2' src="./images/logoweb.png" alt="" />
                            </div>
                            <div className='justify-center mb-3 col-12 d-flex bottomBorder'>
                                <div className='row'>
                                    <div className='justify-center mt-4 col-12 d-flex'>
                                        <h5 className=''>Forgot your password?</h5>
                                    </div>
                                    <div className='justify-center col-12 d-flex'>
                                        <h4 className=''>Don't have an account? <span className='tx_endlog'>Sign Up</span></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
