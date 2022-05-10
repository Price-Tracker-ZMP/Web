import styled from 'styled-components';

export const GamesStyle = styled.div`
	.main-container {
		/* border: 1px solid white; */

		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: 2rem;
	}

	#content-container {
		/* border: 1px dotted yellow; */

		display: flex;
		flex-direction: column;
		align-items: center;
		min-height: 20rem;
		max-height: 30rem;
	}
	#title {
		font-size: 3rem;
	}
	#games-list {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: start;

		overflow: hidden;
		overflow-y: scroll;

		::-webkit-scrollbar {
			width: 2px;
			background: transparent;
		}
		::-webkit-scrollbar-track {
			width: 2px;
			background-color: rgba(230, 230, 230, 0.1);
		}
		::-webkit-scrollbar-thumb {
			width: 3px;
			background-color: white;
		}
	}

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
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		margin: 0 2rem;
		img {
			width: 6rem;
			margin: auto;
		}
		.price {
			color: yellow;
		}
		p {
			font-size: 1rem;
			margin: auto;
		}
		button {
			width: 20px;
			height: 20px;
			border-radius: 50%;
			outline: none;
			background: none;
			color: white;
		}
		button:hover {
			cursor: pointer;
			background: rgba(255, 255, 255, 0.3);
		}
		
	}
	#graph-container{
		width: 200px;
		height: 70px;
		margin: auto;
		border: 5px;

		}
`;
