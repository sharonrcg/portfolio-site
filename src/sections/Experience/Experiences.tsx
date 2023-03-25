import React, {useState} from 'react'
import {useNav} from '@/hooks'
import styles from '@/styles/Experiences.module.scss'
import {ThemeContext} from '@/context'
import {useContext} from 'react'
import {Experience} from './components/Experience'
import {ExperienceSection} from './components/ExperienceSection'
import {education, experiences} from '@/utils/constants'
import {CollapsibleSection} from './components/CollapsibleSection'

const Experiences = () => {
	const experienceRef = useNav('Experience')
	const {isDarkMode} = useContext(ThemeContext)
	const [isOpen, setIsOpen] = useState(0)

	const toggleJobs = (idx: any) => {
		setIsOpen(isOpen !== idx ? idx : null)
	}

	return (
		<div className={`${isDarkMode ? styles.dark : ''}`}>
			<section
				ref={experienceRef}
				id='experienceContainer'
				className={styles.Experiences}
			>
				<h1 className={styles.title}>Experience</h1>
				<div className={styles.experienceContainer}>
					<ExperienceSection title='Work experience'>
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

					<ExperienceSection title='Education'>
						<CollapsibleSection
							index={10}
							open={isOpen === 10}
							title={education.title}
							toggle={() => toggleJobs(10)}
						>
							<Experience
								orgName={education.orgName}
								dates={education.dates}
								paragraphs={education.paragraphs}
							/>
						</CollapsibleSection>
					</ExperienceSection>
				</div>
			</section>
		</div>
	)
}

export default Experiences
