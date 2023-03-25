import styles from '@/styles/Experiences.module.scss'

export type ExperienceSectionProps = {
	title: string
	children: React.ReactNode
}

export const ExperienceSection = (props: ExperienceSectionProps) => {
	const {title, children} = props
	return (
		<div className={styles.section}>
			<h2 className={styles.sectionTitle}>{title}</h2>
			<div className={styles.sectionList}>{children}</div>
		</div>
	)
}
