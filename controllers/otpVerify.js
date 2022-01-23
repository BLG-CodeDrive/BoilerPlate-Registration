const client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN)

// login : "Send verification code through /login . It contains two params i.e. phonenumber and channel(sms/call)"
//     - phone number
//     - channel (sms/call)

// verify : "Verify the recieved code through /verify . It contains two params i.e. phonenumber and code"
//     - phone number
//     - code

const otpVerify = {
    //otp sent
    otpSent: async (req,res) => {
      try{
        client
        .verify
        .services(process.env.SERVICE_ID)
        .verifications
        .create({
            to      : `+${req.query.phonenumber}`,
            channel : req.query.channel
        })
        .then(data => {
            res.status(200).send({message : " Verification OTP sent!", data})
        })
      }catch(err){
          return res.status(500).json({msg: err.message})
      }
    },

    verifyOtp : async (req,res) => {
        try{
            client
            .verify
            .services(process.env.SERVICE_ID)
            .verificationChecks
            .create({
                to: `+${req.query.phonenumber}`,
                code: req.query.code
            })
            .then(data => {
                    res.status(200).send({message: "User is Verified!!", data })
            })
        }catch(err){
            return res.status(500).json({msg : err.message})
        }
    }
}
module.exports = otpVerify