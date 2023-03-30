import React from 'react'
import {useNav} from '@/hooks'
import styles from './Projects.module.scss'
import {ThemeContext} from '@/context'
import {useContext} from 'react'
import ProjectCard from './components/ProjectCard'
import {projects} from '@/utils/constants'

const Projects = () => {
	const projectsRef = useNav('Projects')
	const {isDarkMode} = useContext(ThemeContext)
	const [currentProjectsPage, setCurrentProjectsPage] = React.useState(0)

	return (
		<div className={`${isDarkMode ? styles.dark : ''}`}>
			<section
				ref={projectsRef}
				id='projectsContainer'
				className={styles.Projects}
			>
				<div>
					<h1 className={styles.title}>Projects</h1>
					<div className={styles.projectsContainer}>
						<div className={styles.buttonContainer}>
							{currentProjectsPage >= 1 && (
								<button onClick={() => setCurrentProjectsPage((pg) => pg - 1)}>
									〈
								</button>
							)}
						</div>

						{/* all projects */}
						<div className={styles.projects}>
							{projects.map((projectPage, idx) => (
								/* each page of 4 projects */
								<div className={styles.projectContainer} key={idx}>
									{projectPage.map((project, idx) => (
										/* each project */
										<ProjectCard key={idx} project={project} />
									))}
								</div>
							))}
						</div>

						<div className={styles.buttonContainer}>
							{currentProjectsPage + 1 < projects.length && (
								<button onClick={() => setCurrentProjectsPage((pg) => pg + 1)}>
									〉
								</button>
							)}
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Projects
