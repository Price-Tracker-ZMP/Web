import {
	BrowserRouter as BrowserRouter,
	Routes,
	Route,
} from 'react-router-dom';
import LoginPage from './Pages/Login/LoginPage.js';
import GlobalStyles from './globalStyles';
import HomePage from './Pages/Home/HomePage.js';
// import Sidebar from './components/Sidebar.js';
import Games from './Pages/Games/Games.js';
import AddGame from './Pages/AddGame/AddGame.js';
import Info from './Pages/Info/Info.js';

function App() {
	return (
		<>
			<GlobalStyles />
			<BrowserRouter>
				{/* <Sidebar /> */}
				<Routes>
					<Route path='/' exact element={<HomePage />} />
					<Route path='/login' exact element={<LoginPage />} />
					<Route path='/games' exact element={<Games />} />
					<Route path='/add-game' exact element={<AddGame />} />
					<Route path='/info' exact element={<Info />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
