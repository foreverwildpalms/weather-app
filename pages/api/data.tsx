import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
    message: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    const lat = '33.44';
    const lon = '-94.04';
    const getWeatherData = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${process.env.OPENWEATHER_API_KEY}`
    );
    const data = await getWeatherData.json();
    res.status(200).json(data);
}