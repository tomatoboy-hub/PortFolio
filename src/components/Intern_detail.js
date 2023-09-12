import React from 'react'
import styles from './styles/InternDetail.module.css';

function Intern_detail({company}) {
  return (
    <div className={styles.card}>
      <div className={styles.cardTitle}>{company.Name}</div>
      <div className={styles.cardDetail}>{company.In}</div>
      <div className={styles.cardDetail}>{company.Out}</div>
      <div className={styles.cardDetail}>{company.Content}</div>
    </div>
  )
}

export default Intern_detail