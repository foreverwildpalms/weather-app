export interface Weather {
    description: string,
    icon: string,
    id: number,
    main: string
}

export interface Data {
    deg: number,
    feels_like: number,
    grnd_level: number,
    gust: number,
    humidity: number,
    pressure: number,
    sea_level: number,
    speed: number,
    temp: number,
    temp_max: number,
    temp_min: number,
    weather: Weather
}