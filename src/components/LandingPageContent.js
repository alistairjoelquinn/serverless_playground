import React from 'react';
import { Grid } from '@material-ui/core';
import LandingCard from './LandingCard';

import cardData from '../../content/landingCardData'

const LandingPageContent = () => {
    return (
        <Grid container direction='column' spacing={4}>
            {cardData.map(data => <Grid key={data.example} item xs={12} sm={8}>
                    <LandingCard {...data} />
                </Grid>    
            )}
        </Grid>
    );
};

export default LandingPageContent;