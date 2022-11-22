import styles from '../styles/PlaceAndTime.module.scss';
import {FC} from "react";

interface DegreesProps {
    data: any,
    date: any
}

const PlaceAndTime: FC<DegreesProps> = ({data, date}) => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.titleBig}>Санкт-Петербург</h2>
            <h3 className={styles.titleSmall}>{date}</h3>
            <h3 className={styles.titleSmall}>{data.description}</h3>
        </div>
    );
}

export default PlaceAndTime;