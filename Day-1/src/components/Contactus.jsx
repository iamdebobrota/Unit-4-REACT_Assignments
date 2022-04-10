import React from 'react'
import styles from './JoinUs.module.css';

export default function Contactus(props) {
  return (
    <button className={styles.contact}>{props.title}</button>
  )
}
