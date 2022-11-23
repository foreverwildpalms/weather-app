import React, {FC} from 'react';
import styles from "../styles/Main.module.scss";
import PlaceAndTime from "./PlaceAndTime";
import Degrees from "./Degrees";
import OtherData from "./OtherData";
import theme from "../utils/theme";
import {Data} from '../types/types';

interface CardProps {
    data: Data,
    date: string
}

const Card: FC<CardProps> = ({data, date}) => {
    const currentTheme = theme(data.weather.id);

    return (
        <div className={styles[currentTheme.class]}>
            <PlaceAndTime data={data.weather} date={date} />
            <Degrees data={data} icon={currentTheme.icon} />
            <OtherData data={data} />
        </div>
    );
}

export default Card;