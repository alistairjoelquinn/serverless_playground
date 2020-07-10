import React, { useState } from 'react';
import { ThemeProvider, Grid } from '@material-ui/core';

import lightTheme from '../UI/lightTheme';
import darkTheme from '../UI/darkTheme';
import Header from './Header';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Shop from './Shop';
import Login from './Login';

export default function App() {
    const [darkMode, setDarkMode] = useState(false);
    const darkModeSwitch = _=> setDarkMode(currentMode => !currentMode);
    
    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <Grid container direction='column'>
                <BrowserRouter>
                    <Grid item>
                        <Header 
                            darkModeSwitch={darkModeSwitch}
                            darkMode={darkMode}
                        />
                    </Grid>
                    <Grid item container style={{marginTop: '50px'}}>
                        <Route exact path="/" component={LandingPage} />
                        <Route exact path="/shop" component={Shop} />
                        <Route exact path="/login" component={Login} />
                    </Grid>
                </BrowserRouter>
            </Grid>
        </ThemeProvider>
    );
};