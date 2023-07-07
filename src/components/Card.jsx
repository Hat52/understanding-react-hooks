import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function HookCard({ title, handleClick }) {
	const getBackgroundColor = () => {
		const backgroundColors = [
			'#98EECC',
			'#FFD966',
			'#78C1F3',
			'#9BE8D8',
			'#E2F6CA',
			'#F8FDCF',
			'#F4B183',
			'#DFA67B'
		];
		const randomIndex = Math.floor(Math.random() * backgroundColors.length);
		return backgroundColors[randomIndex];
	};

	return (
		<Card
			onClick={handleClick}
			sx={{
				minHeight: '100px',
				backgroundColor: getBackgroundColor(),
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				borderRadius: '10px',
				cursor: 'pointer',
				'&:hover': {
					transform: 'scale(1.02)'
				}
			}}>
			<CardContent>
				<Typography gutterBottom variant="h5" style={{ color: 'black', fontWeight: 'bold' }}>
					{title}
				</Typography>
			</CardContent>
		</Card>
	);
}
