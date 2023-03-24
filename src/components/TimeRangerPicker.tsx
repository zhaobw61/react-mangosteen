import React from 'react'
import styles from './TimeRangerPicker.module.scss'

export const TimeRangerPicker: React.FC = () => {
  return (
    <div className={styles.timeRangerPickerWrap}>
      <ol>
        <li>本月</li>
        <li>上个月</li>
        <li>今年</li>
        <li>自定义时间</li>
      </ol>
    </div>
  )
}
