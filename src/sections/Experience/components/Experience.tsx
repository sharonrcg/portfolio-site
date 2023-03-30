import {ThemeContext} from '@/context'
import styles from './Experience.module.scss'
import {useContext} from 'react'

type ExperienceProps = {
	orgName: string
	dates: string
	paragraphs: string[]
}

export const Experience = (props: ExperienceProps) => {
	const {orgName, dates, paragraphs} = props
	const {isDarkMode} = useContext(ThemeContext)

	return (
		<div className={`${styles.Experience} ${isDarkMode ? styles.dark : ''}`}>
			<span className={styles.subtitle}>
				<strong>{orgName}</strong>, <em>{dates}</em>
			</span>
			<ul className={styles.summary}>
				{paragraphs.map((paragraph, idx) => (
					<li key={idx}>{paragraph}</li>
				))}
			</ul>
		</div>
	)
}
