import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import CakeIcon from '@material-ui/icons/Cake';

const useStyles = makeStyles({
    typographyStyles: {
        flex: 1
    }
});

const Header = props => {
    const classes = useStyles();

    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography className={classes.typographyStyles}> 
                    Alistair Quinn
                </Typography>
                <CakeIcon />
            </Toolbar>
        </AppBar>
    )
};

export default Header;