import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate, useLocation } from "react-router-dom"
import Token from "../../services/token/Token";
import userServices from "../../services/UserServices";
import authServices from "../../services/AuthServices";


const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
            innerWidth: "20px",
            width:"20px",
			iconColor: "#0560A4",
			color: "#0560A4",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "20px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#0560A4" },
			"::placeholder": { color: "#0560A4" }
		},
		invalid: {
			iconColor: "#a83232",
			color: "#a83232"
		}
	}
}

const customTheme = createTheme({
    palette: {
    secondary: {
        main: "#0560A4",
        contrastText: "#FFFFFF"
    },
    rose:{
      main: "#0560A4",
      contrastText: "#"
    }
    }
  });

export default function PaymentForm(props) {
    const navigate = useNavigate()
    const token = Token.getAccessToken();
    const user = Token.getAuth(token);
	const {Total, packageDetails}=props
    const [success, setSuccess ] = useState(false);
    const [err, setErr] = useState({cardholderName:"",CardDetails:""});
    const [CardHolderName, setCardHolderName] = useState();
    const stripe = useStripe()
    const elements = useElements()

    const logout = async (e) => {
        e.preventDefault()
        const res = await authServices.logout()
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErr({cardholderName:"", CardDetails:""});
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })
        var cardHolderError=false
        var cardNameError=""
        if(!CardHolderName){
            cardHolderError=true
            cardNameError="Card Holder name should not be empty"
        }else{
            if(CardHolderName.length<=3){
                cardHolderError=true
                cardNameError="Card Holder name should be longer than 3 characters"
            }
        }
        if(!error&&!cardHolderError) {
            try {
                const billingData = {CardHolderName:CardHolderName, packageDetails:packageDetails}
                const {id} = paymentMethod
                const res = await userServices.userUpgrade({
                    billingDetails:billingData,
                    amount: Total,
                    id:id,
                    paymentMethod:paymentMethod,
                });

                if(res.success) {
                    console.log("Success message: ",res.message)
                    setSuccess(true)
                }
            }catch (error) {
            }
        } else {
            setErr({CardDetails:error.message,cardholderName:cardNameError})
        }
    }

    return (
        <>
        {!success ? 
        <form onSubmit={handleSubmit}>
            <ThemeProvider theme={customTheme}>
            <fieldset className="FormGroup">
                <div className="FormRow">
                    <div className="my-3 cardname">
                        <p className="dis fw-bold mb-2">Cardholder name</p>
                        <TextField
                            error={err.cardholderName?true:false}
                            helperText={err.cardholderName}
                            margin="normal"
                            color='secondary'
                            fullWidth
                            onChange={(e)=>{setCardHolderName(e.target.value)}}
                            id="cardholderName"
                            label="Cardholder Name"
                            name="cardholderName"
                            autoFocus
                        />
                    </div>
                    <CardElement options={CARD_OPTIONS}/>
                    <p style={{fontSize:"0.75rem",marginTop:"8px", color:"#ba000d" }} >{err.CardDetails}</p>
                </div>
            </fieldset>
            
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color='secondary'
                sx={{ mt: 3, mb: 2,}}
            >
                Pay $ {Total}
            </Button>

            </ThemeProvider>
        </form>
        :
       <div>
           <h2>Your payment is successful and upgraded your plan. Please login again to get the premier experience.</h2>
           <Button
                onClick={logout}
                variant="contained"
                color='secondary'
                sx={{ mt: 3, mb: 2,}}
            >
                Logout
            </Button>
       </div> 
        }
            
        </>
    )
}