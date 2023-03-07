import React from 'react'
import {useNav} from '../hooks/useNav'
import styles from '../styles/About.module.css'

const About = () => {
	const aboutRef = useNav('About')

	return (
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
			<img
				src='https://source.unsplash.com/random/600x600/?nature,water'
				alt='unsplash-img'
			/>
		</section>
	)
}

export default About
