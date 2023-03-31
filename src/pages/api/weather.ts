import type {NextApiRequest, NextApiResponse} from 'next'

type Data = {
	name: string
	temp: string
	desc: string
}

export default async function handler(
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
