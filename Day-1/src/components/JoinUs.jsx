import React from 'react'
import styles from './JoinUs.module.css'

export default function JoinUs(props) {
  return (
    <button className={styles.join}>{props.title}</button>
  );
}

