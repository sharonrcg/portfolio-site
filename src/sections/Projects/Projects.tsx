import React from 'react'
import {useNav} from '@/hooks'
import styles from './Projects.module.scss'
import {ThemeContext} from '@/context'
import {useContext} from 'react'
import {projects} from '@/utils/constants'
import brushLight from '../../../public/images/brushLight.svg'
import brushDark from '../../../public/images/brushDark.svg'
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
				<div>
					<h1 className={styles.title}>
						Projects
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img src={isDarkMode ? brushDark.src : brushLight.src} alt='' />
					</h1>
					<div className={styles.mobileCarousel}>
						<MobileCarousel isDarkMode={isDarkMode} projects={projects} />
					</div>
				</div>
			</section>
		</div>
	)
}

export default Projects
