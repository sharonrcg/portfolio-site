import React, {useContext} from 'react'
import NavLink from './NavLink'
import {navLinks} from './navLinks'
import {ThemeButton} from '.'
import {NavContext, ThemeContext} from '@/context'
import styles from '@/styles/Nav.module.scss'

const Nav = () => {
	const {isDarkMode} = useContext(ThemeContext)
	const {activeNavLinkId} = useContext(NavContext)

	React.useEffect(() => {
		const homeSection = document.getElementById('homeContainer')
		homeSection?.scrollIntoView({behavior: 'smooth'})
	}, [])

	return (
		<nav
			className={`${styles.Nav} ${isDarkMode ? styles.dark : ''} ${
				styles[activeNavLinkId]
			}`}
		>
			{navLinks.map(({navLinkId, scrollToId}, idx) =>
				scrollToId ? (
					<NavLink
						key={idx}
						navLinkId={navLinkId}
						scrollToId={scrollToId}
						className={styles.activeClass}
					/>
				) : null,
			)}
			<ThemeButton />
		</nav>
	)
}

export default Nav
