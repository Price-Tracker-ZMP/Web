import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logout from '../../components/Logout';
import Sidebar from '../../components/Sidebar';
import GameOnList from '../../components/GameOnList';
import { GamesStyle } from './Games.style';

const Games = () => {
	const [gamesList, setGamesList] = useState([]);

	let navigate = useNavigate();
	useEffect(() => {
		if (!localStorage.getItem('authToken')) {
			return navigate('/login');
		}
		// fetchUserGames();

		var urlDev = 'http://localhost:5001/user-info/user-games';
		var urlProduction = 'http://zmp-price-tracker.herokuapp.com/user-info/user-games';

		fetch(urlDev, {
			headers: {
				method: 'GET',
				authentication: localStorage.getItem('authToken'),
				'Content-Type': 'application/json',
			},
		})
			.then(res => res.json())
			.then(res => {
				setGamesList(res.content);
			});
	}, []);

	const deleteGame = (appid, name) => {
		var urlDev = 'http://localhost:5001/delete/game/:gameId';
		var urlProduction = 'http://zmp-price-tracker.herokuapp.com/delete/game/:gameId';

		fetch(urlDev.replace(':gameId', appid), {
			method: 'DELETE',
			headers: {
				authentication: localStorage.getItem('authToken'),
			},
		});
	};

	const setCommaIntoString = number => {
		var string = number.toString();
		return (
			string.substring(0, string.length - 2) +
			',' +
			string.substring(string.length - 2, string.length)
		);
	};

	return (
		<>
			<GamesStyle>
				<Sidebar />
				<Logout />
				<div className='main-container'>
					<div id='content-container'>
						<p id='title'>Games</p>
						<div id='games-list'>
							{gamesList.map(game => {
								return (
									<div className='game-container'>
										<div id='content'>
											<img
												src={
													'https://cdn.cloudflare.steamstatic.com/steam/apps/' +
													game.steam_appid +
													'/header.jpg'
												}
												alt={game.name + 'photo'}
											/>
											<p>{game.name}</p>
											<p>{game.steam_appid}</p>
											<p className='price'>
												{setCommaIntoString(game.priceFinal)}
											</p>
											<button
												onClick={() =>
													deleteGame(game.steam_appid)
												}
											>
												-
											</button>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</GamesStyle>
		</>
	);
};

export default Games;
