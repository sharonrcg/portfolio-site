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
			</div>
		</div>
	)
}

export default ProjectCard
