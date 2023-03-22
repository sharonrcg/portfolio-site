import sharon from '../../public/images/sharon.jpg'
import kai from '../../public/images/kai.jpg'
import sharon_and_juan from '../../public/images/sharon_and_juan.jpg'

export const polaroids = [
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

export const rows = [
	{
		paragraph:
			"I am a passionate individual who enjoys creating beautiful, responsive and intuitive web applications. I love learning new things and I'm always looking for opportunities to improve my skills.",
		polaroid: polaroids[0],
	},
	{
		paragraph:
			"I currently work at Casebook PBC as a front-end engineer. For the last 2+ years I've helped build and maintain the Casebook platform, which allows human services agencies to better serve their clients.",
		polaroid: polaroids[1],
	},
	{
		paragraph:
			"When I'm not coding, I enjoy watching movies, playing video games, and creating art. If you're interested in learning more (or just want to say hi), please don't hesitate to reach out!",
		polaroid: polaroids[2],
	},
]
