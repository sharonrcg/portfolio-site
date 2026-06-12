import React, {useContext} from 'react'
import {useNav} from '@/hooks'
import styles from './About.module.scss'
import {ThemeContext} from '@/context'
import {PolaroidStack} from './components/PolaroidStack'
import {polaroids, rows} from '@/utils/constants'
import {SkillPill} from '@/components/SkillPill'

const About = () => {
	const aboutRef = useNav('About')
	const {isDarkMode} = useContext(ThemeContext)

	const skills = [
		'JavaScript',
		'TypeScript',
		'React',
		'Next.js',
		'GraphQL',
		'Git',
		'HTML',
		'CSS',
	]

	return (
		<div className={`${isDarkMode ? styles.dark : ''}`}>
			<section ref={aboutRef} id='aboutContainer' className={styles.About}>
				<div className={styles.container}>
					<div className={styles.bio}>
						<div className={styles.kicker}>Get to know me</div>
						<h1 className={styles.title}>
							About me <span className={styles.emoji}>🎨</span>
						</h1>
						<div className={styles.paragraphs}>
							{rows.map((row, idx) => (
								<p
									key={idx}
									className={styles.paragraph}
									dangerouslySetInnerHTML={{__html: row.paragraph}}
								/>
							))}
						</div>
						<div className={styles.skills}>
							<div className={styles.skillsLabel}>Tools I work with</div>
							<div className={styles.chips}>
								{skills.map((skill) => (
									<SkillPill name={skill} dark={isDarkMode} key={skill} />
								))}
							</div>
						</div>
					</div>
					<PolaroidStack polaroids={polaroids} />
				</div>
			</section>
		</div>
	)
}

export default About
