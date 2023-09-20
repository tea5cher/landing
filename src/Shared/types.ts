import React from 'react';
import {
	ActionFunction,
	LoaderFunction,
	RouteObject,
	ShouldRevalidateFunction,
} from 'react-router-dom';

export type RouteItem = {
	path?: string;
	displayName: string;
	key: string;
	index?: boolean;
	element?: React.ReactNode | null;
	caseSensitive?: boolean;
	id?: string;
	loader?: LoaderFunction;
	action?: ActionFunction;
	errorElement?: React.ReactNode | null;
	handle?: RouteObject['handle'];
	shouldRevalidate?: ShouldRevalidateFunction;
};
