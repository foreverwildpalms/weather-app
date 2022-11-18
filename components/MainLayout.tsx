import Head from 'next/head'
import React, {FC} from "react";

interface MainLayoutProps {
    children: React.ReactNode,
    title: string
}

const MainLayout: FC<MainLayoutProps> =  ({children, title}) => {
    return (
        <>
            <Head>
                <title />
            </Head>
            {children}
        </>
        )
}

export default MainLayout;