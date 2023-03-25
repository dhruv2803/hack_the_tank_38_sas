import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const OtpVerification = () => {
  return (
    <>
    <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
    <h2>Please Verify OTP</h2>
    <TextField id="OTP" label="OTP." variant="standard" />
    <Button sx={{ mt: 2, mb: 2 }} variant="contained">Submit</Button>
    <p>OTP has been sent to your mobile number.</p>
    <p>You can request for OTP after some time.</p>
    </Box>
    </>
  )
}

export default OtpVerification