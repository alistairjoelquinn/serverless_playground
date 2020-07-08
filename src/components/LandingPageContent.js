import React from 'react';
import { Grid } from '@material-ui/core';
import LandingCard from './LandingCard';

const LandingPageContent = () => {
    return (
        <Grid container direction='column' spacing={4}>
            <Grid item xs={12} sm={8}>
                <LandingCard 
                    datePosted="5th July, 2020"
                    w1='al'
                    w2='is'
                    w3='tair'
                    w4='quinn'
                    wordType="noun"
                    definition='well meaning and lovely.'
                    example='"a benevolent smile"'
                    learnMoreLink="https://github.com/alistairjoelquinn"
                />
            </Grid>
            {/* <Grid item xs={12} sm={8}>
                <LandingCard 
                    datePosted="3th July, 2020"
                />
            </Grid>
            <Grid item xs={12} sm={8}>
                <LandingCard 
                    datePosted="20th June, 2020"
                />
            </Grid>
            <Grid item xs={12} sm={8}>
                <LandingCard 
                    datePosted="4th April, 2020"
                />
            </Grid> */}
        </Grid>
    );
};

export default LandingPageContent;