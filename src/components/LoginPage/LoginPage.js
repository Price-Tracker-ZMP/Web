import React, { useState } from 'react';
import { LoginPageElement } from './LoginPage.style';

const LoginPage = () => {
	const [activeRegister, setActiveRegister] = useState(false);

	const registerActivation = () => {
		setActiveRegister(true);
	};

	const registerDeactivation = () => {
		setActiveRegister(false);
	};

	return (
		<>
			<LoginPageElement>
				<div className='login-page-container'>
					<div className='login-sign-in-container'>
						<p
							id={activeRegister ? '' : 'active'}
							onClick={registerDeactivation}
						>
							Login
						</p>
						<span>/</span>
						<p id={activeRegister ? 'active' : ''} onClick={registerActivation}>
							Sign in
						</p>
					</div>

					{activeRegister ? (
						// sign up part
						<div className='form-container'>
							<div className='login-container'>
								<form>
									<div className='form-item'>
										<label>Email</label>
										<input id='email-input' type='text' autoFocus />
									</div>
									<div className='form-item'>
										<label>Password</label>
										<input id='password-input' type='password' />
									</div>
									<div className='form-item'>
										<label>Repeat password</label>
										<input id='repeat-password-input' type='password' />
									</div>
								</form>
								<div className='button-container'>
									<button type='button'>Login</button>
								</div>
							</div>
						</div>
					) : (
						//login part
						<div className='form-container'>
							<div className='login-container'>
								<form>
									<div className='form-item'>
										<label>Email</label>
										<input id='validationError' type='text' autoFocus />
									</div>
									<div className='form-item'>
										<label>Password</label>
										<input id='validationError' type='password' />
									</div>
								</form>
								<div className='button-container'>
									<button type='button'>Login</button>
								</div>
							</div>
						</div>
					)}

					<div className='social-media-container'>
						<div className='social-media-tile'>
							<a href='http://www.pwsz.legnica.edu.pl/' target='_blank'>
								PWSZ
							</a>
						</div>
						<div className='social-media-tile'>
							<a href='https://www.youtube.com/' target='_blank'>
								Youtube
							</a>
						</div>
					</div>
				</div>
			</LoginPageElement>
		</>
	);
};

export default LoginPage;
