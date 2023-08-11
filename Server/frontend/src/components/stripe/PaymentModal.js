import {useState,Fragment} from 'react';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import StripeContainer from './stripeContainer';

export default function BasicModal(props) {
  const { Total,setCall,call,packageDetails } = props;
  const [value, setValue] = useState(0)

  return (
    <Fragment>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={call}
        onClose={() => setCall(false)}
        sx={{ borderColor:"#0560A4",display: 'flex', justifyContent: 'center', alignItems: 'center',overflow:'scroll',position:'absolute',height:'100%',display:'block',left:'30%',right:'15%',top:"50%" }}
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
              Add your card details
          </Typography>
          <Typography
              component="h2"
              id="modal-title"
              level="h4"
              textColor="inherit"
              fontWeight="lg"
              mb={1}
          >
            <StripeContainer Total={Total} packageDetails={packageDetails}/>
          </Typography>
        </Sheet>
      </Modal>
    </Fragment>
  );
}