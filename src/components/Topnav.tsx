import React from 'react'
import listSVG from '../assets/icons/list.svg'
import styles from './Topnav.module.scss'

export const Topnav: React.FC = () => {
  return (
    <div className={styles.topNavWrap}>
      <img src={listSVG} alt="" />
      <h1>TRON </h1>
    </div>
  )
}
