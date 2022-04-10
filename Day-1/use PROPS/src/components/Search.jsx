import React from 'react'
import styles from './JoinUs.module.css';

export default function search(props) {
  return (
    <button className={styles.search}>{props.title}</button>
  )
}
