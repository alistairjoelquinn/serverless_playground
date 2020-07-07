import React from 'react';
import { ThemeProvider, Grid } from '@material-ui/core';

import theme from '../UI/theme';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <Grid container direction='column'>
                <Grid item>
                    <Header />
                </Grid>
                <BrowserRouter>
                    <HomePage />
                </BrowserRouter>
            </Grid>
        </ThemeProvider>
    );
};