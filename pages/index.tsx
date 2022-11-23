import MainLayout from "../components/MainLayout";
import styles from "../styles/Main.module.scss";
import Card from "../components/Card";
import React, {FC, useContext} from "react";
import getDate from "../components/utils/getDate";
import AppProvider, {AppContext} from "../components/AppContext";

interface HomeProps {
    data: any
}

const Home: FC<HomeProps> = ({data}) => {
    const date = getDate();

    return (
        <AppProvider>
            <MainLayout title="Главная">
                <div className={styles.container}>
                    <Card data={data} date={date} />
                </div>
            </MainLayout>
        </AppProvider>
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
