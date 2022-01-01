import React from 'react';
import Board from './Board';

export default function Game() {
	const mainStyle = {
		textAlign: 'center',
		backgroundColor: '#282c34',
		minHeight: '100vh',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-beetwen',
		fontSize: 'calc(10px + 2vmin)',
		color: 'white',
	};

	return (
		<div style={mainStyle}>
			<h1>TIC TAC TOE</h1>
			<div>
				<Board />
			</div>
			<div>
				<div>{/* status */}</div>
				<ol>{/* TODO */}</ol>
			</div>
		</div>
	);
}
