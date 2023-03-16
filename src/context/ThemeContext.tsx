import React, {useState} from 'react'

export const ThemeContext = React.createContext({
	isDarkMode: false,
	toggleTheme: () => {},
})

const ThemeProvider = ({children}: {children: React.ReactNode}) => {
	const [theme, setTheme] = useState('light')
	const isDarkMode = theme === 'dark'

	const toggleTheme = () => {
		setTheme((theme) => (theme === 'light' ? 'dark' : 'light'))
	}

	return (
		<ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeProvider
