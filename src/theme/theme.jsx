import { createTheme } from '@mui/material';
import { responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
	palette: {
		type: 'light',
		primary: {
			main: '#A51455',
		},
		secondary: {
			main: '#A51455',
		},
		tertiary: {
			main: '#A51455',
		},
		text: {
			primary: '#A51455',
			secondary: '#A51455',
			tertiary: '#A51455',
		},
		background: {
			default: '#A51455',
		},
	},
});

theme = responsiveFontSizes(theme);

export { theme };
