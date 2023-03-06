import React from 'react'
import {useNav} from '../hooks/useNav'
import styles from './Home.module.css'

const Home = () => {
	const homeRef = useNav('Home')

	return (
		<section ref={homeRef} id='homeContainer' className={styles.Home}>
			<div>
				<h1>Sharon Gomez</h1>
				<p className={styles.paragraph}>
					Lorem ipsum hello world Lorem ipsum hello world Lorem ipsum hello world
					Lorem ipsum hello world Lorem ipsum hello world
				</p>
			</div>
			<div>
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					alt="Sharon's avatar"
					className={styles.avatar}
					src='https://avatars.githubusercontent.com/u/22580495'
				/>
			</div>
		</section>
	)
}

export default Home
