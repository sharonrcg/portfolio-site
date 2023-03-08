import React from 'react'
import {useNav} from '../hooks/useNav'
import styles from '../styles/Home.module.scss'

const Home = () => {
	const homeRef = useNav('Home')

	return (
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
	)
}

export default Home
