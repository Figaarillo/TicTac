import React from 'react';

export default function Square(props) {
	const styleBtn = {
		fontSize: '1.5rem',
		border: '2px solid #666',
		backgroundColor: 'transparent',
		color: '#ddd',
	};

	return (
		<button style={styleBtn} onClick={props.onClick}>
			{props.value}
		</button>
	);
}
