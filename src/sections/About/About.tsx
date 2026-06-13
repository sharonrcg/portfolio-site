import React, {useContext, useEffect, useRef, useState} from 'react'
import {useNav} from '@/hooks'
import styles from './About.module.scss'
import {ThemeContext} from '@/context'
import {PolaroidStack} from './components/PolaroidStack'
import {polaroids, rows} from '@/utils/constants'
import {SkillPill} from '@/components/SkillPill'
import cn from 'classnames'

const About = () => {
	const aboutRef = useNav('About')
	const {isDarkMode} = useContext(ThemeContext)
	const paragraphsRef = useRef<HTMLDivElement>(null)
	const [atTop, setAtTop] = useState(true)
	const [atBottom, setAtBottom] = useState(false)

	useEffect(() => {
		const el = paragraphsRef.current
		if (!el) return
		const update = () => {
			setAtTop(el.scrollTop <= 2)
			setAtBottom(el.scrollTop + el.clientHeight >= el.scrollHeight - 2)
		}
		el.addEventListener('scroll', update, {passive: true})
		window.addEventListener('resize', update)
		update()
		return () => {
			el.removeEventListener('scroll', update)
			window.removeEventListener('resize', update)
		}
	}, [])

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
						<div className={cn(styles.bioCard, atTop && styles.atTop, atBottom && styles.atBottom)}>
							<div ref={paragraphsRef} className={styles.paragraphs}>
								{rows.map((row, idx) => (
									<p
										key={idx}
										className={styles.paragraph}
										dangerouslySetInnerHTML={{__html: row.paragraph}}
									/>
								))}
							</div>
							<div className={styles.scrollCue}>
								<span>Scroll</span>
								<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.4' strokeLinecap='round' strokeLinejoin='round'>
									<path d='M6 9l6 6 6-6' />
								</svg>
							</div>
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
