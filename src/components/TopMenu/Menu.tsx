import chartSVG from '../../assets/icons/chart.svg'
import exportSVG from '../../assets/icons/export.svg'
import categorySVG from '../../assets/icons/category.svg'
import notySVG from '../../assets/icons/noty.svg'
import styles from './Menu.module.scss'

export const Menu: React.FC = () => {
  return (
    <ul className={styles.menuWrap}>
      <li><img src={chartSVG} alt="" />统计图表</li>
      <li><img src={exportSVG} alt="" />导出数据</li>
      <li><img src={categorySVG} alt="" />自定义分类</li>
      <li><img src={notySVG} alt="" />记账提醒</li>
    </ul>
  )
}
