import React from 'react'
import {useNav} from '@/hooks'
import styles from '@/styles/Experience.module.scss'
import {ThemeContext} from '@/context'
import {useContext} from 'react'

const Experience = () => {
	const experienceRef = useNav('Experience')
	const {isDarkMode} = useContext(ThemeContext)

	return (
		<div className={`${isDarkMode ? styles.dark : ''}`}>
			<section
				ref={experienceRef}
				id='experienceContainer'
				className={styles.Experience}
			>
				<div className={styles.container}>
					<h1 className={styles.title}>Experience</h1>
					<div className={styles.experienceContainer}>
						<div className={styles.experienceSection}>
							<h2 className={styles.experienceTitle}>Work experience</h2>
							<div className={styles.jobList}>
								<div className={styles.job}>
									<h2 className={styles.companyName}>Job 1</h2>
									<p className={styles.jobTitle}>Job title</p>
									<p className={styles.jobDates}>DATE - present</p>
								</div>
								<div className={styles.job}>
									<h2 className={styles.companyName}>Job 2</h2>
									<p className={styles.jobTitle}>Job title</p>
									<p className={styles.jobDates}>DATE - DATE</p>
								</div>
								<div className={styles.job}>
									<h2 className={styles.companyName}>Job 3</h2>
									<p className={styles.jobTitle}>Job title</p>
									<p className={styles.jobDates}>DATE - DATE</p>
								</div>
							</div>
						</div>

						<div className={styles.experienceSection}>
							<h1 className={styles.experienceTitle}>Education</h1>
							<div className={styles.jobList}>
								<div className={styles.job}>
									<h2 className={styles.companyName}>School</h2>
									<p className={styles.jobTitle}>BA Mathematics and Computer Science</p>
									<p className={styles.jobDates}>DATE - DATE</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Experience
