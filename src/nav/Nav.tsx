import React, {useContext, useEffect} from 'react'
import NavLink from './components/NavLink'
import {navLinks} from '@/utils/constants'
import {ThemeButton} from '.'
import {NavContext, ThemeContext} from '@/context'
import styles from './Nav.module.scss'

const Nav = () => {
	const {isDarkMode} = useContext(ThemeContext)
	const {activeNavLinkId} = useContext(NavContext)
	const [isMenuOpen, setIsMenuOpen] = React.useState(false)

	React.useEffect(() => {
		const homeSection = document.getElementById('homeContainer')
		homeSection?.scrollIntoView({behavior: 'smooth'})
	}, [])

	useEffect(() => {
		document.body.style.overflow = isMenuOpen ? 'hidden' : ''
		return () => {
			document.body.style.overflow = ''
		}
	}, [isMenuOpen])

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
				className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : isDarkMode ? styles.dark : ''}`}
				onClick={() => setIsMenuOpen(!isMenuOpen)}
				aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
				aria-expanded={isMenuOpen}
			>
				<span className={styles.bars}>
					<span />
					<span />
					<span />
				</span>
			</button>

			{isMenuOpen && (
				<div
					className={`${styles.mobileMenu} ${isDarkMode ? styles.mobileMenuDark : ''}`}
					role='dialog'
					aria-modal='true'
					aria-label='Site menu'
				>
					<div className={styles.mMenuInner}>
						<div className={styles.mKicker}>Menu</div>
						<nav className={styles.mLinks}>{renderNavLinks()}</nav>
						<div className={styles.mFoot}>
							<div className={styles.mThemeBtn}>
								<ThemeButton onClick={() => setIsMenuOpen(false)} />
							</div>
							<span>Sharon Gomez · Portfolio</span>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default Nav
