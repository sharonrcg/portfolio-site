import ProjectCard from './ProjectCard'
import styles from '@/styles/ProjectsGrid.module.scss'
import gamerank from '../../../../public/images/projects/game.png'
import budgettrackr from '../../../../public/images/projects/budget.png'
import restfulblog from '../../../../public/images/projects/restful.png'
import rinblog from '../../../../public/images/projects/rinblog.png'
import hoodie from '../../../../public/images/projects/hoodie.png'
import color from '../../../../public/images/projects/color.png'

const ProjectsGrid = () => {
	const projects = [
		{
			title: 'Project 1',
			description: 'Project 1 description',
			image: gamerank.src,
			github: '',
			demo: '',
		},
		{
			title: 'Project 2',
			description: 'Project 2 description',
			image: budgettrackr.src,
			github: '',
			demo: '',
		},
		{
			title: 'Project 3',
			description: 'Project 3 description',
			image: restfulblog.src,
			github: '',
			demo: '',
		},
		{
			title: 'Project 1',
			description: 'Project 1 description',
			image: rinblog.src,
			github: '',
			demo: '',
		},
		{
			title: 'Project 2',
			description: 'Project 2 description',
			image: hoodie.src,
			github: '',
			demo: '',
		},
		{
			title: 'Project 3',
			description: 'Project 3 description',
			image: color.src,
			github: '',
			demo: '',
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
