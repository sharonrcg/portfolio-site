import fam2 from '../../public/images/fam2.jpg'
import kai from '../../public/images/kai.jpg'
import family from '../../public/images/fam.jpg'
import portfolio from '../../public/projects/portfolio.svg'
import gamerank from '../../public/projects/gamerank.svg'
import budget from '../../public/projects/budget.svg'
import rinblog from '../../public/projects/rinblog.svg'
import hoodie from '../../public/projects/hoodie.svg'
import taskroulette from '../../public/projects/taskroulette.svg'
import calendar from '../../public/projects/calendar.svg'
import color from '../../public/projects/color.svg'
import marina from '../../public/projects/marina.svg'
import keysounds from '../../public/projects/keysounds.svg'

const navLinks = [
	{navLinkId: 'Home', scrollToId: 'homeContainer'},
	{navLinkId: 'About', scrollToId: 'aboutContainer'},
	{navLinkId: 'Experience', scrollToId: 'experienceContainer'},
	{navLinkId: 'Education', scrollToId: 'educationContainer'},
	{navLinkId: 'Projects', scrollToId: 'projectsContainer'},
	{navLinkId: 'Contact', scrollToId: 'contactContainer'},
]
const projects = [
    [
        {
            title: 'This portfolio',
            description: "The site you're on right now! A personal portfolio to showcase my projects and experience.",
            image: portfolio.src,
            github: 'https://github.com/sharonrcg/portfolio-site',
            tools: ['Next.js', 'React', 'TypeScript', 'SCSS'],
        },
        {
            title: 'Event planner',
            description: 'A minimal calendar app to help keep your life on track.',
            image: calendar.src,
            github: 'https://github.com/sharonrcg/event-planner',
            demo: 'https://event-planner-blush.vercel.app/',
            tools: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
        },
        {
            title: 'Can I wear a hoodie today?',
            description: "Find out if it's finally hoodie season.",
            image: hoodie.src,
            github: 'https://github.com/sharonrcg/hoodie',
            demo: 'https://hoodie.onrender.com/',
            tools: ['React', 'SCSS'],
        },
        {
            title: 'Budget trackr',
            description: 'A dashboard for managing your expenses.',
            image: budget.src,
            github: 'https://github.com/sharonrcg/budget-trackr',
            demo: 'https://budgettrackr.sharongomez.com/',
            tools: ['React', 'Firebase', 'SCSS'],
        },
        {
            title: 'Keysounds',
            description: 'Make some music using your computer keyboard!',
            image: keysounds.src,
            github: 'https://github.com/sharonrcg/keysounds',
            demo: 'https://keysounds.onrender.com/',
            tools: ['HTML', 'CSS', 'JavaScript', 'Howler.js', 'Paper.js'],
        },
    ],
    [
        {
            title: 'Rinblog',
            description: 'A simple blogging platform for sharing your thoughts with the world.',
            image: rinblog.src,
            github: 'https://github.com/sharonrcg/rinblog',
            demo: 'https://rinblog.sharongomez.com/',
            tools: ['React', 'Firebase', 'Semantic UI', 'SCSS'],
        },
        {
            title: 'Marina',
            description: 'A helpful tracker to help parents navigate the daily blur of feedings, diaper changes, and more.',
            image: marina.src,
            github: 'https://github.com/sharonrcg/marina',
            demo: 'https://marina-c2ec6.web.app/welcome',
            tools: ['Vite', 'React', 'Firebase', 'CSS'],
        },
        {
            title: 'Task Roulette',
            description: 'Let fate decide which task to tick off the list next.',
            image: taskroulette.src,
            github: 'https://github.com/sharonrcg/task-roulette',
            demo: 'https://taskroulette.sharongomez.com/',
            tools: ['React', 'Webpack', 'SCSS'],
        },
        {
            title: 'Gamerank',
            description: 'Rate and review your favorite games.',
            image: gamerank.src,
            github: 'https://github.com/sharonrcg/gamerank',
            demo: 'https://gamerank.sharongomez.com/',
            tools: ['EJS', 'Bootstrap', 'Express', 'MongoDB'],
        },
        {
            title: 'RGB color game',
            description: 'Guess the color based on its RGB values!',
            image: color.src,
            github: 'https://github.com/sharonrcg/color-game',
            demo: 'https://rgb-color.onrender.com/',
            tools: ['JavaScript', 'HTML', 'CSS'],
        },
    ],
]

const polaroids = [
	{
		displayText: 'Me and my girl',
		imageAlt: 'A polaroid of me and my daughter',
		imageSrc: fam2.src,
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
			"I'm a software engineer who specializes in the front-end side of things, with plenty of experience handling the data and logic underneath.",
		polaroid: polaroids[0],
	},
	{
		paragraph:
			"I love the puzzle of turning complex ideas into smooth, responsive web applications that feel natural to interact with.",
		polaroid: polaroids[1],
	},
	{
		paragraph:
		    "Outside of building web apps, you’ll usually find me caught up in a book, playing video games, or struggling to keep my houseplants alive. Feel free to reach out if you want to chat!",
		polaroid: polaroids[2],
	},
]

const experiences = [
	{
		title: 'Software Engineer',
		orgName: 'USPIS (Contractor)',
		dates: 'April 2025 - present',
		paragraphs: [
			`Architected and built CSA (Compliance Self-Assessment) from scratch - a React and TypeScript application with a C# .NET backend, which digitized and replaced a legacy, Excel-driven tracking process for inspectors.`,
			`Implemented the team's first front-end testing pipeline using Jest and React Testing Library, to ensure long-term application stability.`, 
			`Refactored legacy code patterns in several applications into modular TypeScript components, improving codebase maintainability and application performance.`,
		],
	},
	{
		title: 'Software Engineer',
		orgName: 'Casebook PBC',
		dates: 'September 2020 - March 2025',
		paragraphs: [
			`Developed and maintained the design system for the Casebook platform, creating new components and refining existing ones using React, TypeScript, and MaterialUI.`,
			`Enhanced the Casebook platform by building new features and improving existing functionality with React and TypeScript. Leveraged GraphQL for API upgrades and ongoing maintenance.`,
			`Used Jest and React Testing Library for unit testing and Cypress for end-to-end testing, working with the engineering team to guarantee thorough testing and high-quality code.`,
			`Led several full-stack projects from start to finish, collaborating with team members to ensure seamless integration and the delivery of effective solutions.`,
		],
	},
	{
		title: 'Java and Python Teacher',
		orgName: 'Coditum',
		dates: 'October 2016 - August 2018',
		paragraphs: [
			`Instructed students in Python and Java programming languages, guiding them through foundational to advanced concepts to prepare them for further education.`,
			`Created and developed lesson plans tailored to students' academic needs, ensuring comprehensive coverage of key programming principles.`,
			`Facilitated students' understanding of algorithms, data structures, and object-oriented programming by helping them implement their own projects.`,
			`Provided hands-on debugging support and constructive feedback on students' code, focusing on improving their problem-solving skills and coding practices.`,
		],
	},
]

const education = {
	title: 'BA - Computer Science & Mathematics',
	orgName: 'Purchase College, SUNY',
	dates: 'September 2013 - May 2017',
	paragraphs: [
		`GPA: 3.5+`,
		`Senior Project: Researched the connection between mathematics and art, with a focus on the works of artist M.C. Escher. Developed a web application using p5.js that enabled users to produce tessellation-inspired drawings. Presented at the SUNY Undergraduate Research Conference (SURC) 2017, showcasing the project's impact and relevance.`,
		`Minor in Visual Arts. Coursework included drawing, painting, and sculpture, which has influenced my approach to design and aesthetics in web development.`,
	],
}

export {navLinks, projects, education, experiences, polaroids, rows}
