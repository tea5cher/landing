import { createHashRouter as createRouter } from 'react-router-dom';

import { RouteItem } from './Shared/types';
import App from './App';
import { MainPage } from './Pages';

const routes: RouteItem[] = [
	{
		index: true,
		displayName: 'Главная',
		key: 'home',
		element: <MainPage />,
	},
];

export const navigationMenu = routes.map(
	({ path, index, displayName, key }) => ({
		key,
		href: !index ? path : '/',
		displayName,
	}),
);

export default createRouter([
	{
		path: '/',
		element: <App />,
		children: routes,
	},
]);
