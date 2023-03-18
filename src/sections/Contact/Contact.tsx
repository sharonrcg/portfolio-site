import {ThemeContext} from '@/context'
import React, {useContext} from 'react'
import {useNav} from '@/hooks'
import styles from '@/styles/Contact.module.scss'
import ContactForm from './components/ContactForm'

const Contact = () => {
	const contactRef = useNav('Contact')
	const {isDarkMode} = useContext(ThemeContext)

	return (
		<div
			className={`${styles.contactContainer} ${isDarkMode ? styles.dark : ''}`}
		>
			<section ref={contactRef} id='contactContainer' className={styles.Contact}>
				<div className={styles.titleContainer}>
					<h1 className={styles.title}>Contact</h1>
					<p className={styles.paragraph}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</div>
				<ContactForm />
			</section>
		</div>
	)
}

export default Contact
