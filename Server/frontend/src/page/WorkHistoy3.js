import {React,useState} from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Footer3 from "../components/Footer3";
import Heder_nav4 from "../components/Heder_nav4";
import "./WorkHistoy3.css";
import {Link, useNavigate} from 'react-router-dom';



export default function WorkHistoy3() {

    const navigate = useNavigate();

    
    const [title, settitle] = useState('')
    const [employee, setemployee] = useState('');
    const [city, setcity] = useState('')
    const [country, setcountry] = useState('');
    const [startdate, setstartdate] = useState('')
    const [enddate, setenddate] = useState('');

    const changetitle = (event) => {

        settitle(event.target.value);
        var id = document.getElementById("titleid");
        if (title !== "") {

            id.style.display = "block";
        }
        else {

            id.style.display = "none";
        }

    };
    const changeemployee = (event) => {

        setemployee(event.target.value);
        var id = document.getElementById("employeeid");
        if (employee !== "") {

            id.style.display = "block";
        }
        else {
            id.style.display = "none";

        }

    };
    const changecity = (event) => {

        setcity(event.target.value);
        var id = document.getElementById("cityid");

        if (city !== "") {

            id.style.display = "block";
        }
        else {

            id.style.display = "none";
        }

    };
    const changecountry = (event) => {

        setcountry(event.target.value);
        var id = document.getElementById("countryid");
        if (country !== "") {

            id.style.display = "block";
        }
        else {

            id.style.display = "none";
        }

    };
    const changestartdate = (event) => {

        setstartdate(event.target.value);
        var id = document.getElementById("startdateid");

        if (startdate !== "") {

            id.style.display = "block";
        }
        else {
            id.style.display = "none";

        }

    };
    const changeenddate = (event) => {

        setenddate (event.target.value);
        var id = document.getElementById("enddateid");

        if (enddate  !== "") {

            id.style.display = "block";
        }
        else {

            id.style.display = "none";

        }

    };

    const cut = () => {
        const popbox = document.getElementsByClassName("masgBox");
        popbox[0].style.position = "absolute";
        popbox[0].style.visibility = "hidden";
      };

      const next_education = () =>{

        if (title === "") {
            var id = document.getElementById("titleid");
            id.style.display = "none";
            alert("Fill the title!");

        }
        else if (employee=== "") {

            var id = document.getElementById("employeeid");
            id.style.display = "none";
            alert("Fill the employee!");

        }
        else if (city === "") {

            var id = document.getElementById("cityid");
            id.style.display = "none";
            alert("Fill the city!");

        }
        else if (country === "") {

            var id = document.getElementById("countryid");
            id.style.display = "none";
            alert("Fill the country!");

        }
        else if (startdate === "") {

            var id = document.getElementById("startdateid");
            id.style.display = "none";
            alert("Fill the startdate!");

        }
        else if (enddate === "") {

            var id = document.getElementById("enddateid");
            id.style.display = "none";
            alert("Fill the enddate!");

        }
        else{
            sessionStorage.setItem("head3", true);
            navigate("/Noexperience");
        }


        
    }

    const next_education2 = () =>{
        sessionStorage.setItem("head3", true);
        navigate("/Noexperience");
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
                                                    type='name'
                                                    onChange={changetitle}
                                                />
                                                <InputGroup.Text  className='bg_input_list_mini' id="basic-addon2">
                                                    <img id ="titleid" style={{display:"none"}} src="./images/hari.png" alt="" />
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
                                                    type='name'
                                                    onChange={changeemployee}
                                                />
                                                <InputGroup.Text className='bg_input_list_mini' id="basic-addon2">
                                                    <img id ="employeeid" style={{display:"none"}} src="./images/hari.png" alt="" />
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
                                                    type='name'
                                                    onChange={changecity}
                                                />
                                                <InputGroup.Text className='bg_input_list_mini' id="basic-addon2">
                                                    <img id ="cityid" style={{display:"none"}} src="./images/hari.png" alt="" />
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
                                                    type='name'
                                                    onChange={changecountry}
                                                />
                                                <InputGroup.Text className='bg_input_list_mini' id="basic-addon2">
                                                    <img id ="countryid" style={{display:"none"}} src="./images/hari.png" alt="" />
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
                                                    type='date'
                                                    onChange={changestartdate}
                                                />
                                                <InputGroup.Text className='bg_input_list_mini' id="basic-addon2">
                                                    <img id ="startdateid" style={{display:"none"}} src="./images/hari.png" alt="" />
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
                                                    type='date'
                                                    onChange={changeenddate}
                                                />
                                                <InputGroup.Text className='bg_input_list_mini' id="basic-addon2">
                                                    <img id ="enddateid" style={{display:"none"}} src="./images/hari.png" alt="" />
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
                                    <Link to="/WorkHistoy2"><div className='backbtn'>
                                            <h4 className='mt-2'>BACK</h4>
                                        </div></Link>
                                    </div>
                                    <div className='justify-end col-6 d-flex'>
                                    <div className='nextbtn2' onClick={next_education}>
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
                                                    <img  onClick={cut} src="./images/cuticon.png" alt="" />
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
                                                        <div onClick={next_education2} className='row btn_dont'>
                                                            <p className='mt-2 ms-5'>I DONT HAVE EXPERIENCE</p>
                                                        </div>
                                                    </div>
                                                    <div className='col-4'>
                                                    <div onClick={cut} className='row btn_ok'>
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
