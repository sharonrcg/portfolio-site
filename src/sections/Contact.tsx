import React from 'react'
import {useNav} from '../hooks/useNav'
import styles from '../styles/Contact.module.scss'

const Contact = () => {
	const contactRef = useNav('Contact')

	return (
		<section ref={contactRef} id='contactContainer' className={styles.Contact}>
			<div>
				<h3>CONTACT</h3>
				<p>This is the contact section</p>
			</div>
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img
				src='https://source.unsplash.com/random/600x600/?corgi'
				alt='unsplash-img'
			/>
		</section>
	)
}

export default Contact
