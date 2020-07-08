import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles, IconButton } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { NavLink } from 'react-router-dom';
import Colors from '../../constants/Colors';

const useStyles = makeStyles({
    headerLinkStyles: {
        flex: 1,
        textDecoration: 'none',
        color: Colors.reactBlue
    },
    iconStyles: {
        color: Colors.reactBlue
    },
    textStyles: {
        color: Colors.reactBlue,
        fontWeight: 'bold',
        fontSize: 18
    }
});

const Header = props => {
    const classes = useStyles();

    return (
        <AppBar position='fixed'>
            <Toolbar>
                <NavLink 
                    to='/' 
                    className={classes.headerLinkStyles}
                    activeStyle={{color: Colors.reactBlue}}
                >
                    <Typography className={classes.textStyles}> 
                        Alistair Quinn
                    </Typography>
                </NavLink>
                <a href="https://www.linkedin.com/in/alistair-quinn-5b8878199/" target="_blank">
                    <IconButton className={classes.iconStyles}>
                        <LinkedInIcon />
                    </IconButton>
                </a>
                <a href="https://github.com/alistairjoelquinn" target="_blank">
                    <IconButton className={classes.iconStyles}>
                        <GitHubIcon />
                    </IconButton>
                </a>
                <NavLink 
                    to='/shop'
                >
                    <IconButton className={classes.iconStyles}>
                        <ShoppingCartIcon />
                    </IconButton>
                </NavLink>
            </Toolbar>
        </AppBar>
    )
};

export default Header;