/* eslint-disable @next/next/no-img-element */
import {ThemeContext} from '@/context'
import {useContext} from 'react'
import lightModeIcon from '../../public/images/lightModeIcon.svg'
import darkModeIcon from '../../public/images/darkModeIcon.svg'
import styles from '@/styles/ThemeButton.module.scss'

const ThemeButton = () => {
	const {isDarkMode, toggleTheme} = useContext(ThemeContext)

	return (
		<button
			className={`${styles.ThemeButton} ${isDarkMode ? styles.darkModeIcon : ''}`}
			onClick={toggleTheme}
		>
			{isDarkMode ? (
				<img src={lightModeIcon.src} alt='Light mode icon' />
			) : (
				<img src={darkModeIcon.src} alt='Dark mode icon' />
			)}
		</button>
	)
}

export default ThemeButton
