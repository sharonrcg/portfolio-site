import React, {useContext} from 'react'
import {useNav} from '../hooks'
import styles from '../styles/About.module.scss'
import sharon_and_kai from '../../public/images/sharon_and_kai.jpg'
import {ThemeContext} from '../context'

const About = () => {
	const aboutRef = useNav('About')
	const {isDarkMode} = useContext(ThemeContext)

	return (
		<div className={`${isDarkMode ? styles.dark : ''}`}>
			<section ref={aboutRef} id='aboutContainer' className={styles.About}>
				<div>
					<h1 className={styles.title}>About me</h1>
					<p className={styles.paragraph}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
						veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat.
					</p>
				</div>
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img className={styles.image} src={sharon_and_kai.src} alt='unsplash-img' />
			</section>
		</div>
	)
}

export default About
