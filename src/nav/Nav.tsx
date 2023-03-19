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

			<nav className={styles.menuButton}>
				<button onClick={handleMenuClick}>☰</button>
			</nav>

			{isMenuOpen && (
				<nav className={`${styles.popover} ${styles[activeNavLinkId]}`}>
					<ul className={styles.sectionsList}>
						{renderNavLinks()}
						{/* <ThemeButton /> */}
					</ul>
				</nav>
			)}
		</>
	)
}

export default Nav
