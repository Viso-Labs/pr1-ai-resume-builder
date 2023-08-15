import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "./ResetPassword.css";
import { React, useState } from 'react';
import {Link,useNavigate } from 'react-router-dom';
import AuthServices from "../services/AuthServices";
import { useParams } from 'react-router-dom';
import Token from "../services/token/Token";

function ResetPassword() {

    const navigate = useNavigate();
    const { token } = useParams();
    const tokenDetails = Token.getAuth(token);
    console.log('tokenDetails: ',tokenDetails)

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const resetPassword = async (e) => {
        if(password===confirmPassword){
            try {
                const userData = await AuthServices.resetPassword({confirmPassword:confirmPassword, password:password, email:tokenDetails.email});
                if (userData) {
                    console.log('userData: ',userData);
                    // await onLoginFirebase(e);
                    navigate("/Login")
                }
            }catch (error){
            }
        }else{
            alert("passwords are not matching!");
        }
    }

    return (
        <div>
        {
        tokenDetails?.verified ? 
        <div className='bg_login'>
            <div className='justify-center col-12 d-flex'>
                <div className='mt-4 mb-4 row ms-5 me-5 bg_Log_box'>
                    <div className='col-12'>
                        <div className='row'>
                            <div className='justify-center mt-5 col-12 d-flex'>
                                <div className='logoBoxLOg'>
                                    <img class="logo_log" src={require('../assets/images/logo2.png')} alt="" />
                                </div>
                            </div>
                            <div className='justify-center mt-3 col-12 d-flex'>
                                <h3 className='logTX'>Reset Your Password</h3>
                            </div>

                            <div className='justify-center mt-2 col-12 d-flex'>
                                <div className='row widthInput'>
                                    <InputGroup size="lg">
                                        <InputGroup.Text className='bg_input' id="inputGroup-sizing-lg" >
                                            <div className='justify-center col-12 d-flex'>
                                                <img className='logpngicon2 me-2' src={require('../assets/images/pw.png')} alt="" />
                                                <h5 className='inputx'>Password:</h5>
                                            </div>
                                        </InputGroup.Text>
                                        <Form.Control
                                            type="password"
                                            className='bg_input2'
                                            aria-label="Large"
                                            aria-describedby="inputGroup-sizing-sm"
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </InputGroup>
                                </div>
                            </div>

                            <div className='justify-center mt-2 col-12 d-flex'>
                                <div className='row widthInput'>
                                    <InputGroup size="lg">
                                        <InputGroup.Text className='bg_input' id="inputGroup-sizing-lg" >
                                            <div className='justify-center col-12 d-flex'>
                                                <img className='logpngicon2 me-2' src={require('../assets/images/pw.png')} alt="" />
                                                <h5 className='inputx'>Confirm Password:</h5>
                                            </div>
                                        </InputGroup.Text>
                                        <Form.Control
                                            type="password"
                                            className='bg_input2'
                                            aria-label="Large"
                                            aria-describedby="inputGroup-sizing-sm"
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                        />
                                    </InputGroup>
                                </div>
                            </div>

                            <div className='justify-center mt-5 col-12 d-flex'>
                                <div className='signinbtn' onClick={resetPassword}>
                                    <h3>Reset Password</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        :
        <h1>Unauthorized</h1>
        }
        </div>

    )
}


export default ResetPassword;