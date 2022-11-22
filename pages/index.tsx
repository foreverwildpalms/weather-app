import MainLayout from "../components/MainLayout";
import styles from "../styles/Main.module.scss";
import Card from "../components/Card";
import {FC} from "react";
import getDate from "../components/utils/getDate";

interface HomeProps {
    data: any
}

const Home: FC<HomeProps> = ({data}) => {
    const date = getDate();

    return (
    <MainLayout title="Главная">
        <div className={styles.container}>
            <Card data={data} date={date} />
        </div>
    </MainLayout>
    )
}

export async function getServerSideProps() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=-59.57&lon=30.19&appid=7d4583ae52e89493de4a23a286ddf221&units=metric&lang=ru');
    const data = await response.json();

    return {
        props: {
            data
        }
    }
}

export default Home;
