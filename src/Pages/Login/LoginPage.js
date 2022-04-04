import React, { useState, useEffect } from 'react';
import { LoginPageElement } from './LoginPage.style';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
	const [activeRegister, setActiveRegister] = useState(false);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [emailReg, setEmailReg] = useState('');
	const [passwordReg, setPasswordReg] = useState('');
	const [repeatPasswordReg, setRepeatPasswordReg] = useState('');

	const [info, setInfo] = useState('');
	const [showInfo, setShowInfo] = useState(false);

	const navigate = useNavigate();

	useEffect(() => {
		if (localStorage.getItem('authToken')) {
			navigate('/');
		}
	}, []);

	const registerActivation = () => {
		setActiveRegister(true);
	};

	const registerDeactivation = () => {
		setActiveRegister(false);
	};

	const handleRegister = async () => {
		if (emailReg.length == 0) {
			setShowInfo(true);
			setTimeout(() => {
				setInfo('');
				setShowInfo(false);
			}, 5000);
			return setInfo('Set email');
		}
		if (passwordReg == 0 || repeatPasswordReg == 0) {
			setShowInfo(true);
			setTimeout(() => {
				setInfo('');
				setShowInfo(false);
			}, 5000);
			return setInfo('Set password');
		}

		if (passwordReg !== repeatPasswordReg) {
			setInfo("Password doesn't match");
			setPasswordReg('');
			setRepeatPasswordReg('');
			setTimeout(() => {
				setInfo('');
				setShowInfo(false);
			}, 5000);
			return setShowInfo(true);
		}

		const registerUrlDev = 'http://localhost:5001/auth/register';
		const registerUrlProduction =
			'https://zmp-price-tracker.herokuapp.com/auth/register';

		const response = await fetch(registerUrlProduction, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: emailReg,
				password: passwordReg,
			}),
		});

		const data = await response.json();

		console.log(data.status);

		setShowInfo(true);
		setEmailReg('');
		setPasswordReg('');
		setRepeatPasswordReg('');

		if (data.status) {
			setInfo(data.message);
			setShowInfo(true);
			setTimeout(() => {
				setShowInfo(false);
				setInfo('');
			}, 5000);
		}
		if (!data.status) {
			setInfo(data.content);
			setShowInfo(true);
			setTimeout(() => {
				setShowInfo(false);
				setInfo('');
			}, 5000);
		}
	};

	const handleLogin = async () => {
		if (email.length == 0) {
			setShowInfo(true);
			setTimeout(() => {
				setInfo('');
				setShowInfo(false);
			}, 5000);
			return setInfo('Set email');
		}
		if (password.length == 0) {
			setShowInfo(true);
			setTimeout(() => {
				setInfo('');
				setShowInfo(false);
			}, 5000);
			return setInfo('Set password');
		}

		const loginUrlDev = 'http://localhost:5001/auth/login';
		const loginUrlProduction =
			'https://zmp-price-tracker.herokuapp.com/auth/login';

		const response = await fetch(loginUrlProduction, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: email,
				password: password,
			}),
		});

		const data = await response.json();
		console.log('data', data);

		if (data.status) {
			localStorage.setItem('authToken', data.content);
			navigate('/');
		}

		if (!data.status) {
			console.log('error:', data.content);
			setInfo(data.content);
			setShowInfo(true);
			setTimeout(() => {
				setInfo('');
				setShowInfo(false);
			}, 5000);
		}
	};

	return (
		<>
			<LoginPageElement showInfo={showInfo}>
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
										<input
											id='email-input'
											type='text'
											autoFocus
											value={emailReg}
											onChange={e => {
												setEmailReg(e.target.value);
											}}
										/>
									</div>
									<div className='form-item'>
										<label>Password</label>
										<input
											value={passwordReg}
											type='password'
											onChange={e => {
												setPasswordReg(e.target.value);
											}}
										/>
									</div>
									<div className='form-item'>
										<label>Repeat password</label>
										<input
											value={repeatPasswordReg}
											type='password'
											onChange={e => {
												setRepeatPasswordReg(e.target.value);
											}}
										/>
									</div>
								</form>
								{showInfo && (
									<div className='error'>
										<span className='error-message'>{info}</span>
									</div>
								)}
								<div className='button-container'>
									<button type='button' onClick={handleRegister}>
										Sign In
									</button>
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
										<input
											type='text'
											autoFocus
											onChange={e => setEmail(e.target.value)}
										/>
									</div>
									<div className='form-item'>
										<label>Password</label>
										<input
											type='password'
											onChange={e => setPassword(e.target.value)}
										/>
									</div>
								</form>
								{showInfo && (
									<div className='error'>
										<span className='error-message'>{info}</span>
									</div>
								)}
								<div className='button-container'>
									<button type='button' onClick={handleLogin}>
										Login
									</button>
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
