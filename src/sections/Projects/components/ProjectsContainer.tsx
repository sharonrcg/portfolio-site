import ProjectCard from './ProjectCard'
import styles from '@/styles/ProjectsContainer.module.scss'
import gamerank from '../../../../public/images/projects/game.png'
import budgettrackr from '../../../../public/images/projects/budget.png'
import portfolio from '../../../../public/images/projects/portfolio.png'
import rinblog from '../../../../public/images/projects/rinblog.png'
import hoodie from '../../../../public/images/projects/hoodie.png'
import color from '../../../../public/images/projects/color.png'

export const projects = [
	[
		{
			title: 'Portfolio site',
			description: 'A homepage/portfolio to display my experiences and projects',
			image: portfolio.src,
			github: 'https://github.com/sharonrgomez/portfolio-site',
			tools: ['Next.js', 'TypeScript', 'SCSS'],
		},
		{
			title: 'GameRank',
			description:
				'A web app where people can rank and share their opinions on their favorite video games',
			image: gamerank.src,
			github: 'https://github.com/sharonrgomez/gamerank',
			demo: 'https://gamerank.sharongomez.com/',
			tools: ['EJS', 'Bootstrap', 'Express', 'MongoDB'],
		},
		{
			title: 'bugdet trackr',
			description:
				'A web app that helps you track your expenses and income to help you manage your money effenciently.',
			image: budgettrackr.src,
			github: 'https://github.com/sharonrgomez/budget-trackr',
			demo: 'https://budgettrackr.sharongomez.com/',
			tools: [
				'React',
				'Firebase Authentication',
				'Firebase Realtime Database',
				'SCSS',
			],
		},
	],
	[
		{
			title: 'rinblog',
			description:
				'A blogging app that gives you the freedom to unleash your mind.',
			image: rinblog.src,
			github: 'https://github.com/sharonrgomez/rinblog',
			demo: 'https://rin-blog.web.app/',
			tools: [
				'React',
				'Firebase Realtime Database',
				'Firebase Authentication',
				'Semantic UI',
				'SCSS',
			],
		},
		{
			title: 'Can I Wear a Hoodie Today?',
			description: "Find out if it's the right weather to wear a hoodie.",
			image: hoodie.src,
			github: 'https://github.com/sharonrgomez/hoodie',
			demo: 'https://caniwearahoodie.web.app',
			tools: ['React', 'SCSS'],
		},
		{
			title: 'RGB Color Game',
			description: 'A simple game to test your RGB color knowledge.',
			image: color.src,
			github: 'https://github.com/sharonrgomez/color-game',
			demo: '',
			tools: ['JavaScript', 'HTML', 'CSS'],
		},
	],
]

const ProjectsContainer = () => {
	// return (
	// 	<div className={styles.ProjectGrid}>
	// 		{projects.map((project, index) => (
	// 			<ProjectCard key={index} project={project} />
	// 		))}
	// 	</div>
	// )
}

export default ProjectsContainer
