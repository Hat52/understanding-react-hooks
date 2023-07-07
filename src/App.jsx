import React from 'react';
import UseContextHook from './hooks/useContext';
import './App.css';
import { Box } from '@mui/system';
import { Card } from './components';
import { Grid } from '@mui/material';

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
	return (
		<Box style={{ padding: 80 }}>
			<Grid container spacing={2} justifyContent="center">
				{hooksCollection.map(({ title }) => (
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
