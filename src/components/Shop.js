import React from 'react';
import { Grid, Button, ButtonGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import Colors from '../../constants/Colors';

const useStyles = makeStyles({
    button: {
        color: 'tomato'
    },
    background: {
        backgroundColor: Colors.grey,
        width: '100%',
        height: '100vh'
    },
    buttonContainer: {
        marginTop: '40px'
    }
});

const Shop = props => {
    const classes = useStyles();

    return (
        <Grid container direction='column' className={classes.background}>
            <Grid item container className={classes.buttonContainer}>
                <Grid item sm={4}/>
                <Grid item container sm={4} justify='center'>
                    <Button 
                        variant='contained' 
                        className={classes.button}
                        endIcon={<ShoppingCartIcon />}
                        href='https://www.youtube.com/watch?v=SRcnnId15BA'
                        target='_blank'
                    >
                        Buy Things
                    </Button>
                </Grid>
                <Grid item sm={4}/>
            </Grid>
            <Grid item container className={classes.buttonContainer}>
                <Grid item sm={2}/>
                <Grid item container sm={8} justify='center'>
                    <ButtonGroup variant='contained'>
                        <Button size="large" className={classes.button}>One</Button>
                        <Button size="large" className={classes.button}>Two</Button>
                        <Button size="large" className={classes.button}>Three</Button>
                    </ButtonGroup>
                </Grid>
                <Grid item sm={2}/>
            </Grid>
        </Grid>
    );
};

export default Shop;