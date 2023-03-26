import { NavLink } from 'react-router-dom'
import chartSVG from '../../assets/icons/chart.svg'
import exportSVG from '../../assets/icons/export.svg'
import categorySVG from '../../assets/icons/category.svg'
import notySVG from '../../assets/icons/noty.svg'
import styles from './Menu.module.scss'

const items = [
  { key: 'chart', text: '统计图表', to: '/chart', svgName: chartSVG },
  { key: 'export', text: '导出数据', to: '/export', svgName: exportSVG },
  { key: 'category', text: '自定义分类', to: '/chart', svgName: categorySVG },
  { key: 'chart', text: '统计图表', to: '/chart', svgName: notySVG }
]

export const Menu: React.FC = () => {
  return (
    <ul className={styles.menuWrap}>
      {
        items.map((item) => {
          return <li key={item.key}>
                    <NavLink to={item.to}>
                      <img src={item.svgName} alt="" />
                      { item.text }
                    </NavLink>
                  </li>
        })
      }
    </ul>
  )
}
