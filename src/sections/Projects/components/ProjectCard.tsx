/* eslint-disable @next/next/no-img-element */
import {useState} from 'react'
import styles from './ProjectCard.module.scss'
import cn from 'classnames'
import {SkillPill} from '@/components/SkillPill'
import hammer from '../../../../public/images/hammer.svg'
import close from '../../../../public/images/close.svg'

export type Project = {
	title: string
	description: string
	image: string
	github: string
	demo?: string
	tools: string[]
}

export type ProjectCardProps = {
	project: Project
	isDarkMode: boolean
	showScreenshot?: boolean
}

const ProjectCard = (props: ProjectCardProps) => {
	const [showTools, setShowTools] = useState(false)
	const {project, isDarkMode, showScreenshot = true} = props
	const {title, description, image, github, demo, tools} = project

	const handleToolsClick = () => {
		setShowTools(true)
	}

	return (
		<div className={cn(styles.ProjectCard, isDarkMode ? styles.dark : '')}>
			{showTools && (
				<div className={styles.tools}>
					<div className={styles.list}>
						{tools.map((tool) => (
							<SkillPill key={tool} name={tool} dark={isDarkMode} />
						))}
					</div>
					<button className={styles.close} onClick={() => setShowTools(false)}>
						<img src={close.src} alt='' />
					</button>
				</div>
			)}
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
				</div>
			</div>
			{showScreenshot && (
				<div className={styles.imageContainer}>
					<img src={image} alt={title} />
					<button className={styles.toolsButton} onClick={handleToolsClick}>
						<img src={hammer.src} alt='' />
					</button>
				</div>
			)}
		</div>
	)
}

export default ProjectCard
