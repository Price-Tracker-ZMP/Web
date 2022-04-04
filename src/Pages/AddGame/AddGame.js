import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GameOnList from '../../components/GameOnList';
import Logout from '../../components/Logout';
import Sidebar from '../../components/Sidebar';
import { AddGameStyles } from './AddGame.style.js';
import dummy_data from './dummy-data-for-adding-games.json';

const AddGame = () => {
	let navigate = useNavigate();
	useEffect(() => {
		console.log(dummy_data);
		if (!localStorage.getItem('authToken')) {
			return navigate('/login');
		}
	}, []);

	return (
		<>
			<AddGameStyles>
				<Logout />
				<Sidebar />
				<div className='container'>
					<div className='search-form'>
						<h1>Search for games</h1>
						<form>
							<input type='text' placeholder='Search' />
						</form>
					</div>

					<GameOnList name='Metro Exodus' studio='4A Studio' price='12700' />
				</div>
			</AddGameStyles>
		</>
	);
};

export default AddGame;
