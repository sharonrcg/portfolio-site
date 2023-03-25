import styles from '@/styles/Experiences.module.scss'

type ExperienceProps = {
	title: string
	orgName: string
	dates: string
	paragraphs: string[]
}

export const Experience = (props: ExperienceProps) => {
	const {title, orgName, dates, paragraphs} = props
	return (
		<div className={styles.job}>
			<h2 className={styles.jobTitle}>{title}</h2>
			<span className={styles.jobSubtitle}>
				<strong>{orgName}</strong>, <em>{dates}</em>
			</span>
			<ul className={styles.jobSummary}>
				{paragraphs.map((paragraph, idx) => (
					<li key={idx}>{paragraph}</li>
				))}
			</ul>
		</div>
	)
}
