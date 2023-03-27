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
			],
		}
	},
}

module.exports = nextConfig
