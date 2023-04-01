import {NavContext} from '@/context/NavContext'
import React, {useContext} from 'react'
import styles from './SectionDots.module.scss'
import {navLinks} from '@/utils/constants'
import {ThemeContext} from '@/context'
import cn from 'classnames'

const SectionDots = () => {
	const {activeNavLinkId} = useContext(NavContext)
	const {isDarkMode} = useContext(ThemeContext)

	return (
		<>
			<div className={cn(styles.dotNav, isDarkMode ? styles.dark : '')}>
				<ul>
					{navLinks.map((ele) => (
						<li
							key={ele.navLinkId}
							className={ele.navLinkId === activeNavLinkId ? styles.active : undefined}
						></li>
					))}
				</ul>
			</div>
		</>
	)
}

export default SectionDots
