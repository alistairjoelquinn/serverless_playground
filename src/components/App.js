import React from 'react';
import { ThemeProvider, Grid } from '@material-ui/core';

import theme from '../UI/theme';
import Header from './Header';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Shop from './Shop';

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <Grid container direction='column'>
                <BrowserRouter>
                <Grid item>
                    <Header />
                </Grid>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={Shop} />
                </BrowserRouter>
            </Grid>
        </ThemeProvider>
    );
};