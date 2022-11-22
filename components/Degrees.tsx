import styles from '../styles/Degrees.module.scss';
import {FC} from "react";
import Image from "next/image";

interface DegreesProps {
    data: any,
    icon: any
}

const Degrees: FC<DegreesProps> = ({data, icon}) => {
    const temp = Math.round(data.temp);
    const feels_like = Math.round(data.feels_like);

    return (
        <div className={styles.wrapper}>
            <div className={styles.degrees}>{temp}°</div>
            <div>
                <Image
                    src={icon}
                    alt="weather icon"
                    width={70}
                    height={70}
                />
            </div>
            <div className={styles.description}>
                ощущается как
                <span> {feels_like}°</span>
            </div>
        </div>
    );
}

export default Degrees;