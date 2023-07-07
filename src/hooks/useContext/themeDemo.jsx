import React, { useContext } from 'react';
import { useTheme } from './contextProvider';

export default function ThemeDemo() {
	const { theme, setTheme } = useTheme();

	const themeStyle = {
		width: '200px',
		height: '200px',
		backgroundColor: theme ? 'blue' : 'black',
		color: 'white',
		marginTop: 15
	};

	return (
		<div>
			<button onClick={() => setTheme(!theme)}>Change Theme</button>
			<div style={themeStyle}>useContext Demo</div>
		</div>
	);
}
