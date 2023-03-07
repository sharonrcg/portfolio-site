import React from 'react'
import {useNav} from '../hooks/useNav'

const Contact = () => {
	const contactRef = useNav('Contact')

	return (
		<section ref={contactRef} id='contactContainer'>
			<div>
				<h3>CONTACT</h3>
				<p>This is the contact section</p>
			</div>
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img
				src='https://source.unsplash.com/random/600x600/?nature,water'
				alt='unsplash-img'
			/>
		</section>
	)
}

export default Contact
