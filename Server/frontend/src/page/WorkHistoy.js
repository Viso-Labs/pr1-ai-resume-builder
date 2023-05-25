import {React,useState} from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Footer3 from "../components/Footer3";
import Heder_nav4 from "../components/Heder_nav4";
import "./WorkHistoy.css";
import { Link,useNavigate } from 'react-router-dom';



export default function WorkHistoy() {
    const [seletct,setselect]= useState();
    const navigate = useNavigate();

    const SELECT01 = () => {
        const pBox = document.getElementsByClassName("borderselect2");
        pBox[0].style.border = "1px solid white";
        const pBox2 = document.getElementsByClassName("borderselect1");
        pBox2[0].style.border = "5px solid white";
        setselect("A STUDENT OF MY IT UNIVERSITY");
        
    };
    const SELECT02 = () => {
        const pBox = document.getElementsByClassName("borderselect1");
        pBox[0].style.border = "1px solid white";
        const pBox2 = document.getElementsByClassName("borderselect2");
        pBox2[0].style.border = "5px solid white";
        setselect("A DIFFERENT PERSON");
    };
  
    const chosseone = () =>{
      if(seletct=="A STUDENT OF MY IT UNIVERSITY"){
        sessionStorage.setItem("usertype", seletct);
        navigate("/WorkHistoy2");
      }
      else if(seletct=="A DIFFERENT PERSON"){
        sessionStorage.setItem("usertype", seletct);
        navigate("/WorkHistoy2");
  
      }
      else{
        alert("Please Choice your type")
      }
    }

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
                                        <div className='row ms-4 me-4' onClick={SELECT01}>
                                            <div className='mt-4 mb-4 borderselect1'>
                                            A STUDENT OF MY IT UNIVERSITY
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className='row ms-4 me-4' onClick={SELECT02}>
                                            <div className='mt-4 mb-4 borderselect2'>
                                            A DIFFERENT PERSON
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className='mt-3 mb-5 row ms-4 me-4'>
                                    <div className='justify-start col-6 d-flex'>
                                        <div className='backbtn'>
                                            <Link to="/Creation"><h4 className='mt-2'>BACK</h4></Link>
                                        </div>
                                    </div>
                                    <div className='justify-end col-6 d-flex'>
                                    <Link to="/WorkHistoy2"><div className='align-middle d-flex wi'>
                                            <h6 className='mt-2 ms-3 me-3 tx54'>SKIP FOR NOW</h6>
                                        </div></Link>
                                        <div className='nextbtn2' onClick={chosseone}>
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
