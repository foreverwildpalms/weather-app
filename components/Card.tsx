import React, {FC} from 'react';
import styles from "../styles/Main.module.scss";
import Search from "./Search";
import PlaceAndTime from "./PlaceAndTime";
import Degrees from "./Degrees";
import OtherData from "./OtherData";
import theme from "./theme/theme";

interface CardProps {
    data: any
}

const Card: FC<CardProps> = ({data}) => {
    const currentTheme = theme(200
        // data.weather[0].id
    );

    return (
        <div className={styles[currentTheme.class]}>
            <Search />
            <PlaceAndTime data={data.weather[0]} />
            <Degrees data={data.main} icon={currentTheme.icon} />
            <OtherData data={{...data.main, wind: data.wind}} />
        </div>
    );
}

export default Card;