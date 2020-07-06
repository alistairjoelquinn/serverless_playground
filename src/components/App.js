import React from 'react';
import { ThemeProvider, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

import Colors from '../../constants/Colors';
import theme from '../UI/theme';
import Header from './Header';
import LandingPageContent from './LandingPageContent';

const useStyles = makeStyles({
    setupStyle: {
        textDecoration: 'underline',
        marginBottom: 30
    },
    background: {
        backgroundColor: Colors.grey,
        height: '100%',
        paddingTop: 20,
        paddingBottom: 20
    }
});

export default function App() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <Grid container direction='column'>
                <Grid item>
                    <Header />
                </Grid>
                <Grid item container className={classes.background}>
                    <Grid item sm={2} xs={false}/>
                    <Grid item sm={10} xs={12}>
                        <LandingPageContent />
                    </Grid>
                    <Grid item sm={2} xs={false}/>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};