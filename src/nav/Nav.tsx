import React, {useContext} from 'react'
import NavLink from './NavLink'
import {navLinks} from './navLinks'
import {ThemeButton} from '.'
import {NavContext, ThemeContext} from '@/context'
import styles from '@/styles/Nav.module.scss'

const Nav = () => {
	const {isDarkMode} = useContext(ThemeContext)
	const {activeNavLinkId} = useContext(NavContext)
	const [isMenuOpen, setIsMenuOpen] = React.useState(false)

	React.useEffect(() => {
		const homeSection = document.getElementById('homeContainer')
		homeSection?.scrollIntoView({behavior: 'smooth'})
	}, [])

	const handleMenuClick = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	const renderNavLinks = () => {
		return navLinks.map(({navLinkId, scrollToId}, idx) =>
			scrollToId ? (
				<NavLink
					key={idx}
					navLinkId={navLinkId}
					scrollToId={scrollToId}
					className={styles.activeClass}
					onClick={() => setIsMenuOpen(false)}
				/>
			) : null,
		)
	}

	return (
		<>
			<nav
				className={`${styles.Nav} ${isDarkMode ? styles.dark : ''} ${
					styles[activeNavLinkId]
				}`}
			>
				{renderNavLinks()}
				<ThemeButton />
			</nav>

			<button
				className={`${styles.menuButton} ${isDarkMode ? styles.dark : ''}`}
				onClick={handleMenuClick}
			>
				☰
			</button>

			{isMenuOpen && (
				<nav
					className={`${styles.popover} ${isDarkMode ? styles.dark : ''} ${
						styles[activeNavLinkId]
					}`}
				>
					<ul className={styles.sectionsList}>
						{renderNavLinks()}
						<ThemeButton onClick={() => setIsMenuOpen(false)} />
					</ul>
				</nav>
			)}
		</>
	)
}

export default Nav
