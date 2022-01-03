import React from 'react';
import Square from './Square';

export default function Board(props) {
	const renderSquare = i => (
		<Square value={props.squares[i]} onClick={() => props.onClick(i)} />
	);

	const boardStyle = {
		display: 'grid',
		backgroundColor: '#333',
		gridTemplateColumns: 'repeat(3, 1fr)',
		gridTemplateRows: 'repeat(3, 1fr)',
		width: '200px',
		height: '200px',
	};

	const flexContainer = {
		display: 'flex',
		height: '50vh',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		flexDirection: 'column',
	};

	return (
		<div>
			<div style={flexContainer}>
				<div style={boardStyle}>
					{renderSquare(0)}
					{renderSquare(1)}
					{renderSquare(2)}
					{renderSquare(3)}
					{renderSquare(4)}
					{renderSquare(5)}
					{renderSquare(6)}
					{renderSquare(7)}
					{renderSquare(8)}
				</div>
			</div>
		</div>
	);
}
