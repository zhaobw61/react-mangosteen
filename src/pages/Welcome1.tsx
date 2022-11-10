import p1 from '../assets/images/wel1.svg'
import s from './welcome.module.scss'
export const Welcome1: React.FC = () => {
  return (
  <div>
    <img src={p1}></img>
    <h2 className={s.titleWrap}>
      会挣钱<br/>
      还要会省钱
    </h2>
  </div>
  )
}

