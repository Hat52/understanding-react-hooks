import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function HookCard({ title }) {
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
		// Generate random index
		const randomIndex = Math.floor(Math.random() * backgroundColors.length);

		// Retrieve random color
		return backgroundColors[randomIndex];
	};

	return (
		<Card
			sx={{
				minHeight: 100,
				backgroundColor: getBackgroundColor(),
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center'
			}}>
			<CardContent>
				<Typography gutterBottom variant="h5" style={{ color: 'black', fontWeight: 'bold' }}>
					{title}
				</Typography>
			</CardContent>
		</Card>
	);
}
