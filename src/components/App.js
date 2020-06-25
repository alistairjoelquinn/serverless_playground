import React from 'react';
import { Button } from '@material-ui/core';

export default function App() {
    return (
        <div style={styles.main}>
            <div style={styles.margin}>Al's online playground</div>
            <Button variant="contained">
                Big button
            </Button>
        </div>
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
        backgroundColor: 'dimgrey',
        color: 'antiquewhite'
    },
    margin: {
        margin: 20
    }
};