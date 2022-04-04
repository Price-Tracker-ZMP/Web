import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logout from '../../components/Logout';
import Sidebar from '../../components/Sidebar';
import { InfoStyle } from './Info.style';

const Info = () => {
	let navigate = useNavigate();
	useEffect(() => {
		if (!localStorage.getItem('authToken')) {
			return navigate('/login');
		}
	}, []);

	return (
		<>
			<InfoStyle>
				<Logout />
				<Sidebar />
				<div className='main'>
					<p>Info</p>
				</div>
			</InfoStyle>
		</>
	);
};

export default Info;
