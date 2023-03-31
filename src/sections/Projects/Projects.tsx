import React from 'react'
import {useNav} from '@/hooks'
import styles from './Projects.module.scss'
import {ThemeContext} from '@/context'
import {useContext} from 'react'
import ProjectCard from './components/ProjectCard'
import {projects} from '@/utils/constants'
import cn from 'classnames'

const Projects = () => {
	const projectsRef = useNav('Projects')
	const {isDarkMode} = useContext(ThemeContext)
	const [currentProjectsPage, setCurrentProjectsPage] = React.useState(0)
	const [translate, setTranslate] = React.useState<string | undefined>()

	return (
		<div className={isDarkMode ? styles.dark : ''}>
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
								<button
									className={styles.pageBtn}
									onClick={() => {
										setTranslate('left')
										setCurrentProjectsPage((pg) => pg - 1)
									}}
								>
									〈
								</button>
							)}
						</div>

						{/* all projects */}
						<div className={styles.projects}>
							{projects.map((projectPage, idx) => (
								/* each page of 4 projects */
								<div
									className={cn(
										styles.projectContainer,
										translate == 'left' && styles.translateLeft,
										translate === 'right' && styles.translateRight,
									)}
									key={idx}
								>
									{projectPage.map((project, idx) => (
										/* each project */
										<ProjectCard key={idx} isDarkMode={isDarkMode} project={project} />
									))}
								</div>
							))}
						</div>

						<div className={styles.buttonContainer}>
							{currentProjectsPage + 1 < projects.length && (
								<button
									className={styles.pageBtn}
									onClick={() => {
										setTranslate('right')
										setCurrentProjectsPage((pg) => pg + 1)
									}}
								>
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
