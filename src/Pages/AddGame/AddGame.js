import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GameOnList from '../../components/GameOnList';
import Logout from '../../components/Logout';
import Sidebar from '../../components/Sidebar';
import { AddGameStyles } from './AddGame.style.js';
import dummy_data from './dummy-data-for-adding-games.json';

const AddGame = () => {
	const [gamesList, setGamesList] = useState([]);
	const [searchList, setSearchList] = useState([]);

	let navigate = useNavigate();
	useEffect(() => {
		if (!localStorage.getItem('authToken')) {
			return navigate('/login');
		}
		takeAllGames();
	}, []);

	const takeAllGames = async () => {
		const data = await fetch('http://localhost:5001/get-steam-games-list/', {
			headers: {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		}).then(res => res.json());
		setGamesList(data.content);
		console.log(data.content);
	};

	// const filterData = searchTerm => {};

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
					<div className='list'>
						{gamesList.slice(0, 1500).map((item, index) => {
							return (
								<GameOnList
									key={index}
									name={item.name}
									appid={item.appid}
								/>
							);
						})}
					</div>
				</div>
			</AddGameStyles>
		</>
	);
};

export default AddGame;
