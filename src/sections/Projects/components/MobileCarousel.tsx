import React from 'react'
import Slider from 'react-slick'
import ProjectCard, {Project} from './ProjectCard'
import styles from './MobileCarousel.module.scss'

export const MobileCarousel = ({
	isDarkMode,
	projects,
}: {
	isDarkMode: boolean
	projects: Project[][]
}) => {
	const sliderSettings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 2,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 600,
				settings: {
					arrows: false,
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	}

	const pageOne = projects[0].map((project, idx) => (
		<ProjectCard key={idx} isDarkMode={isDarkMode} project={project} />
	))

	const pageTwo = projects[1].map((project, idx) => (
		<ProjectCard key={idx} isDarkMode={isDarkMode} project={project} />
	))

	return (
		<div className={styles.MobileCarousel}>
			<Slider {...sliderSettings}>
				{pageOne.map((project, idx) => (
					<>
						{project}
						{pageTwo[idx]}
					</>
				))}
			</Slider>
		</div>
	)
}
