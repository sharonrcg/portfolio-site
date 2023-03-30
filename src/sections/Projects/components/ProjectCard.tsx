import {ThemeContext} from '@/context'
import styles from './ProjectCard.module.scss'
import {useContext} from 'react'

export type ProjectCardProps = {
	project: {
		title: string
		description: string
		image: string
		github: string
		demo?: string
		tools: string[]
	}
	showScreenshot?: boolean
}

const ProjectCard = (props: ProjectCardProps) => {
	const {project} = props
	const {isDarkMode} = useContext(ThemeContext)

	return (
		<div className={`${styles.ProjectCard} ${isDarkMode ? styles.dark : ''}`}>
			<div className={styles.infoColumn}>
				<p className={styles.overline}>category</p>
				<h1 className={styles.title}>{project.title}</h1>
				<p className={styles.description}>{project.description}</p>
				<div className={styles.buttonGroup}>
					<a className={styles.button} href={project.github}>
						Code
					</a>
					{project.demo && (
						<a className={styles.button} href={project.demo}>
							Demo
						</a>
					)}
					<button className={styles.button}>Tools</button>
				</div>
			</div>
			<div className={styles.imageContainer}>
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img src={project.image} alt={project.title} />
			</div>
		</div>
	)
}

export default ProjectCard
