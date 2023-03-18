import {ThemeContext} from '@/context'
import React, {useContext} from 'react'
import {useNav} from '@/hooks'
import styles from '@/styles/Home.module.scss'

const Home = () => {
	const homeRef = useNav('Home')
	const {isDarkMode} = useContext(ThemeContext)

	return (
		<div className={`${isDarkMode ? styles.dark : ''}`}>
			<section ref={homeRef} id='homeContainer' className={styles.Home}>
				<div>
					<h1 className={styles.title}>Sharon Gomez</h1>
					<p className={styles.paragraph}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</div>
				<div>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						alt="Sharon's avatar"
						className={styles.avatar}
						src='/images/avatar.png'
					/>
				</div>
			</section>
		</div>
	)
}

export default Home
