import React from 'react'
import {useNav} from '../hooks/useNav'
import styles from '../styles/Projects.module.css'

const Projects = () => {
	const projectsRef = useNav('Projects')

	return (
		<section ref={projectsRef} id='projectsContainer' className={styles.Projects}>
			<div>
				<h1 className={styles.title}>Projects</h1>
				<p className={styles.paragraph}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
					veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
					commodo consequat.
				</p>
			</div>
		</section>
	)
}

export default Projects
