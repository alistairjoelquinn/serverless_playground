import React from 'react';
import {  Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

import Colors from '../../constants/Colors';
import LandingPageContent from './LandingPageContent';

const useStyles = makeStyles({
    background: {
        backgroundColor: Colors.grey,
        height: '100%',
        paddingTop: 20,
        paddingBottom: 20
    }
});

const HomePage = props => {
    const classes = useStyles();

    return (
        <Grid item container className={classes.background}>
            <Grid item sm={2} xs={false}/>
            <Grid item sm={10} xs={12}>
                <LandingPageContent />
            </Grid>
            <Grid item sm={2} xs={false}/>
        </Grid>
    );
};

export default HomePage;