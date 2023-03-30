import {ThemeContext} from '@/context'
import React, {useContext} from 'react'
import {useNav} from '@/hooks'
import styles from './Home.module.scss'

const Home = () => {
	const homeRef = useNav('Home')
	const {isDarkMode} = useContext(ThemeContext)

	return (
		<div className={isDarkMode ? styles.dark : ''}>
			<section ref={homeRef} id='homeContainer' className={styles.Home}>
				<div className={styles.container}>
					<div>
						<h1 className={styles.title}>Sharon Gomez</h1>
						<p className={styles.paragraph}>
							Hi there, welcome to my portfolio! My name is Sharon and I&apos;m a
							software engineer based in Westchester, NY.
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
				</div>
			</section>
		</div>
	)
}

export default Home
