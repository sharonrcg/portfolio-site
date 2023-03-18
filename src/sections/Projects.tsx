import React from 'react'
import {useNav} from '@/hooks'
import styles from '@/styles/Projects.module.scss'
import {ThemeContext} from '@/context'
import {useContext} from 'react'

const Projects = () => {
	const projectsRef = useNav('Projects')
	const {isDarkMode} = useContext(ThemeContext)

	return (
		<div className={`${isDarkMode ? styles.dark : ''}`}>
			<section
				ref={projectsRef}
				id='projectsContainer'
				className={styles.Projects}
			>
				<div>
					<h1 className={styles.title}>Projects</h1>
				</div>
			</section>
		</div>
	)
}

export default Projects
