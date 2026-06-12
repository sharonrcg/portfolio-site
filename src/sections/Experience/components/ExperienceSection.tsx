import React from 'react'
import styles from './ExperienceSection.module.scss'

export type ExperienceSectionProps = {
	title: string
	children: React.ReactNode
}

export const ExperienceSection = (props: ExperienceSectionProps) => {
	const {title, children} = props

	return (
		<>
			<div className={styles.rail}>{title}</div>
			<div className={styles.list}>{children}</div>
		</>
	)
}
