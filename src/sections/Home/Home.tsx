import {ThemeContext} from '@/context'
import React, {useContext} from 'react'
import {useNav} from '@/hooks'
import styles from './Home.module.scss'

const Home = () => {
	const homeRef = useNav('Home')
	const {isDarkMode} = useContext(ThemeContext)

	const scrollTo = (id: string) => {
		document.getElementById(id)?.scrollIntoView({behavior: 'smooth'})
	}

	return (
		<div className={isDarkMode ? styles.dark : ''}>
			<section ref={homeRef} id='homeContainer' className={styles.Home}>
				<div className={styles.container}>
					<div className={styles.text}>
						<div className={styles.kicker}>Software Engineer · New York</div>
						<h1 className={styles.title}>Sharon Gomez</h1>
						<p className={styles.lead}>
							Hi there, welcome to my portfolio! I&apos;m a software engineer who
							builds web apps that look great and feel great to use.
						</p>
						<div className={styles.cta}>
							<button
								className={styles.btnPrimary}
								onClick={() => scrollTo('projectsContainer')}
							>
								View my work
								<svg
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='2.2'
									strokeLinecap='round'
									strokeLinejoin='round'
								>
									<path d='M5 12h14M13 6l6 6-6 6' />
								</svg>
							</button>
							<button
								className={styles.btnGhost}
								onClick={() => scrollTo('contactContainer')}
							>
								Get in touch
							</button>
						</div>
					</div>

					<div className={styles.avatarWrap}>
						<div className={styles.avatarRing}>
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img
								alt="Sharon's avatar"
								className={styles.avatar}
								src='/images/avatar.jpeg'
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Home
