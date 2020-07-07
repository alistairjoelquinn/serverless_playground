import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

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
                <ShoppingCartIcon />
            </Toolbar>
        </AppBar>
    )
};

export default Header;