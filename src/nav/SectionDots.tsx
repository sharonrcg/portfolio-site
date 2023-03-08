import React from 'react'
import styles from '../styles/SectionDots.module.scss'
import {navLinks} from './navLinks'

const SectionDots = () => {
	return (
		<>
			<div className={styles.dotNav}>
				<ul>
					{navLinks.map((ele) => (
						<li key={ele.navLinkId}></li>
					))}
				</ul>
			</div>
		</>
	)
}

export default SectionDots
