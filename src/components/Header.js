import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles, IconButton } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import GitHubIcon from '@material-ui/icons/GitHub';
import { NavLink } from 'react-router-dom';
import Colors from '../../constants/Colors';

const useStyles = makeStyles({
    typographyStyles: {
        flex: 1,
        textDecoration: 'none',
        color: 'primary'
    }
});

const Header = props => {
    const classes = useStyles();

    return (
        <AppBar position='static'>
            <Toolbar>
                <NavLink 
                    to='/' 
                    className={classes.typographyStyles}
                    activeStyle={{color: Colors.reactBlue}}
                >
                    <Typography> 
                        Alistair Quinn
                    </Typography>
                </NavLink>
                <a href="https://github.com/alistairjoelquinn" target="_blank">
                    <IconButton>
                        <GitHubIcon />
                    </IconButton>
                </a>
                <NavLink 
                    to='/shop'
                >
                    <IconButton>
                        <ShoppingCartIcon />
                    </IconButton>
                </NavLink>
            </Toolbar>
        </AppBar>
    )
};

export default Header;