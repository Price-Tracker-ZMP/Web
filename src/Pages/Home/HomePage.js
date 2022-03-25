import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HomePageElement } from './HomePage.style.js';
import Logout from '../../components/Logout.js';

const HomePage = () => {
	let navigate = useNavigate();
	useEffect(() => {
		if (!localStorage.getItem('authToken')) {
			return navigate('/login');
		}
	}, []);

	return (
		<>
			<HomePageElement>
				<Logout />
				<div className='main'>
					<p>HomePage</p>
				</div>
			</HomePageElement>
		</>
	);
};

export default HomePage;
