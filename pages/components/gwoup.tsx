import styles from '@/styles/Home.module.css'
import Sidebar from "./sidebar"
import Head from 'next/head'

export default function Gwoup(){
    return(
        <>
            <Head>
                <title>DEVLOOP</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <Sidebar/>
            <div className={styles.view}>
                <h1>Gwoup</h1>
            </div>
        </>   
    )
}