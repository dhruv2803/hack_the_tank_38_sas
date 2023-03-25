import {FormLabel,Radio ,RadioGroup } from '@mui/material';
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

const ClientRegistration = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState("");

    const onSubmit = () => {
        console.log(name);
        dispatch(setClientData({name}));
    }
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
          <TextField fullWidth id="name" label="Full Name" variant="standard" onChange={(e)=>setName(e.target.value)} />
                    <TextField fullWidth  id="contactno" label="Contact Number" variant="standard" />
                    <TextField fullWidth  id="email" label="Email ID" variant="standard" />
                    <FormLabel id="permanentmaid">Full Time Maid</FormLabel>
                    <RadioGroup aria-labelledby="permanent-label" defaultValue="1" name="radio-buttons-group">
                        <FormControlLabel value="0" control={<Radio />} label="No" />
                        <FormControlLabel value="1" control={<Radio />} label="Yes" />
                    </RadioGroup>
                    <TextField fullWidth id="address" label="Address" variant="standard" />
                    <TextField fullWidth id="gender" label="Gender" variant="standard" />
                    <TextField fullWidth id="age" label="Age" variant="standard" />
                    <FormLabel id="maritialstatus">Maritial Status</FormLabel>
                    <RadioGroup aria-labelledby="permanent-label" defaultValue="1" name="radio-buttons-group">
                        <FormControlLabel value="0" control={<Radio />} label="Married" />
                        <FormControlLabel value="1" control={<Radio />} label="Single" />
                    </RadioGroup>
                    <TextField fullWidth id="gender" label="Gender" variant="standard" />
                    <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick = {()=>onSubmit()}
                    >
                    Client Registration
                    </Button>
          </Box>
        </Box>
      </Container>
        </>
    )
}

export default ClientRegistration