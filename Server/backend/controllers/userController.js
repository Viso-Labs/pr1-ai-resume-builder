const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)
const User = require("../models/userModel");

const upgradeUser = async( req,res )=>{
    // billingDetails:billingData,
    // amount: Total,
    // id:id,
    // paymentMethod:paymentMethod,
    // user:tokenDetails.user
    let { billingDetails,amount, id,user } = req.body 
    console.log('user', user)
    let expiredIn = 1209600;
    const currentDateObj = new Date();
    const futureDate = new Date(currentDateObj);
    const currentDate = currentDateObj.toDateString();
    let expiredDate = ""

    if(billingDetails.packageDetails.packageName === process.env.PACKAGE_1_NAME){
        expiredIn = 1209600;
        futureDate.setDate(currentDateObj.getDate() + 14);
        expiredDate = futureDate.toDateString();
    }else if(billingDetails.packageDetails.packageName === process.env.PACKAGE_2_NAME){
        expiredIn = 2592000;
        futureDate.setDate(currentDateObj.getDate() + 30);
        expiredDate = futureDate.toDateString();
    }

	if((amount*100).toString().length>5){
		amount=Math.ceil(amount)
	}
	try {
		const payment = await stripe.paymentIntents.create({
			amount:amount*100,
			currency: "AUD",
			description: "Paid for the premium package of My It University",
			payment_method: id,
			confirm: true
		})

        if(payment.status === "succeeded"){
            const updateUser = await User.updateOne(
                { _id: user.id },
                {
                  $set: { "role": "PREMIUM_USER", "roleInit":currentDate, "roleExpire":expiredDate, "resumeCount":"5", "coverLetterCount":"5" },
                },
                { expireAfterSeconds: expiredIn, upsert: true }
              );

            if(updateUser.acknowledged){
                res.status(200).json({
                    message: "Payment successful and user upgraded successfully",
                    success: true
                })
            }else{
                return res.status(500).json({ success: false, message: 'User upgrade failed'})
            }
        }else{
            return res.status(500).json({ success: false, message: 'Payment failed'})
        }
		


	} catch (error) {
		console.log("Error in payment",error)
        return res.status(500).json({ success: false, message: 'Payment failed'})
	}
}

module.exports = {
    upgradeUser,
}