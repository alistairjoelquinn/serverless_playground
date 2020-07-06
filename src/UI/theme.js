import { createMuiTheme } from '@material-ui/core';
import Colors from '../../constants/Colors';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: Colors.lightBlue,
            main: Colors.middleBlue,
            dark: Colors.darkBlue,
            contrast: Colors.paleWhite
        },
        secondary: {
            light: Colors.palePink,
            main: Colors.middlePink,
            dark: Colors.darkPink,
            contrast: Colors.lightGreen
        },

    },
    status: {
        danger: 'tomato'
    }
});

export default theme;