/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	async rewrites() {
		return {
			beforeFiles: [
				// gamerank
				{
					source: '/',
					destination: 'https://gamerank-u3lo.onrender.com/',
					has: [
						{
							type: 'host',
							value: 'gamerank.sharongomez.com',
						},
					],
				},
				{
					source: '/:path*',
					destination: 'https://gamerank-u3lo.onrender.com/:path*',
					has: [
						{
							type: 'host',
							value: 'gamerank.sharongomez.com',
						},
					],
				},
				// budgettrackr
				{
					source: '/',
					destination: 'https://budgettrackr.onrender.com/',
					has: [
						{
							type: 'host',
							value: 'budgettrackr.sharongomez.com',
						},
					],
				},
				{
					source: '/:path*',
					destination: 'https://budgettrackr.onrender.com/:path*',
					has: [
						{
							type: 'host',
							value: 'budgettrackr.sharongomez.com',
						},
					],
				},
				// rin-blog
				{
					source: '/',
					destination: 'https://rin-blog.web.app/',
					has: [
						{
							type: 'host',
							value: 'rinblog.sharongomez.com',
						},
					],
				},
				{
					source: '/:path*',
					destination: 'https://rin-blog.web.app/:path*',
					has: [
						{
							type: 'host',
							value: 'rinblog.sharongomez.com',
						},
					],
				},
				// indecision
				{
					source: '/',
					destination: 'https://indecision.onrender.com/',
					has: [
						{
							type: 'host',
							value: 'indecision.sharongomez.com',
						},
					],
				},
				{
					source: '/:path*',
					destination: 'https://indecision.onrender.com/:path*',
					has: [
						{
							type: 'host',
							value: 'indecision.sharongomez.com',
						},
					],
				},
			],
		}
	},
}

module.exports = nextConfig
