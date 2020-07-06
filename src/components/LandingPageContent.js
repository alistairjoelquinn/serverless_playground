import React from 'react';
import { Grid } from '@material-ui/core';
import LandingCard from './LandingCard';

const LandingPageContent = () => {
    return (
        <Grid container spacing={4}>
            <Grid item xs={12} sm={3}>
                <LandingCard />
            </Grid>
            <Grid item xs={12} sm={3}>
                <LandingCard />
            </Grid>
            <Grid item xs={12} sm={3}>
                <LandingCard />
            </Grid>
            <Grid item xs={12} sm={3}>
                <LandingCard />
            </Grid>
        </Grid>
    );
};

export default LandingPageContent;