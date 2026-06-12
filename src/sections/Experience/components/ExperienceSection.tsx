import React from 'react'
import styles from './ExperienceSection.module.scss'

export type ExperienceSectionProps = {
	children: React.ReactNode
}

export const ExperienceSection = (props: ExperienceSectionProps) => {
	const {children} = props

	return (
		<div className={styles.list}>{children}</div>
	)
}
