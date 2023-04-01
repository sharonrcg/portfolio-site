import sharon from '../../public/images/sharon.jpg'
import kai from '../../public/images/kai.jpg'
import sharon_and_juan from '../../public/images/sharon_and_juan.jpg'
import portfolio from '../../public/projects/portfolio.svg'
import gamerank from '../../public/projects/gamerank.svg'
import budget from '../../public/projects/budget.svg'
import rinblog from '../../public/projects/rinblog.svg'
import hoodie from '../../public/projects/hoodie.svg'
import indecision from '../../public/projects/indecision.svg'
import landing from '../../public/projects/landing.svg'
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
			tools: [
				'React',
				'Firebase Authentication',
				'Firebase Realtime Database',
				'SCSS',
			],
		},
		{
			title: 'Blog',
			description:
				'With this blogging app, you can express your thoughts and ideas with complete freedom and unleash your creativity to the fullest!',
			image: rinblog.src,
			github: 'https://github.com/sharonrgomez/rinblog',
			demo: 'https://rinblog.sharongomez.com/',
			tools: [
				'React',
				'Firebase Realtime Database',
				'Firebase Authentication',
				'Semantic UI',
				'SCSS',
			],
		},
	],
	[
		{
			title: 'Weather app',
			description:
				'Planning your outfit just got easier with this helpful web app that lets you know if the weather is suitable for wearing a hoodie.',
			image: hoodie.src,
			github: 'https://github.com/sharonrgomez/hoodie',
			demo: 'https://hoodie.onrender.com/',
			tools: ['React', 'SCSS'],
		},
		{
			title: 'Decision making app',
			description:
				'An intuitive decision-making app that provides a simple and effective way to weigh your options and help you make informed choices.',
			image: indecision.src,
			github: 'https://github.com/sharonrgomez/indecision-app',
			demo: 'https://indecision.sharongomez.com/',
			tools: ['React', 'Webpack', 'SCSS'],
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
		{
			title: 'Landing page',
			description:
				'A minimal landing page that provides a stylish and professional way to showcase a brand or product.',
			image: landing.src,
			github: 'https://github.com/sharonrgomez/landing-page',
			demo: 'https://landing-14xu.onrender.com/',
			tools: ['React', 'SCSS'],
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
		displayText: 'Me and my husband, Juan',
		imageAlt: 'A polaroid of me and my husband, Juan',
		imageSrc: sharon_and_juan.src,
	},
	{
		displayText: 'My pup, Kai',
		imageAlt: 'A polaroid of my dog, Kai',
		imageSrc: kai.src,
	},
]

const rows = [
	{
		paragraph:
			"I love creating web applications that not only look great but also provide an <span>exceptional user experience</span>. Whether it's building from scratch or improving existing projects, I always strive to learn new technologies and techniques to <span>enhance my skills</span> and stay up-to-date with industry trends.",
		polaroid: polaroids[0],
	},
	{
		paragraph:
			"For the past two+ years, I've been working as a <span>front-end engineer</span> at Casebook PBC, where I've had the opportunity to contribute to the development and maintenance of the Casebook platform. This platform empowers human services agencies to provide better support and care to those who need it most.",
		polaroid: polaroids[1],
	},
	{
		paragraph:
			"When I'm not coding, you'll probably catch me <span>watching movies, playing video games, or doodling</span>. Feel free to drop me a message if you want learn more - I'm always up for a chat!",
		polaroid: polaroids[2],
	},
]

const experiences = [
	{
		title: 'Software Engineer',
		orgName: 'Casebook PBC',
		dates: 'September 2020 - present',
		paragraphs: [
			`Developed and maintained the design system used by the Casebook
			platform. Built new components from scratch and maintained existing
			components using React, Typescript, and MaterialUI. Collaborated
			closely with the design team to ensure all components were
			user-friendly, accessible, and aligned with the product's
			requirements.`,
			`Contributed to the Casebook platform web applications using React and
			TypeScript. Helped build out the platform's new features while
			also maintaining and enhancing existing functionality. Utilized
			GraphQL to improve and upkeep the platform's API.`,
			`Utilized Jest and React Testing Library to create unit tests for
			components, and used Cypress for developing end-to-end tests.`,
		],
	},
	{
		title: 'Data Entry Analyst',
		orgName: 'Almod Diamonds',
		dates: 'September 2018 - March 2020',
		paragraphs: [
			`Sorted and organized the database containing the entered items, and
			collaborated with the accounting department to ensure the accuracy of
			all values and prices.`,
			`Maintained inventory to prevent system errors and verified that all
			data inputted into the system was accurate and aligned with their
			corresponding invoices.`,
		],
	},
	{
		title: 'Java and Python Teacher',
		orgName: 'Coditum',
		dates: 'October 2016 - August 2018',
		paragraphs: [
			`Taught programming languages Python and Java. Worked with students to
			help them understand basic to advanced programming concepts to help
			them prepare for high school and college.`,
			`Assisted students in creating programs using algorithms, data
			structures and object-oriented programming. Debugged students'
			code and provided contructive feedback on their projects.`,
		],
	},
]

const education = {
	title: 'BA - Computer Science & Mathematics',
	orgName: 'Purchase College, SUNY',
	dates: 'September 2013 - May 2017',
	paragraphs: [
		`GPA: 3.5`,
		`Senior Project: Researched the connection between mathematics and art,
		with a particular focus on the works of artist M.C. Escher. Developed
		a web application that enables users to produce tessellation-inspired
		drawings.`,
		`Minor in Visual Arts. Completed coursework in drawing, painting, and
		sculpture.`,
	],
}

export {navLinks, projects, education, experiences, polaroids, rows}
