import React from 'react';
import styled from 'styled-components';
//home
import { IoHome, IoHomeSharp, IoHomeOutline } from 'react-icons/io5';
//gry
import { FaTh, FaThList, FaThLarge, FaRegListAlt } from 'react-icons';
//dodawanie
import { GrAdd, GrFormAdd } from 'react-icons/gr';

const SidebarElement = styled.div`
	border: 1px solid white;
	position: fixed;
	left: 0px;
	top: 0px;
	width: 15vw;
	height: 100vh;

	@media screen and (max-width: 1100px) {
		width: 160px;
	}

	.box-container {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		/* margin: 100px 0px; */
		border: 1px dashed white;
	}
	.box {
		width: 100%;
		padding: 20px 0;
		border: 1px solid yellow;
	}
`;

const Sidebar = () => {
	return (
		<>
			<SidebarElement>
				<div className='box-container'>
					<div className='box'>
						<p>Home</p>
						<IoHome />
						<IoHomeSharp />
						<IoHomeOutline />
						{/* ikona */}
					</div>
					<div className='box'>
						<p>Games</p>
						{/* ikona */}
					</div>
					<div className='box'>
						<p>Add Game</p>
						{/* ikona */}
					</div>
					<div className='box'>
						<p>Info</p>
						{/* // zart o tym ze to nasz aplikacja postala bez strowrzenia ani grama CO2*/}
						{/* ikona */}
					</div>
				</div>
			</SidebarElement>
		</>
	);
};

export default Sidebar;
