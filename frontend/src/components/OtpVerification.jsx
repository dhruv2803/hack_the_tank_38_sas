import React from 'react'

const OtpVerification = () => {
  return (
    <>
    <div>Please Verify OTP</div>
    <TextField id="standard-basic" label="Standard" variant="standard" />
    <Button variant="contained">Submit</Button>
    <p>OTP has been sent to your mobile number.</p>
    <p>You can request for OTP after some time.</p>
    </>
  )
}

export default OtpVerification