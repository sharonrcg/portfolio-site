import ProjectCard from './ProjectCard'
import styles from '@/styles/ProjectsGrid.module.scss'
import gamerank from '../../../../public/images/projects/game.png'
import budgettrackr from '../../../../public/images/projects/budget.png'
import portfolio from '../../../../public/images/projects/portfolio.png'
import rinblog from '../../../../public/images/projects/rinblog.png'
import hoodie from '../../../../public/images/projects/hoodie.png'
import color from '../../../../public/images/projects/color.png'

const ProjectsGrid = () => {
	const projects = [
		{
			title: 'Project 1',
			description: 'Project 1 description',
			image: portfolio.src,
			github: '',
			demo: '',
			tools: ['React', 'Next.js', 'TypeScript', 'SCSS'],
		},
		{
			title: 'Project 2',
			description: 'Project 2 description',
			image: gamerank.src,
			github: '',
			demo: '',
			tools: ['React', 'Next.js', 'TypeScript', 'SCSS'],
		},
		{
			title: 'Project 3',
			description: 'Project 3 description',
			image: budgettrackr.src,
			github: '',
			demo: '',
			tools: ['React', 'Next.js', 'TypeScript', 'SCSS'],
		},
		{
			title: 'Project 1',
			description: 'Project 1 description',
			image: rinblog.src,
			github: '',
			demo: '',
			tools: ['React', 'Next.js', 'TypeScript', 'SCSS'],
		},
		{
			title: 'Project 2',
			description: 'Project 2 description',
			image: hoodie.src,
			github: '',
			demo: '',
			tools: ['React', 'Next.js', 'TypeScript', 'SCSS'],
		},
		{
			title: 'Project 3',
			description: 'Project 3 description',
			image: color.src,
			github: '',
			demo: '',
			tools: ['React', 'Next.js', 'TypeScript', 'SCSS'],
		},
	]

	return (
		<div className={styles.ProjectGrid}>
			{projects.map((project, index) => (
				<ProjectCard key={index} project={project} />
			))}
		</div>
	)
}

export default ProjectsGrid
