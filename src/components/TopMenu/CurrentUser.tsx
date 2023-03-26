import style from './CurrentUser.module.scss'
export const CurrentUser: React.FC = () => {
  return (
    <div className={style.currentUserWrap}>
      <h2>未登录的用户</h2>
      <div>点击这里登录</div>
    </div>
  )
}
