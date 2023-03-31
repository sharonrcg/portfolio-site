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
	const {title, description, image, github, demo, tools} = project

	return (
		<div className={cn(styles.ProjectCard, isDarkMode ? styles.dark : '')}>
			<div className={styles.infoColumn}>
				<div className={styles.info}>
					<h1 className={styles.title}>{title}</h1>
					<p className={styles.description}>{description}</p>
				</div>
				<div className={styles.linkGroup}>
					<a className={styles.link} href={github} target='_blank' rel='noreferrer'>
						<strong>Code</strong>
					</a>
					{demo && (
						<a className={styles.link} href={demo} target='_blank' rel='noreferrer'>
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
					<img src={image} alt={title} />
				</div>
			)}
		</div>
	)
}

export default ProjectCard
