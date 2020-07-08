import React, { useState } from 'react';
import { ThemeProvider, Grid } from '@material-ui/core';

import lightTheme from '../UI/lightTheme';
import darkTheme from '../UI/darkTheme';
import Header from './Header';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Shop from './Shop';

export default function App() {
    const [darkMode, setDarkMode] = useState(false);
    let theme;
    if(darkMode) {
        theme = darkTheme;
    } else {
        theme = lightTheme;
    }

    const darkModeSwitch = () => {
        setDarkMode(currentMode => !currentMode);
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid container direction='column'>
                <BrowserRouter>
                    <Grid item>
                        <Header 
                            darkModeSwitch={darkModeSwitch}
                            darkMode={darkMode}
                        />
                    </Grid>
                    <Grid item container style={{marginTop: '58px'}}>
                        <Route exact path="/" component={LandingPage} />
                        <Route path="/shop" component={Shop} />
                    </Grid>
                </BrowserRouter>
            </Grid>
        </ThemeProvider>
    );
};