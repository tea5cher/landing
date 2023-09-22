import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MenuContainer } from '../Containers';
import { arrRoutes } from '../Routes/RoutesData';

import '../Assets/styles/index.scss';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MenuContainer />}>
					{arrRoutes.map(({ path, element }, index) => (
						<Route path={path} element={element} key={index} />
					))}
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
