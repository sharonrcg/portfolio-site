import React, {useState} from 'react'
import {useNav} from '@/hooks'
import styles from './Experiences.module.scss'
import {ThemeContext} from '@/context'
import {useContext} from 'react'
import {Experience} from './components/Experience'
import {ExperienceSection} from './components/ExperienceSection'
import {experiences} from '@/utils/constants'
import {CollapsibleSection} from './components/CollapsibleSection'

const Experiences = () => {
	const experienceRef = useNav('Experience')
	const {isDarkMode} = useContext(ThemeContext)
	const [isOpen, setIsOpen] = useState<number | null>(0)

	const toggleJobs = (idx: number) => {
		setIsOpen(isOpen !== idx ? idx : null)
	}

	return (
		<div className={`${isDarkMode ? styles.dark : ''}`}>
			<section
				ref={experienceRef}
				id='experienceContainer'
				className={styles.Experiences}
			>
				<div className={styles.head}>
					<div className={styles.kicker}>Work experience</div>
					<h2 className={styles.title}>
						Experience <span className={styles.emoji}>📁</span>
					</h2>
				</div>

				<div className={styles.expGrid}>
					<ExperienceSection title='Work Experience'>
						{experiences.map((experience, idx) => (
							<CollapsibleSection
								index={idx}
								key={idx}
								open={isOpen === idx}
								title={experience.title}
								toggle={toggleJobs}
							>
								<Experience
									orgName={experience.orgName}
									dates={experience.dates}
									paragraphs={experience.paragraphs}
								/>
							</CollapsibleSection>
						))}
					</ExperienceSection>
				</div>
			</section>
		</div>
	)
}

export default Experiences
