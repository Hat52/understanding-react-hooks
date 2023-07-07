import React from 'react';
import UseContextHook from './hooks/useContext';
import './App.css';
import { Box } from '@mui/system';
import { Card } from './components';
import { Grid } from '@mui/material';

const hooksCollection = [
	'useState',
	'useEffect',
	'useContext',
	'useRef',
	'useMemo',
	'useCallback',
	'useReducer',
	'useTransition',
	'useDeferredValue',
	'useLayoutEffect',
	'useDebugValue',
	'useImperativeHandle',
	'useID',
	'Custom Hooks'
];

function App() {
	return (
		<Box style={{ padding: 80 }}>
			<Grid container spacing={2} justifyContent="center">
				{hooksCollection.map((title) => (
					<Grid item xs={12} md={3}>
						<Card title={title} />
					</Grid>
				))}

				{/* <UseContextHook /> */}
			</Grid>
		</Box>
	);
}

export default App;
