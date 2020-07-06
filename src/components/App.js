import React from 'react';
import { Button } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core';

import Colors from '../../constants/Colors';
import theme from '../UI/theme';

export default function App() {
    console.log('theme: ', theme);
    return (
        <ThemeProvider theme={theme}>
            <div style={styles.main}>
                <div style={styles.margin}>Welcome</div>
                <Button 
                    color="secondary"
                    variant="contained" 
                >
                    Big button
                </Button>
            </div>
        </ThemeProvider>
    );
};

const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        height: '100vh',
        width: '100vw',
        backgroundColor: Colors.middleBlue,
        color: Colors.paleWhite
    },
    margin: {
        margin: 20
    }
};