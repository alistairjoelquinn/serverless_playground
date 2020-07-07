import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link, BrowserRouter } from 'react-router-dom';

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
                <Link to='/' className={classes.typographyStyles}>
                    <Typography> 
                        Alistair Quinn
                    </Typography>
                </Link>
                <Link to='/cake'>
                    <ShoppingCartIcon />
                </Link>
            </Toolbar>
        </AppBar>
    )
};

export default Header;