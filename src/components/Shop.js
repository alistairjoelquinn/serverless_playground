import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Colors from '../../constants/Colors';

const useStyles = makeStyles({
    button: {
        color: 'tomato'
    },
    bannerText: {
        width: '100%',
        marginTop: 50,
        color: Colors.paleWhite,
        marginBottom: 50
    },
    background: {
        backgroundColor: Colors.grey,
        height: '100vh',
        paddingTop: 20,
        paddingBottom: 20
    }
});

const Shop = props => {
    const classes = useStyles();

    return (
        <Grid container direction='column' className={classes.background}>
            <Grid item container>
                <Grid item sm={2}/>
                <Grid item sm={8}>
                    <Typography variant='h4' color='white' className={classes.bannerText}>This is the place to buy things. Click on the button.</Typography>
                </Grid>
                <Grid item sm={2}/>
            </Grid>
            <Grid item container>
                <Grid item sm={5}/>
                <Grid item sm={2}>
                    <Button 
                        variant='contained' 
                        className={classes.button}
                        href='https://www.youtube.com/watch?v=SRcnnId15BA'
                        target='_blank'
                    >
                        Buy Things
                    </Button>
                </Grid>
                <Grid item sm={5}/>
            </Grid>
        </Grid>
    );
};

export default Shop;