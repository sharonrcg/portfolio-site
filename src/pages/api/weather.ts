import type {NextApiRequest, NextApiResponse} from 'next'

const allowCors =
	(fn: Function) => async (req: NextApiRequest, res: NextApiResponse<Data>) => {
		res.setHeader('Access-Control-Allow-Credentials', 'true')
		res.setHeader('Access-Control-Allow-Origin', '*')

		res.setHeader('Access-Control-Allow-Methods', 'GET')
		res.setHeader(
			'Access-Control-Allow-Headers',
			'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
		)
		if (req.method === 'OPTIONS') {
			res.status(200).end()
			return
		}
		return await fn(req, res)
	}

type Data = {
	name: string
	temp: string
	desc: string
}

const handler = async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>,
) {
	const zipCode = req.query.zipCode
	const location = `${zipCode},US`
	const geoLocationRes = await fetch(
		`http://api.openweathermap.org/geo/1.0/zip?zip=${location}&appid=${process.env.OPENWEATHER_API_KEY}`,
	)
	const geoLocationData = await geoLocationRes.json()
	const {lat, lon} = geoLocationData

	const weatherRes = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPENWEATHER_API_KEY}&units=imperial`,
	)
	const weatherData = await weatherRes.json()

	res.status(200).json({
		name: weatherData.name,
		temp: weatherData.main.temp,
		desc: weatherData.weather[0].description,
	})
}

export default allowCors(handler)
