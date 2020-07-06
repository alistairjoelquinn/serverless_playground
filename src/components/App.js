import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { ThemeProvider, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

import Colors from '../../constants/Colors';
import theme from '../UI/theme';
import Header from './Header';

const useStyles = makeStyles({
    setupStyle: {
        textDecoration: 'underline',
        marginBottom: 30
    },
    button: {
        color: Colors.paleWhite
    }
});

export default function App() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <Grid container direction='column' style={styles.main}>
                <Grid item>
                    <Typography 
                        variant="span"
                        className={classes.setupStyle}
                    >
                        Welcome
                    </Typography>
                    <Header />
                </Grid>
                <Grid item container>
                    <Grid item sm={2} xs={0}/>
                    <Grid item sm={8} xs={12}>
                        This is text and an introduction to the things in text which are being introduced by the clicking of the...
                        <Button 
                            className={classes.button}
                            color="secondary"
                            variant="contained" 
                        >
                            Big button
                        </Button>
                    </Grid>
                    <Grid item sm={2} xs={0}/>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};

const styles = {
    main: {
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
        margin: 0,
        height: '100vh',
        width: '100vw',
        backgroundColor: Colors.middleBlue,
        color: Colors.paleWhite
    }
};