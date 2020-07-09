import React from 'react';
import { Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    screen: {
        height: '100vh',
        width: '100vw'
    }
});

const Login = props => {
    const classes = useStyles();

    return (
        <Paper className={classes.screen} square>
            <Typography>Login</Typography>
        </Paper>
    );
};

export default Login;