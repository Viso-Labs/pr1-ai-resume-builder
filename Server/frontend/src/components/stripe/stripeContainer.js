import React, { useState } from 'react'
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import PaymentForm from "./PaymentForm"
import config from "../../env.json";

export default function StripeContainer(props) {
	const PUBLIC_KEY = config.STRIPE_PUBLISH_TEST;
	const stripeTestPromise = loadStripe(PUBLIC_KEY)
	const {Total, packageDetails}=props
	return (
		<>
		<Elements stripe={stripeTestPromise}>
		<PaymentForm Total={Total} packageDetails={packageDetails}/>
		</Elements>
		</>
	)
}