import React from 'react';
import { Grid, Button, ButtonGroup, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import Colors from '../../constants/Colors';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: Colors.grey,
        width: '100%',
        height: '100vh'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
    },
    button: {
        color: 'tomato'
    },
    buttonContainer: {
        marginTop: '40px'
    },
    gridFormat: {
        padding: 20
    }
}));

const Shop = props => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3} className={classes.gridFormat}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography>
                            I am so wide
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Typography>
                            We are not so much
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Typography>
                            We are not so much
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <Typography>...tiny</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <Typography>...tiny</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <Typography>...tiny</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <Typography>...tiny</Typography>
                    </Paper>
                </Grid>
                
            </Grid>
            <Grid container direction='column'>
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
        </div>
    );
};

export default Shop;