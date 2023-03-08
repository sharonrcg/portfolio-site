import React from 'react'
import {Home, About, Contact, Projects} from './'
import styles from '../styles/Main.module.scss'

const Main = () => (
	<main className={styles.container}>
		<Home />
		<About />
		<Projects />
		<Contact />
	</main>
)

export default Main
