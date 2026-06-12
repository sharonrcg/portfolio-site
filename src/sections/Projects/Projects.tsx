import React from 'react'
import {useNav} from '@/hooks'
import styles from './Projects.module.scss'
import {ThemeContext} from '@/context'
import {useContext} from 'react'
import {projects} from '@/utils/constants'
import {MobileCarousel} from './components/MobileCarousel'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Projects = () => {
	const projectsRef = useNav('Projects')
	const {isDarkMode} = useContext(ThemeContext)

	return (
		<div className={isDarkMode ? styles.dark : ''}>
			<section
				ref={projectsRef}
				id='projectsContainer'
				className={styles.Projects}
			>
				<div className={styles.wrap}>
					<div className={styles.head}>
						<div className={styles.kicker}>Selected work</div>
						<h2 className={styles.title}>
							Projects <span className={styles.emoji}>🖌️</span>
						</h2>
					</div>
					<MobileCarousel isDarkMode={isDarkMode} projects={projects} />
				</div>
			</section>
		</div>
	)
}

export {Projects}
export default Projects
