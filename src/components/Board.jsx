import React, { useState } from 'react';
import Square from './Square';

export default function Board() {
	const [state, setState] = useState({ squares: Array(9).fill(null), xIsNext: true });

	const handleClick = i => {
		const squares = state.squares.slice();
		if (calculateWinner(squares) || squares[i]) return;
		squares[i] = state.xIsNext ? 'X' : 'O';
		setState({ squares: squares, xIsNext: !state.xIsNext });
	};

	const calculateWinner = squares => {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
				return squares[a];
			}
		}
		return null;
	};

	let status = `Next player:  ${state.xIsNext ? 'X' : 'O'}`;
	if (calculateWinner(state.squares)) status = `Winner ${calculateWinner(state.squares)}`;

	const renderSquare = i => (
		<Square value={state.squares[i]} onClick={() => handleClick(i)} />
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
				<div className="status">{status}</div>
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
