import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const LogoutStyle = styled.div`
	padding: 10px 20px;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	font-size: 1.2rem;
	height: 40px;
	border-bottom: 1px solid white;

	p {
		padding: 0.2rem 0.4rem;
	}

	p:hover {
		border-bottom: 1px solid #fff;
		padding: 0.2rem 0.4rem;
		cursor: pointer;
	}
`;

const Logout = () => {
	let navigate = useNavigate();
	const handleLogout = () => {
		localStorage.removeItem('authToken');
		navigate('/login');
	};
	return (
		<>
			<LogoutStyle>
				<p onClick={handleLogout}>Logout</p>
			</LogoutStyle>
		</>
	);
};

export default Logout;
