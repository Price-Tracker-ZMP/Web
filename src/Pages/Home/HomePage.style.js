import styled from 'styled-components';

export const HomePageElement = styled.div`
	.main {
		height: 100px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 2rem;
		flex-direction: column;
		/* border: 1px solid white; */
	}

	.main a {
		color: white;
		font-size: 2rem;
		text-decoration: underline;

		&:hover {
			color: rgba(255, 0, 0, 0.6);
		}
	}
`;
