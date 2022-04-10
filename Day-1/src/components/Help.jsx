import React from 'react'
import styles from './JoinUs.module.css';

export default function Help(props) {
  return (
    <button className={styles.help}>{props.title}</button>
  )
}
