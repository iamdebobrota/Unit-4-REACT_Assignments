import React from 'react'
import styles from './JoinUs.module.css'

export default function Download(props) {
  return (
    <button className={styles.download}>{props.title}</button>
  )
}
