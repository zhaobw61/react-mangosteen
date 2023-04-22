import useSWR from 'swr'
import React from 'react'
import { ajax } from '../../lib/ajax'
import styles from './ItemsList.module.scss'

interface Props {
}

export const ItemsList: React.FC<Props> = () => {
  const pageIndex = 0
  const { items1, error } = useSWR(`/api/v1/items?page=${pageIndex + 1}`, async (path) => {
    const response = await ajax.get<Resources<Item>>(path)
    console.log('response', response.data)
    return response.data
  })
  const items: [Item] = [
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
  ]
  const onLoadMore = () => {
    console.log('onLoadMore')
  }
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
        <button className='button' onClick={onLoadMore}>加载更多</button>
      </div>
    </div>
  )
}
