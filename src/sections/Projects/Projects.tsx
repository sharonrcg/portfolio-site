import React from 'react'
import {useNav} from '@/hooks'
import styles from '@/styles/Projects.module.scss'
import {ThemeContext} from '@/context'
import {useContext} from 'react'
// import ProjectsGrid from './components/ProjectsGrid'

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
					{/* <ProjectsGrid /> */}
					<p>Coming soon! 🥳</p>
				</div>
			</section>
		</div>
	)
}

export default Projects
