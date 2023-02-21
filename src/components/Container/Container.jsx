import s from './Container.module.css'
import classNames from 'classnames'

export const Container = ({ children }) => {
  return <div className={classNames(s.container)}>{children}</div>
}
