import React, { useState } from 'react';

type Props = {
	bgColor: string;
};

export const Card: React.FC<Props> = ({ bgColor }) => {
	const [color, setColor] = useState('black');
	return (
		<div
			className='w-24 h-32'
			style={{ backgroundColor: color }}
			onClick={() => setColor(bgColor)}
		></div>
	);
};
