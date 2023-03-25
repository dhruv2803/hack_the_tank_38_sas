import React from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useSelector, useDispatch } from 'react-redux'
import { setClientData } from '../store/clientStore'
import { useState } from 'react';
const FranchiseRegistration = () => {
    return (
        <>
            <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form"  noValidate sx={{ mt: 1 }}>
                    <TextField fullWidth id="ownername" label="Owner Name" variant="standard" />
                    <TextField fullWidth  id="email" label="Email ID" variant="standard" />
                    <TextField fullWidth  id="contactnum" label="Contact Number" variant="standard" />
                    <TextField fullWidth  id="city" label="City" variant="standard" />
                    <TextField fullWidth id="state" label="State" variant="standard" />
                    <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    >
                    Client Registration
                    </Button>
          </Box>
        </Box>
      </Container>
        </>
    )
}

export default FranchiseRegistration