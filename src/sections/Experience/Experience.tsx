import React from 'react'
import {useNav} from '@/hooks'
import styles from '@/styles/Experience.module.scss'
import {ThemeContext} from '@/context'
import {useContext} from 'react'

const Experience = () => {
	const experienceRef = useNav('Experience')
	const {isDarkMode} = useContext(ThemeContext)

	return (
		<div className={`${isDarkMode ? styles.dark : ''}`}>
			<section
				ref={experienceRef}
				id='experienceContainer'
				className={styles.Experience}
			>
				<div>
					<h1 className={styles.title}>Experience</h1>
				</div>
			</section>
		</div>
	)
}

export default Experience
