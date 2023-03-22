import React, {useContext} from 'react'
import {useNav} from '@/hooks'
import styles from '@/styles/About.module.scss'
import {ThemeContext} from '@/context'
import {PolaroidStack} from './components/PolaroidStack'
import {Polaroid} from './components/Polaroid'
import {polaroids, rows} from '@/utils/constants'

const About = () => {
	const aboutRef = useNav('About')
	const {isDarkMode} = useContext(ThemeContext)

	const renderRow = (idx: number, paragraph: string, polaroid: Polaroid) => {
		return (
			<div className={styles.row} key={idx}>
				{/* <Polaroid
					className={styles.polaroid}
					displayText={polaroid.displayText}
					imageAlt={polaroid.imageAlt}
					imageSrc={polaroid.imageSrc}
				/> */}
				<p
					className={styles.paragraph}
					dangerouslySetInnerHTML={{__html: paragraph}}
				/>
			</div>
		)
	}

	const skills = [
		'JavaScript',
		'TypeScript',
		'React',
		'Next.js',
		'GraphQL',
		'Git',
		'HTML',
		'CSS',
	]

	// const renderMobileRow = (polaroids: Polaroid[]) => {
	// 	return polaroids.map((polaroid, idx) => (
	// 		<div className={styles.mobileRow} key={idx}>
	// 			<Polaroid
	// 				className={styles.polaroid}
	// 				displayText={polaroid.displayText}
	// 				imageAlt={polaroid.imageAlt}
	// 				imageSrc={polaroid.imageSrc}
	// 			/>
	// 		</div>
	// 	))
	// }

	return (
		<div className={`${isDarkMode ? styles.dark : ''}`}>
			<section ref={aboutRef} id='aboutContainer' className={styles.About}>
				<div className={styles.container}>
					<div>
						<h1 className={styles.title}>About me</h1>
						{/* <div className={styles.mobileRowContainer}>
							{renderMobileRow(polaroids)}
						</div> */}

						{rows.map((row, idx) => renderRow(idx, row.paragraph, row.polaroid))}

						<div className={styles.skills}>
							{skills.map((skill, idx) => (
								<div className={styles.skill} key={idx}>
									<p>{skill}</p>
								</div>
							))}
						</div>
					</div>
					<PolaroidStack polaroids={polaroids} />
				</div>
			</section>
		</div>
	)
}

export default About
