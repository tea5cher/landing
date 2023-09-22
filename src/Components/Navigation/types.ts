import { ReactNode } from 'react';

export type NavLink = {
	label: ReactNode;
	to: string;
	icon?: JSX.Element;
};

export type NavigationProps = {
	items: NavLink[];
};
