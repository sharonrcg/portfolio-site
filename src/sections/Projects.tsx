import React from 'react'
import {useNav} from '../hooks/useNav'
import styles from '../styles/Projects.module.scss'

const Projects = () => {
	const projectsRef = useNav('Projects')

	return (
		<section ref={projectsRef} id='projectsContainer' className={styles.Projects}>
			<div>
				<h1 className={styles.title}>Projects</h1>
			</div>
		</section>
	)
}

export default Projects
