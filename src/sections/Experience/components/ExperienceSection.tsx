import {ThemeContext} from '@/context'
import styles from './ExperienceSection.module.scss'
import {useContext} from 'react'

export type ExperienceSectionProps = {
	title: string
	children: React.ReactNode
}

export const ExperienceSection = (props: ExperienceSectionProps) => {
	const {title, children} = props
	const {isDarkMode} = useContext(ThemeContext)

	return (
		<div
			className={`${styles.ExperienceSection} ${isDarkMode ? styles.dark : ''}`}
		>
			<h2 className={styles.sectionTitle}>{title}</h2>
			<div className={styles.sectionList}>{children}</div>
		</div>
	)
}
