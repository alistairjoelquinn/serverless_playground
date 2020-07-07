import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    button: {
        color: 'tomato'
    },
    shopContainer: {
        marginTop: 50
    }
});

const Shop = props => {
    const classes = useStyles();

    return (
        <Grid container direction='column'>
            <Grid item container className={classes.shopContainer}>
                <Grid item sm={5}/>
                <Grid item sm={2}>
                    <Button variant='contained' className={classes.button}>Buy Things</Button>
                </Grid>
                <Grid item sm={5}/>
            </Grid>
        </Grid>
    );
};

export default Shop;