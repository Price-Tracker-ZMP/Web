import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
//home
import {
	IoHome,
	IoHomeSharp,
	IoHomeOutline,
	IoInformation,
	IoInformationSharp,
	IoInformationOutline,
} from 'react-icons/io5';
//gry
import {
	FaTh,
	FaThList,
	FaThLarge,
	FaRegListAlt,
	FaBuffer,
	FaInfo,
} from 'react-icons/fa';
//dodawanie
import { IoMdAdd } from 'react-icons/io';
import { IoAdd, IoAddOutline, IoAddSharp } from 'react-icons/io5';

const SidebarElement = styled.div`
	/* border: 1px solid white; */
	z-index: 99;
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
	}
	.box {
		width: 100%;
		padding: 20px 0;
		color: white;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.element {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		p {
			font-weight: 500;
			font-size: 1.2rem;
		}
		svg {
			color: white;
			font-size: 5rem;
			padding: 10px;
			margin: 1px 0 0 0;
			border-top: none;
			border: 1px solid transparent;
		}

		svg:hover {
			border: 1px solid white;
			border-radius: 15%;
			cursor: pointer;
		}
	}
`;

const Sidebar = () => {
	return (
		<>
			<SidebarElement>
				<div className='box-container'>
					<div className='box'>
						<div className='element'>
							<p>Home</p>
							<Link to='/'>
								<IoHomeSharp />
							</Link>
						</div>
					</div>
					<div className='box'>
						<div className='element'>
							<p>Games</p>
							<Link to='/games'>
								<FaBuffer />
							</Link>
						</div>
					</div>
					<div className='box'>
						<div className='element'>
							<p>Add Game</p>
							<Link to='/add-game'>
								<IoAddSharp />
							</Link>
						</div>
					</div>
				</div>
			</SidebarElement>
		</>
	);
};

export default Sidebar;
