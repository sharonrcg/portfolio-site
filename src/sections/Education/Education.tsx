import React, {useContext} from 'react'
import {useNav} from '@/hooks'
import styles from './Education.module.scss'
import {ThemeContext} from '@/context'
import {education} from '@/utils/constants'

const Education = () => {
	const educationRef = useNav('Education')
	const {isDarkMode} = useContext(ThemeContext)

	return (
		<div className={isDarkMode ? styles.dark : ''}>
			<section
				ref={educationRef}
				id='educationContainer'
				className={styles.Education}
			>
				<div className={styles.head}>
					<div className={styles.kicker}>Academic background</div>
					<h2 className={styles.title}>
						Education <span className={styles.emoji}>🎓</span>
					</h2>
				</div>

				<div className={styles.expGrid}>
					<div className={styles.list}>
						<div className={styles.card}>
							<h3 className={styles.cardTitle}>{education.title}</h3>
							<div className={styles.meta}>
								<strong>{education.orgName}</strong>, <em>{education.dates}</em>
							</div>
							<ul className={styles.summary}>
								{education.paragraphs.map((paragraph, idx) => (
									<li key={idx}>{paragraph}</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export {Education}
export default Education
