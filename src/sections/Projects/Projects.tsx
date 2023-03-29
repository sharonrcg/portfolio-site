import React from 'react'
import {useNav} from '@/hooks'
import styles from '@/styles/Projects.module.scss'
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
						<div>
							{currentProjectsPage >= 1 && (
								<button onClick={() => setCurrentProjectsPage((pg) => pg - 1)}>
									〈
								</button>
							)}
						</div>
						<div className={styles.projects}>
							<div>
								{projects[currentProjectsPage].map((project, idx) => (
									<div className={styles.projectRow} key={idx}>
										{/* eslint-disable-next-line @next/next/no-img-element */}
										<img
											src={project.image}
											alt={project.title}
											className={styles.projectImage}
										/>
										<ProjectCard key={idx} project={project} />
									</div>
								))}
							</div>
						</div>

						<div>
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
