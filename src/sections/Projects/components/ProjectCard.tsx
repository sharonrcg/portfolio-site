import {ThemeContext} from '@/context'
import styles from '@/styles/ProjectCard.module.scss'
import {useContext} from 'react'

export type ProjectCardProps = {
	project: {
		title: string
		description: string
		image: string
		github: string
		demo: string
		tools: string[]
	}
}

const ProjectCard = (props: ProjectCardProps) => {
	const {project} = props
	const {isDarkMode} = useContext(ThemeContext)

	return (
		<div className={`${styles.ProjectCard} ${isDarkMode ? styles.dark : ''}`}>
			<div className={styles.cardContent}>
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					className={styles.projectImage}
					src={project.image}
					alt={project.title}
				/>
				<div className={styles.projectInfo}>
					<h3 className={styles.projectTitle}>{project.title}</h3>
					<p className={styles.projectDescription}>{project.description}</p>

					<div className={styles.projectTools}>
						{project.tools.map((tool, index) => (
							<span key={index} className={styles.projectTool}>
								{tool}
							</span>
						))}
					</div>
					<div className={styles.projectLinks}>
						<a
							className={styles.projectLink}
							href={project.github}
							target='_blank'
							rel='noreferrer'
						>
							Source code
						</a>
						<a
							className={styles.projectLink}
							href={project.demo}
							target='_blank'
							rel='noreferrer'
						>
							Live demo
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProjectCard
