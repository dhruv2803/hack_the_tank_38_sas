import { AppBar, Box, Button, Tab, Tabs, Toolbar } from '@mui/material'
import React from 'react'
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const history = useNavigate();

    return (
        <div className='navbar'>

            <div className='navbar_header'>
                <div className='icon'>
                    <img class="for_default" src="https://fattoslimshikhaaggarwalsharma.com/wp-content/uploads/2022/01/New-Project.png" width="150" height="100" alt="Fat to Slim" />
                </div>
                <div className='contact_details'>
                    <span>+91 886 0129015</span>
                    <span>
                        <a href="mailto:info@fattoslimshikhaaggarwalsharma.com">
                            info@fattoslimshikhaaggarwalsharma.com
                        </a>
                    </span>
                </div>
            </div>
            <div className='navbar-options'>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar>
                            <Button onClick={()=>history("/register/franchise")} color="inherit">Apply for Franchise</Button>
                            <Button color="inherit">Login</Button>
                        </Toolbar>
                    </AppBar>
                </Box>
            </div>
        </div>
    )
}

export default NavBar