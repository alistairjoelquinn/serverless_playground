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
            main: Colors.lightGreen
        }
    },
    status: {
        danger: 'tomato'
    }
});

export default theme;