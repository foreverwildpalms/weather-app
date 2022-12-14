import styles from "../styles/OtherData.module.scss";
import Image from "next/image";
import Drop from '../public/icons/drop.svg';
import Wind from '../public/icons/wind.svg';
import {FC} from "react";
import {Data} from '../types/types';

interface OtherDataProps {
    data: Data
}

const OtherData:FC<OtherDataProps> = ({data}) => {
    const humidity = data.humidity;
    const wind = data.speed;

    return (
        <div className={styles.wrapper}>
            <div className={styles.block}>
                <Image
                    src={Drop}
                    alt="drop icon"
                />
                <span>{humidity}%</span>
            </div>
            <div className={styles.block}>
                <Image
                    src={Wind}
                    alt="wind icon"
                />
                <span>{wind} м/с</span>
            </div>
        </div>
    );
}

export default OtherData;