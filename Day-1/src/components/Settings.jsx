import React from 'react';
import styles from './JoinUs.module.css';

export default function Settings(props) {
  return (
    <button className={styles.settings}>{props.title}</button>
  )
}
