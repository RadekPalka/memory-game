import React, { useState } from 'react';
import { Card } from './Card';

export const GameBoard: React.FC = () => {
	const colors = [
		'yellow',
		'blue',
		'red',
		'pink',
		'grey',
		'green',
		'brown',
		'white',
		'yellow',
		'blue',
		'red',
		'pink',
		'grey',
		'green',
		'brown',
		'white',
	];

	for (let i = colors.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));

		[colors[i], colors[j]] = [colors[j], colors[i]];
	}

	const [cards, setCards] = useState(Array.from({ length: 16 }));
	return (
		<div className='grid grid-cols-custom-4 gap-4 justify-center'>
			{cards.map((card, index) => (
				<Card key={index} bgColor={colors[index]} />
			))}
		</div>
	);
};
