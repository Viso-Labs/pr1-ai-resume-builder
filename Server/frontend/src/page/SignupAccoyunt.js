import { React, useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "./SignupAccoyunt.css";
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword} from 'firebase/auth';
import { auth, firestoredb } from '../firebase';
import { collection, addDoc } from "firebase/firestore";
import AuthServices from "../services/AuthServices";


export default function SignupAccoyunt() {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async (e) => {
        try {
            const isSignUp = await AuthServices.signUp({fullName:name, email:email, password:password});
            if (isSignUp) {
                // await onSubmitFirebase(e);
                if(email==="admin2@gmail.com" && password==="admin123"){
                    navigate("/Admin");
                  }
                  else{
                    navigate("/LogIn");
                  }
            }
          } catch (error) {
          }
    }
  
    const onSubmitFirebase = async (e) => {
      e.preventDefault();
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          addusers();
          const user = userCredential.user;
          console.log(user);
  
          if(email==="admin2@gmail.com" && password==="admin123"){
            navigate("/Admin");
          }
          else{
            navigate("/DashBoard01");
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          alert(errorMessage);
        });
    }
  
    const addusers = async (e) => {
      try {
        const docRef = await addDoc(collection(firestoredb, "users"), {
          email: email,
          password: password,
          name:name,
        });
        console.log("Document written with ID: ", docRef.id);
        alert("User adding succesfully: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
        alert("User adding document: ", e)
      }
    }


    return (
        <div className='bg_login'>
            <div className='justify-center col-12 d-flex'>
                <div className='mt-4 mb-4 row ms-5 me-5 bg_Log_box2'>
                    <div className='col-12'>
                        <div className='row'>
                            <div className='justify-center mt-5 col-12 d-flex'>
                                <div className='logoBoxLOg'>
                                    <img class="logo_log" src="./images/logo2.png" alt="" />
                                </div>
                            </div>
                            <div className='justify-center mt-3 col-12 d-flex'>
                                <h3 className='logTX'>Sign up to your account.</h3>
                            </div>
                            <div className='justify-center mt-5 col-12 d-flex'>
                                <div className='row widthInput'>
                                    <InputGroup size="lg">
                                        <InputGroup.Text className='bg_input' id="inputGroup-sizing-lg">
                                            <div className='justify-center col-12 d-flex'>
                                                {/* <img className='logpngicon me-2' src="./images/email.png" alt="" /> */}
                                                <h5 className='inputx'>Full Name:</h5>
                                            </div>
                                        </InputGroup.Text>
                                        <Form.Control
                                            className='bg_input2'
                                            aria-label="Large"
                                            aria-describedby="inputGroup-sizing-sm"
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </InputGroup>
                                </div>
                            </div>
                          
                            <div className='justify-center mt-2 col-12 d-flex'>
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
                                            onChange={(e) => setEmail(e.target.value)}
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
                                            type="password"
                                            className='bg_input2'
                                            aria-label="Large"
                                            aria-describedby="inputGroup-sizing-sm"
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </InputGroup>
                                </div>
                            </div>

                            {/* <div onClick={onSubmit} className='justify-center mt-5 col-12 d-flex'>
                                <div className='signinbtn'>
                             <h3>SIGN UP</h3>
                                </div>
                            </div> */}

                            <button onClick={onSubmit} className='justify-center mt-5 col-12 d-flex'>
                                <div className='signinbtn'>
                             <h3>SIGN UP</h3>
                                </div>
                            </button>

                            <div className='justify-center mt-3 mb-3 col-12 d-flex'>
                                <h3 className=''>OR sign up with</h3>
                            </div>
                            <div className='justify-center mb-3 col-12 d-flex'>
                                <img className='mt-2 mb-2 ms-2 me-2' src="./images/linkin.png" alt="" />
                                <img className='mt-2 mb-2 ms-2 me-2' src="./images/Google.png" alt="" />
                                <img className='mt-2 mb-2 ms-2 me-2' src="./images/logoweb.png" alt="" />
                            </div>
                            <div className='justify-center mb-3 col-12 d-flex bottomBorder2'>
                                <div className='row'>
                                    <div className='justify-center mt-4 col-12 d-flex'>
                                        <h5 className=''></h5>
                                    </div>
                                    <div className='justify-center col-12 d-flex'>
                                        <h4 className=''>Do have an account? <span className='tx_endlog'>Sign In</span></h4>
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
