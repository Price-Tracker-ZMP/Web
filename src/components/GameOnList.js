import React from 'react';
import styled from 'styled-components';

export const GameOnListStyle = styled.div`
	.game-container {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 50rem;
		height: 5rem;
		border: 1px solid white;
		border-radius: 50px;
		margin: 5px 0;
	}
	#content {
		/* border: 1px solid black; */
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		margin: 0 2rem;
		img {
			width: 6rem;
			margin: auto;
		}
		p {
			font-size: 1rem;
			margin: auto;
		}

		button {
			border: none;
			background: none;
			outline: none;
			color: white;
			font-size: 2.3rem;
			padding: 0 2rem;
		}
		button:hover {
			background: rgba(255, 255, 255, 0.3);
			cursor: pointer;
		}
	}
`;

const GameOnList = ({ appid, name }) => {
	return (
		<>
			<GameOnListStyle>
				<div className='game-container'>
					<div id='content'>
						<img
							src={
								'https://cdn.cloudflare.steamstatic.com/steam/apps/' +
								appid +
								'/header.jpg'
							}
							alt={name + 'photo'}
						/>
						<p>{name}</p>
						<p>{appid}</p>
						<button>+</button>
					</div>
					<canvas id={"graph"+appid}></canvas>
				</div>
			</GameOnListStyle>
		</>
	);
};

export default GameOnList;
