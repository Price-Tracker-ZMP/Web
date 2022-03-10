import styled from 'styled-components';

export const LoginPageElement = styled.div`
	.login-page-container {
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.login-page-container .login-sign-in-container {
		height: 3rem;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
		padding-right: 1rem;
	}

	.login-page-container .login-sign-in-container p {
		color: #fff;
		text-decoration: none;
		text-transform: uppercase;
		font-size: 1.1rem;
		padding: 0 0.4rem;
	}

	#active {
		border-bottom: 1px solid #fff;
		padding: 0.2rem 0.4rem;
	}

	.login-page-container .login-sign-in-container p:hover {
		cursor: pointer;
	}

	.login-page-container .login-sign-in-container span {
		color: #fff;
		padding: 0 0.2rem;
	}

	.login-page-container .form-container {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.login-page-container .form-container .login-container {
		padding: 0;
		margin: 0;
	}

	.login-page-container .form-container form {
		width: 20rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.login-page-container .form-container form .form-item {
		width: 100%;
		display: block;
		margin: 1rem;
		color: #fff;
	}
	.login-page-container .form-container form .form-item label {
		font-size: 1.7rem;
	}
	.login-page-container .form-container form .form-item input {
		color: #fff;
		/* font-family: 'Courier New', sans-serif; */
		font-size: 1.3rem;
		width: 100%;
		padding: 0.5rem 1rem;
		background: none;
		text-transform: none;
		border-radius: 5px;
		border: 1px solid #fff;
		outline: none;
	}

	.login-page-container .form-container .button-container {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		padding: 10px 0;
	}

	.login-page-container .form-container .button-container button {
		background: none;
		font-size: 1.7rem;
		/* font-family: 'Courier New', Courier, monospace; */
		color: #fff;
		border: 1px solid #fff;
		border-radius: 10px;
		padding: 0.2rem 1rem;
	}
	.login-page-container .form-container .button-container button:hover {
		cursor: pointer;
		background-color: rgba(255, 255, 255, 0.2);
	}

	.login-page-container .social-media-container {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		padding: 2rem;
	}

	.login-page-container .social-media-container .social-media-tile {
		border: 1.5px solid #fff;
		font-size: 1.1rem;
		padding: 0.3rem 1rem;
		margin: 0 0.5rem;
		border-radius: 30px;
	}

	.login-page-container .social-media-container .social-media-tile a {
		text-decoration: none;
		text-transform: uppercase;
		font-weight: 500;
		color: #fff;
	}
`;
