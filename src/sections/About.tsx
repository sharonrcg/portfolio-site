import React from 'react'
import {useNav} from '../hooks/useNav'

const About = () => {
	const aboutRef = useNav('About')

	return (
		<section ref={aboutRef} id='aboutContainer'>
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img
				src='https://source.unsplash.com/random/600x600/?nature,water'
				alt='unsplash-img'
			/>
			<div>
				<h3>ABOUT</h3>
				<p>This is the about section</p>
			</div>
		</section>
	)
}

export default About
