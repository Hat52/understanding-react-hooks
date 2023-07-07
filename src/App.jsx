import React, { useState } from 'react';
import UseContextHook from './hooks/useContext';
import './App.css';
import { Box } from '@mui/system';
import { Card } from './components';
import { Button, Grid } from '@mui/material';

const hooksCollection = [
	{ title: 'useState', component: <>Use State</> },
	{ title: 'useEffect', component: <>Use Effect</> },
	{ title: 'useContext', component: <UseContextHook /> },
	{ title: 'useRef', component: <>Use Ref</> },
	{ title: 'useMemo', component: <>Use Memo</> },
	{ title: 'useCallback', component: <>Use Callback</> },
	{ title: 'useReducer', component: <>Use Reducer</> },
	{ title: 'useTransition', component: <>Use Transition</> },
	{ title: 'useDeferredValue', component: <>Use DeferredValue</> },
	{ title: 'useLayoutEffect', component: <>Use LayoutEffect</> },
	{ title: 'useDebugValue', component: <>Use Debug Value</> },
	{ title: 'useImperativeHandle', component: <>Use ImperativeHandle</> },
	{ title: 'useID', component: <>Use id</> },
	{ title: 'Custom Hooks', component: <>Custom Hooks</> }
];

function App() {
	const [selectedHook, setSelectedHook] = useState(null);
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
					<Box
						sx={{
							backgroundColor: '#E3F4F4',
							minHeight: '40vh',
							width: '100%',
							borderRadius: '10px'
						}}>
						<div style={{ padding: 20 }}>{hooksCollection[selectedHook].component}</div>
					</Box>
				</Box>
			)}
		</Box>
	);
}

export default App;
