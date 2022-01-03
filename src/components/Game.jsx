import React, { useState } from 'react';
import Board from './Board';

export default function Game() {
	/* CSS STYLES */

	const mainStyle = {
		minHeight: '100vh',
		display: 'flex',
		justifyContent: 'flex-start',
		flexDirection: 'column',
		textAlign: 'center',
		fontSize: 'calc(10px + 2vmin)',
		backgroundColor: '#282c34',
		color: '#fff',
	};

	const gameStyle = {
		minHeight: '100%',
		display: 'flex',
		justifyContent: 'space-evenly',
		alignItems: 'center',
	};

	const btnStyle = {
		backgroundColor: 'transparent',
		border: '1px solid #ddd',
		color: '#fff',
		padding: '0.6em',
		borderRadius: '5px',
	};

	const [state, setState] = useState({
		history: [{ square: Array(9).fill(null) }],
		stepNumber: 0,
		xIsNext: true,
	});

	// Se realiza la destructuracion para obtener el objeto history el cual es un array
	const history = state.history;
	// A traves del objeto history, se extra la última posición del arregle, la cual siempre va a corresponder con la posisción actual
	const current = history[state.stepNumber]; // Ej -> current = square: [X, O, null, ... ,null]

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

	const handleClick = i => {
		const history = state.history.slice(0, state.stepNumber + 1);
		const current = history[history.length - 1];
		// Se crea una copia del arreglo square de la actual posicion
		const squares = current.square.slice(); // Ej -> square = [X, O, null, ... ,null]
		if (calculateWinner(squares) || squares[i]) return; // Cortar funcionamiento si existe un ganador
		// Se asigna X o O, según xIsNext, a la posicion de squares pasada por parametro
		squares[i] = state.xIsNext ? 'X' : 'O';
		setState({
			history: history.concat([{ square: squares }]), // A history se le añade el contenido de squares
			stepNumber: history.length,
			xIsNext: !state.xIsNext,
		});
	};

	const jumpTo = step => {
		setState({
			history: state.history,
			stepNumber: step,
			xIsNext: step % 2 === 0,
		});
	};

	// Decir ganador
	const winner = calculateWinner(current.square);
	let status = `Next player:  ${state.xIsNext ? 'X' : 'O'}`;
	if (winner) status = `Winner ${winner}`;

	const moves = history.map((step, move) => {
		const desc = move ? `Go to  move #${move}` : `Go to game start`;
		return (
			<li key={move}>
				<button style={btnStyle} onClick={() => jumpTo(move)}>
					{desc}
				</button>
			</li>
		);
	});

	return (
		<div style={mainStyle}>
			<h1>TIC TAC TOE</h1>
			<div style={gameStyle}>
				<div>
					<div>{status}</div>
				</div>
				<div>
					<Board squares={current.square} onClick={i => handleClick(i)} />
				</div>
				<div>
					<ol style={{ listStyle: 'none' }}>{moves}</ol>
				</div>
			</div>
		</div>
	);
}
