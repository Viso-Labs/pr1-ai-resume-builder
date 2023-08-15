import { React, useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Footer3 from "../components/Footer3";
import Heder_nav4 from "../components/Heder_nav4";
import "./WorkHistoy4.css";
import {Link, useNavigate,useLocation} from 'react-router-dom';



export default function WorkHistoy4() {

    const navigate = useNavigate();
    const location = useLocation();

    const [sclname, setsclname] = useState('')
    const [scllocation, setscllocation] = useState('');
    const [dgree, setdgree] = useState('')
    const [gradestartd, setgradestartd] = useState('');
    const [gradeendd, setgradeendd] = useState('')
    const [filedofstudy, setfiledofstudy] = useState('');

    const resumeDetails = location?.state?.data??{};
    console.log("resumeDetails::: ",resumeDetails)

    const changesclname = (event) => {

        setsclname(event.target.value);
        var id = document.getElementById("sclnameid");
        if (sclname !== "") {

            id.style.display = "block";
        }
        else {

            id.style.display = "none";
        }

    };
    const changescllocation = (event) => {

        setscllocation(event.target.value);
        var id = document.getElementById("scllocationid");
        if (scllocation !== "") {

            id.style.display = "block";
        }
        else {
            id.style.display = "none";

        }

    };
    const changedgree = (event) => {

        setdgree(event.target.value);
        var id = document.getElementById("dgreeid");

        if (dgree !== "") {

            id.style.display = "block";
        }
        else {

            id.style.display = "none";
        }

    };
    const changegradestartd = (event) => {

        setgradestartd(event.target.value);
        var id = document.getElementById("gradestartdid");
        if (gradestartd !== "") {

            id.style.display = "block";
        }
        else {

            id.style.display = "none";
        }

    };
    const changegradeendd = (event) => {
        setgradeendd(event.target.value);
        var id = document.getElementById("gradeenddid");
        if (gradeendd !== "") {
            id.style.display = "block";
        }
        else {
            id.style.display = "none";
        }
    };
    const changefiledofstudy = (event) => {

        setfiledofstudy(event.target.value);
        var id = document.getElementById("filedofstudyid");

        if (filedofstudy !== "") {

            id.style.display = "block";
        }
        else {

            id.style.display = "none";

        }

    };

    const next_SK = async (e) => {

        if (sclname === "") {
            var id = document.getElementById("sclnameid");
            id.style.display = "none";
            alert("Fill the sclname!");

        }
        else if (scllocation === "") {

            var id = document.getElementById("scllocationid");
            id.style.display = "none";
            alert("Fill the scllocation!");

        }
        else if (dgree === "") {

            var id = document.getElementById("dgreeid");
            id.style.display = "none";
            alert("Fill the dgree!");

        }
        else if (gradestartd === "") {

            var id = document.getElementById("gradestartdid");
            id.style.display = "none";
            alert("Fill the gradestartd!");

        }
        else if (gradeendd === "") {

            var id = document.getElementById("gradeenddid");
            id.style.display = "none";
            alert("Fill the gradeendd!");

        }
        else if (filedofstudy === "") {

            var id = document.getElementById("filedofstudyid");
            id.style.display = "none";
            alert("Fill the filedofstudy!");

        }
        else {

            resumeDetails.sclname = sclname;
            resumeDetails.scllocation = scllocation;
            resumeDetails.degree = dgree;
            resumeDetails.gradestartdate = gradestartd;
            resumeDetails.graductionendday = gradeendd;
            resumeDetails.filedofstudy = filedofstudy;
            navigate("/EducationPreveiw", {state: {
                data : resumeDetails
            }});


            // let response = await fetch("http://localhost:3000/generate-pdf", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json;charset=utf-8",
            //     },
            //     body: JSON.stringify(data),
            // });
            // let result = await response.json();
            // sessionStorage.setItem("pdflink", result.downloadLink);

            // sessionStorage.setItem("head4", true);

            
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
                                                    type="name"
                                                    onChange={changesclname}
                                                />
                                                <InputGroup.Text className='bg_input_list_mini' id="basic-addon2">
                                                    <img id="sclnameid" style={{ display: "none" }} src="./images/hari.png" alt="" />
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
                                                    type="name"
                                                    onChange={changescllocation}
                                                />
                                                <InputGroup.Text className='bg_input_list_mini' id="basic-addon2">
                                                    <img id="scllocationid" style={{ display: "none" }} src="./images/hari.png" alt="" />
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
                                                    type="name"
                                                    onChange={changedgree}
                                                />
                                                <InputGroup.Text className='bg_input_list_mini' id="basic-addon2">
                                                    <img id="dgreeid" style={{ display: "none" }} src="./images/hari.png" alt="" />
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
                                                    type="date"
                                                    onChange={changegradestartd}
                                                />
                                                <InputGroup.Text className='bg_input_list_mini' id="basic-addon2">
                                                    <img id="gradestartdid" style={{ display: "none" }} src="./images/hari.png" alt="" />
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
                                                    onChange={changefiledofstudy}

                                                />
                                                <InputGroup.Text className='bg_input_list_mini' id="basic-addon2">
                                                    <img id="filedofstudyid" style={{ display: "none" }} src="./images/hari.png" alt="" />
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
                                                    type="date"
                                                    onChange={changegradeendd}
                                                />
                                                <InputGroup.Text className='bg_input_list_mini' id="basic-addon2">
                                                    <img id="gradeenddid" style={{ display: "none" }} src="./images/hari.png" alt="" />
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
                                        <Link to="/Noexperience"><div className='backbtn'>
                                            <h4 className='mt-2'>BACK</h4>
                                        </div></Link>
                                    </div>
                                    <div className='justify-end col-6 d-flex'>
                                        <div className='nextbtn2' onClick={next_SK}>
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
