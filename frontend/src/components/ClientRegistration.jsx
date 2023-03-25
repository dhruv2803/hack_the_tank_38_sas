import React from 'react'
import TextField from '@mui/material/TextField';
import { Button, FormControl } from '@mui/material';
const ClientRegistration = () => {
    return (
        <>
            <div>ClientRegistration</div>
            <FormControl>
                <TextField id="standard-basic" label="Standard" variant="standard" />
                <Button variant="contained">Submit</Button>
            </FormControl>
        </>
    )
}

export default ClientRegistration