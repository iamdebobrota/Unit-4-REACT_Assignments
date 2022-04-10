import React from "react";
import styles from './JoinUs.module.css';

export default function Home(props){
   
        return(
           
                <button className={styles.home}>{props.title}</button>
           
        )
  
}