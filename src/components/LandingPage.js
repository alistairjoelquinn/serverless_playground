import React from 'react';
import {  Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

import Colors from '../../constants/Colors';
import LandingPageContent from './LandingPageContent';

const useStyles = makeStyles({
    background: {
        backgroundColor: Colors.grey,
        height: '100%',
        width: '100vw',
        paddingTop: 40,
        paddingBottom: 20
    }
});

const HomePage = props => {
    const classes = useStyles();

    return (
        <Grid container className={classes.background}>
            <Grid item sm={2}  xs={false}/>
            <Grid item sm={8}  xs={12}>
                <LandingPageContent />
            </Grid>
            <Grid item sm={2}  xs={false}/>
        </Grid>
    );
};

export default HomePage;