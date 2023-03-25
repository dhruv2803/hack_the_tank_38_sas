import React from 'react'
import TextField from '@mui/material/TextField';
import { FormControl } from '@mui/material';
import { Button } from '@mui/material';
const FranchiseRegistration = () => {
    return (
        <>
            <div>FranchiseRegistration</div>
            <FormControl>
                <TextField id="standard-basic" label="Standard" variant="standard" />
                <Button variant="contained">Submit</Button>
            </FormControl>
        </>
    )
}

export default FranchiseRegistration