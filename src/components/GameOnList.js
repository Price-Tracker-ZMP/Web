import React from 'react';
import styled from 'styled-components';

export const GameOnListStyle = styled.div`
	.game-container {
		border: 1px solid yellow;
	}
`;

const GameOnList = ({ name, studio, price }) => {
	return (
		<>
			<div className='game-container'>
				{/* <img src={img_src} alt={name + ' made by ' + studio} /> */}
				<p>{name}</p>
				<p>{studio}</p>
				<p>{price}</p>
			</div>
			<p>Hello World</p>
		</>
	);
};

export default GameOnList;
