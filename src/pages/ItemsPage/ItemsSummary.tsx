import React from 'react'
import styles from './ItemsSummary.module.scss'

export const ItemsSummary: React.FC = () => {
  return (
    <ol className={styles.ItemsPageWrap}>
      <li className={styles.incomeItem}>
        <div>收入</div>
        <div>1000</div>
      </li>
      <li className={styles.payOutItem}>
        <div>支出</div>
        <div>1000</div>
      </li>
      <li className={styles.netInComeItem}>
        <div>收入</div>
        <div>10000</div>
      </li>
    </ol>
  )
}
