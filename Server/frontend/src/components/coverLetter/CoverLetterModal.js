import {useState,Fragment} from 'react';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useNavigate, useLocation } from "react-router-dom";
import AI_Services from "../../services/AI_services";


export default function ForgetPasswordModal(props) {
  const { setCall,call } = props;
  const navigate = useNavigate();
  const resumeDetails = JSON.parse(localStorage.getItem("resumeDetails"));
  const [postalCode, setPostalCode] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [letterReceiverName, setLetterReceiverName] = useState("");
  const [letterReceiverPosition, setLetterReceiverPosition] = useState("");
  const [mx, setMx] = useState("");

  const createCoverLetter = async () => {
    const resumeDetails = JSON.parse(localStorage.getItem("resumeDetails"));
    const companyDetails = {
      postalCode: postalCode,
      companyAddress: companyAddress,
      companyName: companyName,
      letterReceiverName: letterReceiverName,
      letterReceiverPosition: letterReceiverPosition,
      mx: mx,
    }
    const postData = {...resumeDetails, ...companyDetails
    }

    const letterBody = "I know that XYZ's current plans involve developing a comprehensiveonline portal focused on healthcare-related issues. This project is aperfect match for my personal and professional interests and an exciting opportunity to create a unique online base of knowledge forpatients and healthcare professionals. I would love to leverage my knowledge of SEO marketing and online growth marketing to achieve groundbreaking results with this initiative. I would welcome the chance to discuss your digital marketing objectives and show you how my success at ABC can translate into digital and online marketing growth for XYZ.";
    const allData = {...companyDetails, letterBody: letterBody}

    navigate("/cover", {state: {
      data : allData
    }});

    // try {
    //   const letterBody = await AI_Services.getCoverLetterBody({postData:postData});
    //   if (letterBody) {
    //     const allData = {...companyDetails, letterBody: letterBody}
    //     navigate("/cover", {state: {
    //       data : allData
    //     }});
    //   }
    // } catch (error) {
    // }


  }

  return (
    <Fragment>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={call}
        onClose={() => setCall(false)}
        sx={{ borderColor:"#0560A4",display: 'flex', justifyContent: 'center', alignItems: 'center',overflow:'scroll',position:'absolute',height:'100%',display:'block',left:'30%',right:'15%',top:"20%" }}
      >
        <Sheet
          size="lg"
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: 'md',
            borderColor:"#0560A4",
            p: 3,
            boxShadow: 'lg',
          }}
        >
          <ModalClose
            variant="outlined"
            sx={{
              top: '5px',
              right: '5px',
              borderColor:"#0560A4",
              color: "#0560A4",
              boxShadow: '0 2px 12px 0 rgba(0 0 0 / 0.2)',
              borderRadius: '50%',
              bgcolor: 'background.body',
            }}
          />
          <Typography
              component="h2"
              id="modal-title"
              level="h4"
              fontWeight="lg"
              mb={1}
              textColor="#0560A4"
              sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', textColor:"#0560A4"}}
          >
              Provide The Company Details
          </Typography>
          <Typography
              component="h2"
              id="modal-title"
              level="h4"
              textColor="inherit"
              fontWeight="lg"
              mb={1}
          >
            Please provide the below details for the cover letter!
          </Typography>

            <div>
              <TextField id="standard-basic1" label="Company Name:" variant="standard" onChange={(e)=>{setCompanyName(e.target.value)}} />
            </div>

            <div>
              <TextField id="standard-basic2" label="Company Address:" variant="standard" onChange={(e)=>{setCompanyAddress(e.target.value)}} />
            </div>

            <div>
              <TextField id="standard-basic3" label="PostalCode:" variant="standard" onChange={(e)=>{setPostalCode(e.target.value)}} />
            </div>

            <div>
              <TextField id="standard-basic4" label="Letter Receiver's Name:" variant="standard" onChange={(e)=>{setLetterReceiverName(e.target.value)}} />
            </div>

            <div>
              <TextField id="standard-basic5" label="Letter Receiver's Position:" variant="standard" onChange={(e)=>{setLetterReceiverPosition(e.target.value)}} />
            </div>

            <div>
              <TextField id="standard-basic6" label="Mx.. (Mr or Miss):" variant="standard" onChange={(e)=>{setMx(e.target.value)}} />
            </div>

          <br/><br/>
            <div>
                <Button variant="outlined" onClick={createCoverLetter}>Create The Cover Letter</Button>
            </div>
        </Sheet>
      </Modal>
    </Fragment>
  );
}