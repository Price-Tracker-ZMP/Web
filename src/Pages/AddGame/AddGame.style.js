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

	.search-form form {
		border: 1px solid white;
		border-radius: 40px;
		padding: 0 1rem;
	}

	.search-form input {
		height: 45px;
		width: 700px;
		background: none;
		color: #fff;
		font-size: 1.1rem;
		border: none;
		/* border: 1px solid white;
		border-radius: 40px; */
		padding: 1.4rem 2.5rem;
		margin: 1rem;
		outline: none;
	}

	.search-form button {
		border: none;
		background: none;
		border: 1px solid white;
		border-radius: 20%;
		font-size: 1.1rem;
		color: white;
		padding: 5px 10px;

		&:hover {
			background-color: rgba(255, 255, 255, 0.16);
			cursor: pointer;
		}
	}
`;
