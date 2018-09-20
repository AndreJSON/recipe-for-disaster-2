import { createMuiTheme } from '@material-ui/core/styles';
import { teal, amber } from '@material-ui/core/colors';
export default createMuiTheme({
	palette: {
		primary: teal,
		secondary: amber
	},
	'@global': {
		body: {
			backgroundColor: 'green'
		}
	}
});