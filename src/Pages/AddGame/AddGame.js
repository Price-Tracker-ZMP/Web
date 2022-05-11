import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GameOnList from '../../components/GameOnList';
import Logout from '../../components/Logout';
import Sidebar from '../../components/Sidebar';
import { AddGameStyles } from './AddGame.style.js';
import dummy_data from './dummy-data-for-adding-games.json';

const AddGame = () => {
	const [gameLink, setGameLink] = useState('');

	let navigate = useNavigate();
	useEffect(() => {
		if (!localStorage.getItem('authToken')) {
			return navigate('/login');
		}
		// takeAllGames();
	}, []);

	// const takeAllGames = async () => {
	// 	const data = await fetch('http://localhost:5001/get-steam-games-list/', {
	// 		headers: {
	// 			method: 'GET',
	// 			headers: {
	// 				'Content-Type': 'application/json',
	// 			},
	// 		},
	// 	}).then(res => res.json());
	// 	setGamesList(data.content);
	// 	console.log(data.content);
	// };

	const addGameByLink = async () => {
		let urlDev = 'http://localhost:5001/add-game/by-link';
		let urlProduction = 'https://zmp-price-tracker.herokuapp.com/add-game/by-link';
		await fetch(urlProduction, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
				authentication: localStorage.getItem('authToken'),
			},
			body: JSON.stringify({
				link: gameLink,
			}),
		});
		console.log('gameLink', gameLink);
		// await fetch(loginUrlProduction, {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 	},
		// 	body: JSON.stringify({
		// 		email: email,
		// 		password: password,
		// 	}),
		// });
	};

	return (
		<>
			<AddGameStyles>
				<Logout />
				<Sidebar />
				<div className='container'>
					<div className='search-form'>
						<h1>Add game</h1>
						<form>
							<input
								autoFocus
								type='text'
								placeholder='Put link'
								value={gameLink}
								onChange={e => {
									setGameLink(e.target.value);
								}}
							/>
							<button type='button' onClick={addGameByLink}>
								Add
							</button>
						</form>
					</div>
				</div>
			</AddGameStyles>
		</>
	);
};

export default AddGame;
