import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logout from '../../components/Logout';
import Sidebar from '../../components/Sidebar';
import { GamesStyle } from './Games.style';

const Games = () => {
	let navigate = useNavigate();
	useEffect(() => {
		if (!localStorage.getItem('authToken')) {
			return navigate('/login');
		}
	}, []);

	return (
		<>
			<GamesStyle>
				<Sidebar />
				<Logout />
				<div className='main'>
					<p>Games</p>
				</div>
			</GamesStyle>
		</>
	);
};

export default Games;
