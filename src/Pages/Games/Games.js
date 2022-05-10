import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logout from '../../components/Logout';
import Sidebar from '../../components/Sidebar';
import GameOnList from '../../components/GameOnList';
import { GamesStyle } from './Games.style';
import ChartConfig from './ChartConfig.js';
import Chart from 'chart.js/auto';

const Games = () => {
	const [gamesList, setGamesList] = useState([]);

	let navigate = useNavigate();
	useEffect(() => {
		if (!localStorage.getItem('authToken')) {
			return navigate('/login');
		}

		var urlDev = 'http://localhost:5001/user-info/user-games';
		var urlProduction = 'http://zmp-price-tracker.herokuapp.com/user-info/user-games';

		fetch(urlProduction, {
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

	async function generateGraph(id){
		let data = await GetHistory(id)
		let config = ChartConfig.getChartConfig(data);
		new Chart(document.getElementById('graph'+id),config)
	 }

	const deleteGame = (appid, name) => {
		var urlDev = 'http://localhost:5001/delete/game/:gameId';
		var urlProduction = '/:gameId';

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

	const GetHistory = async (appid) => {
		var urlDev = 'http://localhost:5001/delete/game/:gameId';
		var urlProduction = 'http://zmp-price-tracker.herokuapp.com/get/game-price-history/:gameId';

		return await fetch(urlProduction.replace(':gameId', appid), {
			method: 'GET',
			headers: {
				authentication: localStorage.getItem('authToken'),
			},
		}
		).then(result=>result.json()).then(result => {
			let dataset = {
			  dates: [],
			  prices: [],
			};

			for (let i = 0; i < result.content.dateFinal.length; i++) {
				let d = new Date(result.content.dateFinal[i]);
				dataset.dates.push(d.getDate()+'-'+(d.getMonth()+1)+'-'+ d.getFullYear());
				dataset.prices.push(result.content.priceFinal[i] / 100)
			}

			const data = {
				labels:  dataset.dates,
				datasets: [{
					data: dataset.prices,
					fill: false,
					borderColor: 'rgb(75, 192, 192)',
				}],
			};
			return data
		})
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
												<div id='graph-container'>
												<canvas id={'graph' + game.steam_appid} onLoad={generateGraph(game.steam_appid)}></canvas>
												</div>
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
