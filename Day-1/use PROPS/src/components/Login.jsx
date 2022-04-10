import React from 'react'
import styles from './JoinUs.module.css';

export default function login(props) {
  return (
    <button className={styles.login}>{props.title}</button>
  )
}
