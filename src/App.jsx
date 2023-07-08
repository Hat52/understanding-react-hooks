import React, { useState } from 'react';
import UseContextHook from './hooks/useContext';
import './App.css';
import { Box } from '@mui/system';
import { Card } from './components';
import { Button, Grid } from '@mui/material';

const hooksCollection = [
	{ title: 'useState', component: <>In Progress</> },
	{ title: 'useEffect', component: <>In Progress</> },
	{ title: 'useContext', component: <UseContextHook /> },
	{ title: 'useRef', component: <>In Progress</> },
	{ title: 'useMemo', component: <>In Progress</> },
	{ title: 'useCallback', component: <>In Progress</> },
	{ title: 'useReducer', component: <>In Progress</> },
	{ title: 'useTransition', component: <>In Progress</> },
	{ title: 'useDeferredValue', component: <>In Progress</> },
	{ title: 'useLayoutEffect', component: <>In Progress</> },
	{ title: 'useDebugValue', component: <>In Progress</> },
	{ title: 'useImperativeHandle', component: <>In Progress</> },
	{ title: 'useID', component: <>In Progress</> },
	{ title: 'Custom Hooks', component: <>In Progress</> }
];

function App() {
	const [selectedHook, setSelectedHook] = useState(2);
	return (
		<Box style={{ padding: 80, height: '100%' }}>
			{selectedHook === null ? (
				<Grid container spacing={2} justifyContent="center">
					{hooksCollection.map(({ title }, index) => (
						<Grid item xs={12} md={3}>
							<Card title={title} handleClick={() => setSelectedHook(index)} />
						</Grid>
					))}
				</Grid>
			) : (
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: 5,
						justifyContent: 'start',
						alignItems: 'start',
						width: '100%'
					}}>
					<Button onClick={() => setSelectedHook(null)}>Back</Button>
					<Box sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
						<Box
							sx={{
								minHeight: '40vh',
								width: '80%',
								borderRadius: '10px',
								boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
							}}>
							<div style={{ padding: 20 }}>{hooksCollection[selectedHook].component}</div>
						</Box>
					</Box>
				</Box>
			)}
		</Box>
	);
}

export default App;
