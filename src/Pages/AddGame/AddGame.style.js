import styled from 'styled-components';

export const AddGameStyles = styled.div`
	.container {
		/* border: 1px solid white; */
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 10rem;
	}

	.search-form {
		/* border: 1px solid white; */
		margin: 1rem 0;
	}
	.search-form h1 {
		text-align: center;
		font-size: 2.4rem;
	}
	.search-form input {
		height: 45px;
		width: 700px;
		background: none;
		color: #fff;
		font-size: 1.3rem;
		border: 1px solid white;
		border-radius: 40px;
		padding: 1.4rem 2.5rem;
		margin: 1rem;
		outline: none;
	}
	.container .list {
		border: 1px solid white;
		max-height: 25rem;
		overflow: hidden;
		overflow-y: scroll;
		padding: 0 0.5rem;

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
			/* background: #888; */
		}

		::-webkit-scrollbar-thumb:hover {
			/* background: #555; */
		}
	}
`;
