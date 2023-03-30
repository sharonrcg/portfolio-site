import styles from './SkillPill.module.scss'
import cn from 'classnames'

export const SkillPill = ({name, dark}: {name: string; dark: boolean}) => (
	<div className={cn(styles.Skill, dark && styles.dark)}>
		<p>{name}</p>
	</div>
)
