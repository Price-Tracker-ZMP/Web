import React from 'react';
import { WelcomePage } from './Welcome.style';

const Welcome = () => {
	return (
		<>
			<WelcomePage>
				<div className='welcome-page-container'>
					<div className='login-sign-in-container'>
						<a href='/'>Login</a>
						<span>/</span>
						<a href='/'>Sign in</a>
					</div>
					<div className='form-container'>
						<form>
							<div className='form-item'>
								<label>Username</label>
								<input type='text' />
							</div>
							<div className='form-item'>
								<label>Password</label>
								<input type='password' />
							</div>
						</form>
					</div>
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
			</WelcomePage>
		</>
	);
};

export default Welcome;
