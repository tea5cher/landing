import { Navigate } from 'react-router-dom';

import { RouteItem } from '../Shared/types';
import { MainPage } from '../Pages';

export const arrRoutes: RouteItem[] = [
	{
		displayName: 'Навигация',
		key: 'navigate',
		element: <Navigate to="/main" />,
		path: '/',
	},
	{
		displayName: 'Главная',
		key: 'main',
		element: <MainPage />,
		path: 'main',
	},
	{
		displayName: 'О нас',
		key: 'about',
		element: <MainPage />,
		path: 'about',
	},
	{
		displayName: 'Условия использования',
		key: 'terms',
		element: <MainPage />,
		path: 'terms',
	},
	{
		displayName: 'Обучающие материалы',
		key: 'education',
		element: <MainPage />,
		path: 'education',
	},
	{
		displayName: 'Заказать демо',
		key: 'order',
		element: <MainPage />,
		path: 'order',
	},
];
