import React, { useEffect, useState } from 'react';

const useThemeSwitcher = () => {
	const preferDarkQuery = '(prefers-color-scheme: light)';
	const [mode, setMode] = useState('');
	useEffect(() => {
		console.log(window.localStorage.getItem('theme'));
		const mediaQuery = window.matchMedia(preferDarkQuery);
		const userRef = window.localStorage.getItem('theme');

		const handleChange = (e) => {
			if (userRef) {
				let check = userRef === 'dark' ? 'light' : 'dark';
				setMode(check);
				if (check === 'dark') {
					document.documentElement.classList.add('dark');
					window.localStorage.setItem('theme', 'dark');
				} else {
					document.documentElement.classList.remove('dark');
					window.localStorage.setItem('theme', 'light');
				}
			} else {
				let check = mediaQuery.matches ? 'dark' : 'light';
				setMode(check);
				if (check === 'dark') {
					document.documentElement.classList.add('dark');
				} else {
					document.documentElement.classList.remove('dark');
				}
			}
		};
		handleChange();
		mediaQuery.addEventListener('change', handleChange);
		return () => mediaQuery.removeEventListener('change', handleChange);
	}, []);

	useEffect(() => {
		if (mode === 'dark') {
			window.localStorage.setItem('theme', 'dark');
			document.documentElement.classList.add('dark');
		}
		if (mode === 'light') {
			window.localStorage.setItem('theme', 'light');
			document.documentElement.classList.remove('dark');
		}
	}, [mode]);

	return [mode, setMode];
};

export default useThemeSwitcher;
