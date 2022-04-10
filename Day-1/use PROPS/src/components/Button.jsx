import React from 'react'
import styles from './JoinUs.module.css'

export default function Button(props) {
  return (
    <>
    <button className={styles.join}>{props.JoinUs}</button>
    <button className={styles.settings}>{props.Settings}</button>
    <button className={styles.login}>{props.Login}</button>
    <button className={styles.contact}>{props.Contactus}</button>
    <button className={styles.search}>{props.Search}</button>
    <button className={styles.help}>{props.Help}</button>
    <button className={styles.home}>{props.Home}</button>
    <button className={styles.download}>{props.Download}</button>

  
    </>
  );
}

