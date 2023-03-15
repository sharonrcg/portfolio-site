import React from 'react'
import {Home, About, Contact, Projects} from './'
import styles from '../styles/Main.module.scss'
import {useScrollSnap} from '../hooks'

const Main = () => {
	const mainRef = useScrollSnap()

	return (
		<main className={styles.container} ref={mainRef}>
			<Home />
			<About />
			<Projects />
			<Contact />
		</main>
	)
}

export default Main
