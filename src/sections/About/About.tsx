import React, {useContext} from 'react'
import {useNav} from '@/hooks'
import styles from './About.module.scss'
import {ThemeContext} from '@/context'
import {PolaroidStack} from './components/PolaroidStack'
import {Polaroid} from './components/Polaroid'
import {polaroids, rows} from '@/utils/constants'
import {SkillPill} from '@/components/SkillPill'
import palette4 from '../../../public/images/palette4.svg'

const About = () => {
	const aboutRef = useNav('About')
	const {isDarkMode} = useContext(ThemeContext)

	const renderRow = (idx: number, paragraph: string, polaroid: Polaroid) => {
		return (
			<div className={styles.row} key={idx}>
				<p
					className={styles.paragraph}
					dangerouslySetInnerHTML={{__html: paragraph}}
				/>
			</div>
		)
	}

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
					<div>
						<h1 className={styles.title}>
							{/* eslint-disable-next-line @next/next/no-img-element */}
							About me <img src={palette4.src} alt='' />
						</h1>
						{rows.map((row, idx) => renderRow(idx, row.paragraph, row.polaroid))}
						<div className={styles.skills}>
							{skills.map((skill) => (
								<SkillPill name={skill} dark={isDarkMode} key={skill} />
							))}
						</div>
					</div>
					<PolaroidStack polaroids={polaroids} />
				</div>
			</section>
		</div>
	)
}

export default About
