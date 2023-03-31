import styles from './ProjectCard.module.scss'
import cn from 'classnames'

export type ProjectCardProps = {
	project: {
		title: string
		description: string
		image: string
		github: string
		demo?: string
		tools: string[]
	}
	isDarkMode: boolean
	showScreenshot?: boolean
}

const ProjectCard = (props: ProjectCardProps) => {
	const {project, isDarkMode, showScreenshot = true} = props

	return (
		<div className={cn(styles.ProjectCard, isDarkMode ? styles.dark : '')}>
			<div className={styles.infoColumn}>
				<div className={styles.info}>
					<p className={styles.overline}>category</p>
					<h1 className={styles.title}>{project.title}</h1>
					<p className={styles.description}>{project.description}</p>
				</div>
				<div className={styles.linkGroup}>
					<a
						className={styles.link}
						href={project.github}
						target='_blank'
						rel='noreferrer'
					>
						<strong>Code</strong>
					</a>
					{project.demo && (
						<a
							className={styles.link}
							href={project.demo}
							target='_blank'
							rel='noreferrer'
						>
							<strong>Demo</strong>
						</a>
					)}
					<button className={styles.link}>
						<strong>Tools</strong>
					</button>
				</div>
			</div>
			{showScreenshot && (
				<div className={styles.imageContainer}>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img src={project.image} alt={project.title} />
				</div>
			)}
		</div>
	)
}

export default ProjectCard
