import { NavigationProps } from './types';

import styles from './Navigation.module.scss';
import { MainLogo } from '../../Utils/SvgComponents';
import NavigationLink from '../NavigationLink';

function Navigation({ items }: NavigationProps) {
	const links = items.map(({ label, to, icon }, index) => {
		return <NavigationLink to={to} label={label} icon={icon} index={index} />;
	});

	return (
		<nav className={styles.wrapper}>
			<div className={styles.logo}>
				<MainLogo />
			</div>
			<div className={styles.links}>{links}</div>
		</nav>
	);
}

export default Navigation;
