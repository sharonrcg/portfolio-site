/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	async rewrites() {
		return {
			beforeFiles: [
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
			],
		}
	},
}

module.exports = nextConfig
