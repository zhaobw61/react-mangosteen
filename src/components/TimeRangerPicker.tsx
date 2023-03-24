import React from 'react'
import styles from './TimeRangerPicker.module.scss'
export type TimeRange = 'thisMonth' | 'lastMonth' | 'thisYear' | 'custom'
interface Props {
  selected: TimeRange
  onSelected: (selected: TimeRange) => void
}

export const TimeRangerPicker: React.FC<Props> = ({ selected, onSelected }) => {
  const timeRanges: { key: TimeRange; text: string }[] = [
    { key: 'thisMonth', text: '本月' },
    { key: 'lastMonth', text: '上月' },
    { key: 'thisYear', text: '今年' },
    { key: 'custom', text: '自定义时间' }
  ]
  return (
    <div className={styles.timeRangerPickerWrap}>
      <ol>
        {
          timeRanges.map((tr) => {
            return <li key={tr.key} className={tr.key === selected ? styles.selected : ''} onClick={() => {
              onSelected && onSelected(tr.key)
            }}>{tr.text}</li>
          })
        }
      </ol>
    </div>
  )
}
