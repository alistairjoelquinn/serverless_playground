import React from 'react';

export default function App() {
    return (
        <div style={styles.main}>
            <div>Al's online playground</div>
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
    }
}