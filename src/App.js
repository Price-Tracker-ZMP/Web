import {
	BrowserRouter as BrowserRouter,
	Routes,
	Route,
} from 'react-router-dom';
import LoginPage from './Pages/Login/LoginPage.js';
import GlobalStyles from './globalStyles';
import Sidebar from './components/Sidebar.js';

function App() {
	return (
		<>
			<GlobalStyles />
			<BrowserRouter>
				{/* <Routes>
					<Route path='/' exact element={<HomePage />} />
					<Route path='/login' exact element={<LoginPage />} />
				</Routes> */}
			</BrowserRouter>
		</>
	);
}

export default App;
