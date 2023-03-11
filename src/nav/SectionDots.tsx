import {NavContext} from '../context/NavContext'
import React, {useContext} from 'react'
import styles from '../styles/SectionDots.module.scss'
import {navLinks} from './navLinks'

const SectionDots = () => {
	const {activeNavLinkId} = useContext(NavContext)

	return (
		<>
			<div className={styles.dotNav}>
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
