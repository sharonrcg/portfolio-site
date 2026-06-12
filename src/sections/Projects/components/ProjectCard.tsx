/* eslint-disable @next/next/no-img-element */
import {useState} from 'react'
import styles from './ProjectCard.module.scss'
import cn from 'classnames'

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
}

const ProjectCard = ({project, isDarkMode}: ProjectCardProps) => {
	const [showTools, setShowTools] = useState(false)
	const {title, description, image, github, demo, tools} = project

	return (
		<div className={cn(styles.ProjectCard, isDarkMode && styles.dark)}>
			{showTools && (
				<div className={styles.toolsOverlay}>
					<div className={styles.overlayHead}>
						<div className={styles.overlayInfo}>
							<span className={styles.overlayTitle}>{title}</span>
							<span className={styles.overlayLabel}>Built with</span>
						</div>
						<button className={styles.closeBtn} onClick={() => setShowTools(false)}>✕</button>
					</div>
					<div className={styles.overlayDivider} />
					<div className={styles.toolsList}>
						{tools.map((tool) => (
							<span key={tool} className={styles.overlayPill}>{tool}</span>
						))}
					</div>
				</div>
			)}
			<div className={styles.top}>
				<div className={styles.info}>
					<h3 className={styles.title}>{title}</h3>
					<p className={styles.desc}>{description}</p>
				</div>
				<img className={styles.icon} src={image} alt={title} />
			</div>
			<div className={styles.foot}>
				<a className={styles.link} href={github} target='_blank' rel='noreferrer'>
					<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round'>
						<path d='M16 18l6-6-6-6M8 6l-6 6 6 6' />
					</svg>
					CODE
				</a>
				{demo && (
					<a className={styles.link} href={demo} target='_blank' rel='noreferrer'>
						<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round'>
							<path d='M7 17L17 7M9 7h8v8' />
						</svg>
						DEMO
					</a>
				)}
				<button className={styles.tool} onClick={() => setShowTools(true)}>
					<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
						<path d='M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.1-2.1z' />
					</svg>
					Built with
				</button>
			</div>
		</div>
	)
}

export default ProjectCard
