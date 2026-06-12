import {ThemeContext} from '@/context'
import React, {useContext} from 'react'
import {useNav} from '@/hooks'
import styles from './Contact.module.scss'

const ArrowIcon = () => (
	<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round'>
		<path d='M7 17L17 7M9 7h8v8' />
	</svg>
)

const Contact = () => {
	const contactRef = useNav('Contact')
	const {isDarkMode} = useContext(ThemeContext)

	return (
		<div className={`${styles.contactContainer} ${isDarkMode ? styles.dark : ''}`}>
			<section ref={contactRef} id='contactContainer' className={styles.Contact}>
				<div className={styles.contactWrap}>
					<div className={styles.kicker}>Let&apos;s connect</div>
					<h1 className={styles.title}>
						Contact <span className={styles.emoji}>📱</span>
					</h1>
					<p className={styles.lead}>
						Feel free to reach out for any questions or inquiries — I&apos;ll try
						to get back to you as soon as possible. You can reach me at any of
						the following:
					</p>

					<div className={styles.contactList}>
						<a className={styles.contactRow} href='mailto:me@sharongomez.com'>
							<span className={styles.contactBadge}>
								<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round'>
									<rect x='3' y='5' width='18' height='14' rx='2' />
									<path d='M3 7l9 6 9-6' />
								</svg>
							</span>
							<span className={styles.contactMeta}>
								<span className={styles.contactLabel}>Email</span>
								<span className={styles.contactValue}>me@sharongomez.com</span>
							</span>
							<span className={styles.contactArrow}>
								<ArrowIcon />
							</span>
						</a>

						<a
							className={styles.contactRow}
							href='https://www.linkedin.com/in/sharonrcg/'
							target='_blank'
							rel='noreferrer'
						>
							<span className={styles.contactBadge}>
								<svg viewBox='0 0 24 24' fill='currentColor'>
									<path d='M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.06 3.76-2.06 4.02 0 4.76 2.65 4.76 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85V21H9z' />
								</svg>
							</span>
							<span className={styles.contactMeta}>
								<span className={styles.contactLabel}>LinkedIn</span>
								<span className={styles.contactValue}>linkedin.com/in/sharonrcg</span>
							</span>
							<span className={styles.contactArrow}>
								<ArrowIcon />
							</span>
						</a>

						<a
							className={styles.contactRow}
							href='https://www.github.com/sharonrcg'
							target='_blank'
							rel='noreferrer'
						>
							<span className={styles.contactBadge}>
								<svg viewBox='0 0 24 24' fill='currentColor'>
									<path d='M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z' />
								</svg>
							</span>
							<span className={styles.contactMeta}>
								<span className={styles.contactLabel}>GitHub</span>
								<span className={styles.contactValue}>@sharonrcg</span>
							</span>
							<span className={styles.contactArrow}>
								<ArrowIcon />
							</span>
						</a>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Contact
