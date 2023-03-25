import sharon from '../../public/images/sharon.jpg'
import kai from '../../public/images/kai.jpg'
import sharon_and_juan from '../../public/images/sharon_and_juan.jpg'

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
			"I am a creative individual who enjoys building <span>beautiful, responsive, and intuitive</span> web applications. I love learning new things and I'm always looking for <span>opportunities</span> to improve my skills.",
		polaroid: polaroids[0],
	},
	{
		paragraph:
			"I currently work at Casebook PBC as a <span>front-end engineer</span>. For the last 2+ years I've helped build and maintain the Casebook platform, which allows human services agencies to better serve their clients.",
		polaroid: polaroids[1],
	},
	{
		paragraph:
			"When I'm not coding, I enjoy <span>watching movies, playing video games, and doodling</span>. If you're interested in learning more (or just want to say hi), please don't hesitate to shoot me a message!",
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

export {education, experiences, polaroids, rows}
