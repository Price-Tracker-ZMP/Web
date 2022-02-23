import styled from 'styled-components';
import bg_image from '../../images/temporary-background-image.jpg';

export const WelcomePage = styled.div`
	.welcome-page-container {
		width: 100vw;
		height: 100vh;
		background: url(${bg_image}) no-repeat center;
		background-size: cover;
		//background-position: center;
		//background-repeat: no-repeat;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.welcome-page-container .login-sign-in-container {
		/* border: 1px solid #fff; */
		height: 3rem;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
		padding-right: 1rem;
	}

	.welcome-page-container .login-sign-in-container a {
		color: #fff;
		text-decoration: none;
		text-transform: uppercase;
		font-size: 1.1rem;
		padding: 0 0.4rem;
	}

	.welcome-page-container .login-sign-in-container a:hover {
		cursor: pointer;
	}

	.welcome-page-container .login-sign-in-container span {
		color: #fff;
		padding: 0 0.2rem;
	}

	.welcome-page-container .form-container {
		/* border: 1px solid #fff; */
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.welcome-page-container form {
		/* border: 1px solid yellow; */
		width: 20rem;
		height: 20rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.welcome-page-container form .form-item {
		width: 100%;
		display: block;
		margin: 1rem;
		color: #fff;
	}
	.welcome-page-container form .form-item label {
		font-size: 1.7rem;
	}

	.welcome-page-container form .form-item input {
		color: #fff;
		font-family: 'Courier New', sans-serif;
		font-size: 1.3rem;
		width: 100%;
		padding: 0.5rem 1rem;
		background: none;
		text-transform: none;
		border-radius: 5px;
		border: 1px solid #fff;
	}

	.welcome-page-container .social-media-container {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		padding: 2rem;
	}

	.welcome-page-container .social-media-container .social-media-tile {
		border: 1.5px solid #fff;
		font-size: 1.1rem;
		padding: 0.3rem 1rem;
		margin: 0 0.5rem;
		border-radius: 30px;
	}

	.welcome-page-container .social-media-container .social-media-tile a {
		/* border: 1px solid red; */
		text-decoration: none;
		text-transform: uppercase;
		font-weight: 500;
		color: #fff;
	}
`;
