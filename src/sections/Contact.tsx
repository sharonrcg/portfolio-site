import {ThemeContext} from '../context'
import React, {useContext} from 'react'
import {useNav} from '../hooks'
import styles from '../styles/Contact.module.scss'

const Contact = () => {
	const contactRef = useNav('Contact')
	const {isDarkMode} = useContext(ThemeContext)

	return (
		<div className={`${isDarkMode ? styles.dark : ''}`}>
			<section ref={contactRef} id='contactContainer' className={styles.Contact}>
				<div>
					<h1 className={styles.title}>Contact</h1>
				</div>
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					src='https://source.unsplash.com/random/600x600/?corgi'
					alt='unsplash-img'
				/>
			</section>
		</div>
	)
}

export default Contact
