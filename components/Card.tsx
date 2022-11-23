import React, {FC} from 'react';
import styles from "../styles/Main.module.scss";
import PlaceAndTime from "./PlaceAndTime";
import Degrees from "./Degrees";
import OtherData from "./OtherData";
import theme from "./utils/theme";

interface CardProps {
    data: any,
    date: any
}

const Card: FC<CardProps> = ({data, date}) => {
    const currentTheme = theme(data.weather[0].id);

    return (
        <div className={styles[currentTheme.class]}>
            <PlaceAndTime data={data.weather[0]} date={date} />
            <Degrees data={data.main} icon={currentTheme.icon} />
            <OtherData data={{...data.main, wind: data.wind}} />
        </div>
    );
}

export default Card;