import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HomePageElement } from './HomePage.style.js';
import Logout from '../../components/Logout.js';
import Sidebar from '../../components/Sidebar.js';

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
				<Sidebar />
				<div className='main'>
					<p>HomePage</p>
					<a
						href='https://play.google.com/store/apps/details?id=com.merfeusz.pricetrackermobile'
						target='_blank'
					>
						Apka mobilna
					</a>
				</div>
			</HomePageElement>
		</>
	);
};

export default HomePage;
