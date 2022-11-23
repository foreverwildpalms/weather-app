import Clouds from '../public/icons/cloudy.svg';
import Rain from '../public/icons/rainy.svg';
import Snow from '../public/icons/snowy.svg';
import Thunderstorm from '../public/icons/thunderstorm.svg';
import Sunny from '../public/icons/sunny.svg';


const theme = (id: any) => {
    if (id === 800) {
        return {
            icon: Sunny,
            class: 'wrapperSunny'
        }
    } else if (id > 700) {
        return {
            icon: Clouds,
            class: 'wrapperCloudy'
        }
    } else if (id >= 600) {
        return {
            icon: Snow,
            class: 'wrapperSnowy'
        }
    } else if (id >= 300) {
        return {
            icon: Rain,
            class: 'wrapperRainy'
        }
    } else if (id >= 200) {
        return {
            icon: Thunderstorm,
            class: 'wrapperThunderstorm'
        }
    } else {
        return {
            icon: Clouds,
            class: 'wrapperCloudy'
        }
    }
}

export default theme;