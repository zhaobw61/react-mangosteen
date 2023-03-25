import React from 'react'
import styles from './ItemsList.module.scss'

interface Props {
  items: Item[]
}

export const ItemsList: React.FC<Props> = ({ items }) => {
  return (
    <div className={styles.ItemsList}>
      <ol>
        {items.map(item => <li key={item.id}>
          <div className={styles.typeLogo}>
            logo
          </div>
          <div className={styles.name}>
            旅行
          </div>
          <div className={styles.time}>
            2011年1月11号
          </div>
          <div className={styles.amount}>999</div>
        </li>)}
      </ol>
      <div className='buttonWrap'>
        <button className='button'>加载更多</button>
      </div>
    </div>
  )
}
