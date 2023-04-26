import styles from '@/styles/Home.module.css'
import { Dashboard } from "@mui/icons-material"
import { useState } from "react";
import Link from 'next/link';
import View from '../view';




export default function Sidebar(){

    const [viewTitle,setviewTitle]=useState("")

    const handleView=(data:any)=>{
        setviewTitle(data)
        alert(viewTitle)
        {
            <View>
                
            </View>
        }
    }

    return(
        <div className={styles.sidebar}>
            <h1>Devloop</h1>
            <div className={styles.coverNav}>
                {/* <Link className={styles.Link} href={{pathname:"/view",query:{title:"Direksyon"}}} >Direksyon</Link>
                <Link className={styles.Link} href={{pathname:"/view",query:{title:"Gwoup"}}}>gwoup</Link>
                <Link className={styles.Link} href={{pathname:"/view",query:{title:"Wol"}}}>Wòl</Link> */}
                <ul>
                    <li onClick={()=>{handleView("Direksyon")}}>Direksyon</li>
                    <li onClick={()=>{handleView("Gwoup")}}>Gwoup</li>
                    <li>Wol</li>
                </ul>
            </div>
        </div>
    )
        
}