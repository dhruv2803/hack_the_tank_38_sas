import {FormControl,FormLabel,Radio ,RadioGroup } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const ClientRegistration = () => {
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
          <TextField fullWidth id="name" label="Full Name" variant="standard" />
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
                    type="submit"
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

export default ClientRegistration