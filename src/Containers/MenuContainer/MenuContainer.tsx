import { useEffect, useLayoutEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router';

import {
	NavigationContainer,
} from '../';

import styles from './MenuContainer.module.scss';

function MenuContainer() {
	const [loading, setLoading] = useState(false);

	return (
		<div className={styles.root}>
			{loading ? (
				// TODO добавить элемент загрузки на весь экран, как сделает Лера
				<></>
			) : (
				<>
					<div className={styles.wrapper}>
						<NavigationContainer />
					</div>
					<div className={styles.page}>
						<Outlet />
					</div>
				</>
			)}
		</div>
	);
}

export default MenuContainer;
