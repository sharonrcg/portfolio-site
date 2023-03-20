import React, {useContext} from 'react'
import {useNav} from '@/hooks'
import styles from '@/styles/About.module.scss'
import {ThemeContext} from '@/context'
import {PolaroidStack} from './components/PolaroidStack'

const About = () => {
	const aboutRef = useNav('About')
	const {isDarkMode} = useContext(ThemeContext)

	return (
		<div className={`${isDarkMode ? styles.dark : ''}`}>
			<section ref={aboutRef} id='aboutContainer' className={styles.About}>
				<div className={styles.container}>
					<div>
						<h1 className={styles.title}>About me</h1>
						<p className={styles.paragraph}>
							I am a passionate individual who enjoys creating beautiful, responsive
							and intuitive web applications. I love learning new things and I&apos;m
							always looking for opportunities to improve my skills.
							<br />
							I currently work at Casebook PBC as a front-end engineer. For the last 2+
							years I&apos;ve helped build and maintain the Casebook platform, which
							allows human services agencies to better serve their clients.
							<br />
							When I&apos;m not coding, I enjoy watching movies, playing video games,
							and creating art. If you&apos;re interested in learning more (or just
							want to say hi), please don&apos;t hesitate to reach out!
						</p>
					</div>
					<PolaroidStack />
				</div>
			</section>
		</div>
	)
}

export default About
