import styles from '../styles/PlaceAndTime.module.scss';
import {FC} from "react";

interface DegreesProps {
    data: any
}

const PlaceAndTime: FC<DegreesProps> = ({data}) => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.titleBig}>Санкт-Петербург</h2>
            <h3 className={styles.titleSmall}>вторник, 11:28</h3>
            <h3 className={styles.titleSmall}>{data.description}</h3>
        </div>
    );
}

export default PlaceAndTime;