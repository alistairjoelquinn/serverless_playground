import React from 'react';
import { Grid } from '@material-ui/core';
import LandingCard from './LandingCard';

import cardData from '../../content/landingCardData'

const LandingPageContent = () => {
    return (
        <Grid container direction='column' spacing={4}>
            <Grid item xs={12} sm={8}>
                {cardData.map(data => <LandingCard {...data} />)}
            </Grid>
        </Grid>
    );
};

export default LandingPageContent;