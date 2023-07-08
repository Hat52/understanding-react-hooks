import React from 'react';

import { Box, Link, Typography } from '@mui/material';

export default function ContentDisplay({ content }) {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				gap: 2
			}}>
			{Object.keys(content).map((key) => {
				const currentContent = content[key];
				if (key === 'title') {
					return (
						<Typography variant="h3" sx={{ fontFamily: 'blackItalic' }}>
							{currentContent}
						</Typography>
					);
				}
				if (key === 'description') {
					return (
						<Typography variant="p" sx={{ fontFamily: 'medium' }}>
							{currentContent}
						</Typography>
					);
				}
				if (key === 'content') {
					return currentContent.map(({ title, paragraphs, Component }) => {
						return (
							<Box
								sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
								<Typography variant="h5" sx={{ fontFamily: 'blackItalic' }}>
									{title}
								</Typography>
								{paragraphs.map((paragraph) => {
									return (
										<Typography
											variant="p"
											sx={{ fontSize: '16px', fontFamily: 'medium', mt: 2 }}>
											{paragraph}
										</Typography>
									);
								})}
								{Component ? (
									<Box
										sx={{
											display: 'flex',
											flexDirection: 'column',
											gap: 2,
											mt: 2
										}}>
										<Typography variant="h5" sx={{ fontFamily: 'blackItalic' }}>
											Example
										</Typography>
										<Box
											sx={{
												display: 'flex',
												justifyContent: 'center',
												alignItems: 'center'
											}}>
											<Component />
										</Box>
									</Box>
								) : null}
							</Box>
						);
					});
				}
				if (key === 'useFulMaterial') {
					return (
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								width: '100%',
								gap: 2,
								mt: 2
							}}>
							<Typography variant="h5" sx={{ fontFamily: 'blackItalic' }}>
								UseFul Material
							</Typography>
							{currentContent.map((link) => {
								return <Link href={link.href}>{link.title}</Link>;
							})}
						</Box>
					);
				}
			})}
		</Box>
	);
}
