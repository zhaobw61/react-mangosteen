import React, { useState } from 'react'
import { AddItemFloatButton } from '../components/AddItemFloatButton'
import type { TimeRange } from '../components/TimeRangerPicker'
import { TimeRangerPicker } from '../components/TimeRangerPicker'
import { TopNav } from '../components/TopNav'
import { TopMenu } from '../components/TopMenu'
// import { MenuContext } from '../contexts/menuContext'
import { useMenuStore } from '../stores/useMenuStore'
import { ItemsList } from './ItemsPage/ItemsList'
import { ItemsSummary } from './ItemsPage/ItemsSummary'
import styles from './ItemPage.module.scss'

// interface MenuContextT {
//   setVisible?: (visible: boolean) => {}
//   visible?: boolean
// }

export const ItemPage: React.FC = () => {
  const [timeRange, setTimeRange] = useState<TimeRange>('thisMonth')
  const [items, setItems] = useState<Item[]>([
    {
      id: 13,
      user_id: 123,
      amount: 123,
      note: 'dq1e',
      tag_ids: [1],
      happen_at: '123123',
      created_at: '12asd213',
      updated_at: 'a12312',
      kind: 'expenses',
      deleted_at: 'string'
    }, {
      id: 33311233,
      user_id: 31666112323,
      amount: 777123,
      note: 'gggdq1e',
      tag_ids: [1],
      happen_at: 'g1g23123',
      created_at: '1g212asd213',
      updated_at: 'a2312312',
      kind: 'expenses',
      deleted_at: 's123123tring'
    }
  ])
  // const [visible, setVisible] = useState(false)
  const { visible } = useMenuStore()
  return (
    <div>
      {/* <MenuContext.Provider value={{
        visible,
        setVisible
      }}> */}
        <div className={styles.navWrap}>
          <TopNav />
          <TimeRangerPicker selected={timeRange} onSelected={setTimeRange} />
        </div>
        <ItemsSummary />
        <ItemsList items={items} />
        <AddItemFloatButton />
        { visible ? <TopMenu /> : null}
      {/* </MenuContext.Provider> */}
    </div>
  )
}
