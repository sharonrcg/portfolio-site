import sharon from '../../public/images/sharon.jpg'
import kai from '../../public/images/kai.jpg'
import family from '../../public/images/family.jpeg'
import portfolio from '../../public/projects/portfolio.svg'
import gamerank from '../../public/projects/gamerank.svg'
import budget from '../../public/projects/budget.svg'
import rinblog from '../../public/projects/rinblog.svg'
import hoodie from '../../public/projects/hoodie.svg'
import taskroulette from '../../public/projects/taskroulette.svg'
import calendar from '../../public/projects/calendar.svg'
import color from '../../public/projects/color.svg'

const navLinks = [
	{navLinkId: 'Home', scrollToId: 'homeContainer'},
	{navLinkId: 'About', scrollToId: 'aboutContainer'},
	{navLinkId: 'Experience', scrollToId: 'experienceContainer'},
	{navLinkId: 'Projects', scrollToId: 'projectsContainer'},
	{navLinkId: 'Contact', scrollToId: 'contactContainer'},
]

const projects = [
	[
		{
			title: 'Portfolio site',
			description:
				'This is my portfolio site where I show off all my cool projects and skills.',
			image: portfolio.src,
			github: 'https://github.com/sharonrgomez/portfolio-site',
			tools: ['Next.js', 'TypeScript', 'SCSS'],
		},
		{
			title: 'Event planner',
			description: 'Plan your events with ease using this intuitive calendar app.',
			image: calendar.src,
			github: 'https://github.com/sharonrgomez/event-planner',
			demo: 'https://event-planner-blush.vercel.app/',
			tools: ['Next,js', 'TypeScript', 'Tailwind CSS'],
		},
		{
			title: 'Task Roulette',
			description:
				"Don't know where to start on your to-do list? This app will help you decide!",
			image: taskroulette.src,
			github: 'https://github.com/sharonrgomez/task-roulette',
			demo: 'https://taskroulette.sharongomez.com/',
			tools: ['React', 'Webpack', 'SCSS'],
		},
		{
			title: 'Weather app',
			description:
				'Planning your outfit just got easier with this helpful web app that lets you know if the weather is suitable for wearing a hoodie.',
			image: hoodie.src,
			github: 'https://github.com/sharonrgomez/hoodie',
			demo: 'https://hoodie.onrender.com/',
			tools: ['React', 'SCSS'],
		},
	],
	[
		{
			title: 'Blog',
			description:
				'With this blogging app, you can express your thoughts and ideas with complete freedom and unleash your creativity to the fullest!',
			image: rinblog.src,
			github: 'https://github.com/sharonrgomez/rinblog',
			demo: 'https://rinblog.sharongomez.com/',
			tools: ['React', 'Firebase', 'Semantic UI', 'SCSS'],
		},
		{
			title: 'Review video games',
			description:
				'A platform for gamers to review and rank video games with others, making it a great tool for discovering new favorites and sharing opinions.',
			image: gamerank.src,
			github: 'https://github.com/sharonrgomez/gamerank',
			demo: 'https://gamerank.sharongomez.com/',
			tools: ['EJS', 'Bootstrap', 'Express', 'MongoDB'],
		},
		{
			title: 'Budget tracker',
			description:
				'Efficiently manage your money with the help of this web app that allows you to track your expenses and income.',
			image: budget.src,
			github: 'https://github.com/sharonrgomez/budget-trackr',
			demo: 'https://budgettrackr.sharongomez.com/',
			tools: ['React', 'Firebase', 'SCSS'],
		},
		{
			title: 'RGB color game',
			description:
				'Test your knowledge of RGB and improve your color-matching skills with this simple yet engaging game.',
			image: color.src,
			github: 'https://github.com/sharonrgomez/color-game',
			demo: 'https://rgb-color.onrender.com/',
			tools: ['JavaScript', 'HTML', 'CSS'],
		},
	],
]

const polaroids = [
	{
		displayText: 'Me',
		imageAlt: 'A polaroid of me',
		imageSrc: sharon.src,
	},
	{
		displayText: 'My pup',
		imageAlt: 'A polaroid of my dog',
		imageSrc: kai.src,
	},
	{
		displayText: 'My family',
		imageAlt: 'A polaroid of me and my family',
		imageSrc: family.src,
	},
]

const rows = [
	{
		paragraph:
			"I love creating web applications that not only look great but also provide an exceptional user experience. Whether it's building from scratch or improving existing projects, I always strive to learn new technologies and techniques to enhance my skills and stay up-to-date with industry trends.",
		polaroid: polaroids[0],
	},
	{
		paragraph:
			"For the past 3+ years, I've been working as a front-end engineer at Casebook PBC, where I've had the opportunity to contribute to the development and maintenance of the Casebook platform. This platform empowers human services agencies to provide better support and care to those who need it most.",
		polaroid: polaroids[1],
	},
	{
		paragraph:
			"When I'm not coding, you'll probably catch me watching movies, playing video games, or doodling. Feel free to drop me a message if you want learn more - I'm always up for a chat!",
		polaroid: polaroids[2],
	},
]

const experiences = [
	{
		title: 'Software Engineer',
		orgName: 'Casebook PBC',
		dates: 'September 2020 - present',
		paragraphs: [
			`Developed and maintained the design system for the Casebook platform, creating new components and refining existing ones using React, TypeScript, and MaterialUI. Partnered with the design team to ensure components were user-friendly and met product requirements.`,
			`Enhanced the Casebook platform by building new features and improving existing functionality with React and TypeScript. Worked with fellow engineers to leverage GraphQL for API upgrades and ongoing maintenance.`,
			`Used Jest and React Testing Library for unit testing and Cypress for end-to-end testing, working with the engineering team to guarantee thorough testing and high-quality code.`,
			`Led several full-stack projects from start to finish, collaborating with team members to ensure seamless integration and the delivery of effective solutions.`,
		],
	},
	{
		title: 'Data Entry Analyst',
		orgName: 'Almod Diamonds',
		dates: 'September 2018 - March 2020',
		paragraphs: [
			`Managed and optimized the database of inventory items, implementing efficient sorting and organization practices to enhance data retrieval and accuracy.`,
			`Maintained and validated inventory data to prevent system discrepancies, ensuring that all entries were accurately reflected against corresponding invoices.`,
		],
	},
	{
		title: 'Java and Python Teacher',
		orgName: 'Coditum',
		dates: 'October 2016 - August 2018',
		paragraphs: [
			`Instructed students in Python and Java programming languages, guiding them through foundational to advanced concepts to prepare them for further education.`,
			`Created and developed lesson plans tailored to students' academic needs, ensuring comprehensive coverage of key programming principles.`,
			`Facilitated students' understanding of algorithms, data structures, and object-oriented programming by helping them design and implement their own projects.`,
			`Provided hands-on debugging support and constructive feedback on students' code, focusing on improving their problem-solving skills and coding practices.`,
		],
	},
]

const education = {
	title: 'BA - Computer Science & Mathematics',
	orgName: 'Purchase College, SUNY',
	dates: 'September 2013 - May 2017',
	paragraphs: [
		`GPA: 3.5`,
		`Senior Project: Researched the connection between mathematics and art, with a focus on the works of artist M.C. Escher. Developed a web application using p5.js that enabled users to produce tessellation-inspired drawings. Presented at the SUNY Undergraduate Research Conference (SURC) 2017, showcasing the project's impact and relevance.`,
		`Minor in Visual Arts. Completed coursework in drawing, painting, and
		sculpture.`,
	],
}

export {navLinks, projects, education, experiences, polaroids, rows}
