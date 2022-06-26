import React from 'react';
import Navigation from '../Navigation';
import { Grid, Typography } from '@mui/material';

function Header(props) {
    const {
        currentTab,
        setCurrentTab
    } = props;
    return (
        <header>
            <Grid container justifyContent={"space-between"} alignItems={"center"}>
                <Grid item xs={12} sm={4} lg={3}>
                    <Typography id="header-name" sx={{fontSize: "24px"}}>Patrick Quirk</Typography>
                </Grid>
                <Grid item xs={12} sm={8} md={6} lg={5}>
                <Navigation 
                    currentTab={currentTab}
                    setCurrentTab={setCurrentTab}
                ></Navigation>
                </Grid>
            </Grid> 
        </header>
    )
};

export default Header