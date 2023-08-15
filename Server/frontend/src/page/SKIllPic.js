import React,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Footer3 from "../components/Footer3";
import Heder_nav4 from "../components/Heder_nav4";
import "./SKIllPic.css";
import {Link, useNavigate,useLocation} from 'react-router-dom';




export default function SKIllPic() {
    const location = useLocation();
    const navigate = useNavigate();
    const resumeDetails = location?.state?.data??{};
    console.log("resumeDetails::: ",resumeDetails)

    const [highlightSkill, setHighlightSkill] = useState('')

    const changeHighlightSkill = (event) => {
        setHighlightSkill(event.target.value);
    };
    
    const next_SUM = () =>{
        sessionStorage.setItem("head5", true);
        navigate("/SKIllsSummry", {state: {
            data : resumeDetails
        }});
        
    }

    return (
        <div>
            <div>
                <Heder_nav4 />

                <div className='bg_list row'>
                    <div className='col-12'>
                        <div className='row ms-5'>


                            <div className='col-7'>
                                <div className='mt-4 row'>
                                    <h3 className='tx_white'>Title, industry, keyword</h3>
                                </div>
                                <div className='row'>
                                    <div className='col-10'>
                                        <InputGroup className="mt-4 mb-4">
                                            <Form.Control
                                                className='bg_input_list inlist'
                                                placeholder="Title, industry, keyword"
                                                aria-label="Recipient's username"
                                                aria-describedby="basic-addon2"
                                            />
                                            <InputGroup.Text className='bg_input_list_mini' id="basic-addon2">
                                                {/* <img id ="newid" style={{display:"none"}} src="./images/hari.png" alt="" /> */}
                                            </InputGroup.Text>
                                        </InputGroup>
                                    </div>
                                    <div className='col-2'>
                                        <img className='mt-3' src="./images/searchbox.png" alt="" />
                                    </div>
                                </div>
                                <div className='row'>
                                    <h6 className='tx_white'>Popular Job Titles</h6>
                                </div>
                                <div className='row'>
                                    <div className='col-1'></div>
                                    <div className='justify-end col-11 d-flex'>
                                        <div className='mb-3 boxleftb'>
                                            <div className='col-12'>
                                                <div className='mt-2 row'>
                                                    <div className='justify-center align-middle col-4 d-flex'>
                                                        <img className='mt-4 adbox' src="./images/addbox.png" alt="" />
                                                        <img className='mt-4 ms-2 star' src="./images/Star.png" alt="" />
                                                    </div>
                                                    <div className='col-8'>
                                                        <div className='mt-4 ro3'>
                                                            <h3 className='tx45'>Expect Recommended</h3>
                                                        </div>
                                                        <div className='mt-4 ro3'>
                                                            <p className=''>Organization and Time Management</p>
                                                        </div>
                                                    </div>

                                                </div>
                                                <hr className='mt-2' />
                                                <div className='mt-2 row'>
                                                    <div className='justify-center align-middle col-4 d-flex'>
                                                        <img className='mt-4 adbox' src="./images/addbox.png" alt="" />
                                                        <img className='mt-4 ms-2 star' src="./images/Star.png" alt="" />
                                                    </div>
                                                    <div className='col-8'>
                                                        <div className='mt-4 ro3'>
                                                            <h3 className='tx45'>Expect Recommended</h3>
                                                        </div>
                                                        <div className='mt-4 ro3'>
                                                            <p className=''>PPE Compliance</p>
                                                        </div>
                                                    </div>

                                                </div>
                                                <hr className='mt-2' />
                                                <div className='mt-2 row'>
                                                    <div className='justify-center align-middle col-4 d-flex'>
                                                        <img className='mt-4 adbox' src="./images/addbox.png" alt="" />
                                                        <img className='mt-4 ms-2 star' src="./images/Star.png" alt="" />
                                                    </div>
                                                    <div className='col-8'>
                                                        <div className='mt-4 ro3'>
                                                            <h3 className='tx45'>Expect Recommended</h3>
                                                        </div>
                                                        <div className='mt-4 ro3'>
                                                            <p className=''>Interpersonal Communication</p>
                                                        </div>
                                                    </div>

                                                </div>
                                                <hr className='mt-2' />
                                                <div className='mt-2 row'>
                                                    <div className='justify-center align-middle col-4 d-flex'>
                                                        <img className='mt-4 adbox' src="./images/addbox.png" alt="" />
                                                        <img className='mt-4 ms-2 star' src="./images/Star.png" alt="" />
                                                    </div>
                                                    <div className='col-8'>
                                                        <div className='mt-4 ro3'>
                                                            <h3 className='tx45'>Expect Recommended</h3>
                                                        </div>
                                                        <div className='mt-4 ro3'>
                                                            <p className=''>Cultural Awareness</p>
                                                        </div>
                                                    </div>

                                                </div>
                                                <hr className='mt-2' />
                                                <div className='mt-2 mb-4 row'>
                                                    <div className='justify-center align-middle col-4 d-flex'>
                                                        <img className='mt-4 adbox' src="./images/addbox.png" alt="" />
                                                        <img className='mt-4 ms-2 star' src="./images/Star.png" alt="" />
                                                    </div>
                                                    <div className='col-8'>
                                                        <div className='mt-4 ro3'>
                                                            <h3 className='tx45'></h3>
                                                        </div>
                                                        <div className='mt-4 ro3'>
                                                            <p className=''>Self Motivated</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-5 bg_white'>
                                <div className='row ms-2 me-2'>
                                    <div className='col-12'>
                                        <div className='mt-5 row'>
                                            <h3 className='tx45'>What skills would you like to highlight?</h3>
                                        </div>
                                        <div className='mt-3 row'>
                                            <div className='justify-center d-flex col-12'>
                                                <img className='ms-1 me-1' src="./images/min.png" alt="" />
                                                <img className='ms-1 me-1' src="./images/starDark.png" alt="" />
                                                <img className='ms-1 me-1' src="./images/starDark.png" alt="" />
                                                <img className='ms-1 me-1' src="./images/starDark.png" alt="" />
                                                <img className='ms-1 me-1' src="./images/starDark.png" alt="" />
                                                <img className='ms-1 me-1' src="./images/starDark.png" alt="" />
                                                <InputGroup className="ms-1 me-1">
                                                    <Form.Control
                                                        className=''
                                                        placeholder=""
                                                        aria-label="Recipient's username"
                                                        aria-describedby="basic-addon2"
                                                        onChange={changeHighlightSkill}
                                                    />
                                                </InputGroup>
                                                <img className='ms-1 me-1' src="./images/bin2.png" alt="" />
                                            </div>
                                        </div>
                                        <div className='mt-3 mart row'>
                                            <div className='col-8'></div>
                                            <div className='justify-end col-4 d-flex'>
                                                <img src="./images/addone.png" alt="" />
                                            </div>
                                        </div>
                                        <div className='mt-3 mb-5 row'>
                                            <div className='justify-start col-6 d-flex'>
                                            <Link to="/EducationPreveiw"><div className='backbtn'>
                                                    <h4 className='mt-2'>BACK</h4>
                                                </div></Link>
                                            </div>
                                            <div className='justify-end col-6 d-flex'>
                                            <div className='nextbtn2' onClick={next_SUM}>
                                             <h4 className='mt-2'>Next</h4>
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
