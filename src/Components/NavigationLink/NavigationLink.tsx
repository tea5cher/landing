import styles from './NavigationLink.module.scss';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { useState } from 'react';

function NavigationLink({ to, label, icon, index }) {
	const [isHovered, setIsHovered] = useState(null);
	return (
		<NavLink
			key={index}
			to={to}
			className={({ isActive }) =>
				clsx(styles.item, {
					[styles.active]: isActive,
				})
			}
		>
			{icon && <>{icon}</>}
			{label}
			<span className={styles.decorator} />
		</NavLink>
	);
}

export default NavigationLink;
