import {ThemeContext} from '@/context'
import React, {useContext} from 'react'
import {useNav} from '@/hooks'
import styles from './Contact.module.scss'
// import ContactForm from './components/ContactForm'
import phoneLight from '../../../public/images/phoneLight.svg'
import phoneDark from '../../../public/images/phoneDark.svg'

const Contact = () => {
	const contactRef = useNav('Contact')
	const {isDarkMode} = useContext(ThemeContext)

	return (
		<div
			className={`${styles.contactContainer} ${isDarkMode ? styles.dark : ''}`}
		>
			<section ref={contactRef} id='contactContainer' className={styles.Contact}>
				<div className={styles.titleContainer}>
					<h1 className={styles.title}>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img src={isDarkMode ? phoneDark.src : phoneLight.src} alt='' />
						Contact
					</h1>
					<p className={styles.paragraph}>
						Feel free to reach out for any questions or inquiries! I will try to get
						back to you as soon as possible.
						<br />
						<span className={styles.reachOutText}>
							You can also reach me at the following:
						</span>
					</p>
					<ul className={styles.list}>
						<li>
							{'Email: '}
							<a href='mailto:me@sharongomez.com'>me@sharongomez.com</a>
						</li>
						<li>
							{'LinkedIn: '}
							<a href='https://www.linkedin.com/in/sharonrcg/' target='_blank'>
								linkedin.com/in/sharonrcg
							</a>
						</li>
						<li>
							{'GitHub: '}
							<a href='https://www.github.com/sharonrgomez' target='_blank'>
								@sharonrgomez
							</a>
						</li>
					</ul>
					<p className={styles.mobileLinks}>
						<a href='mailto:me@sharongomez.com'>Email</a> |{' '}
						<a href='https://www.linkedin.com/in/sharonrcg/' target='_blank'>
							LinkedIn
						</a>{' '}
						|{' '}
						<a href='https://www.github.com/sharonrgomez' target='_blank'>
							GitHub
						</a>
					</p>
				</div>
				{/* <ContactForm /> */}
			</section>
		</div>
	)
}

export default Contact
