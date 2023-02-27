import classNames from 'classnames'
import { Container } from '../Container/Container'
import s from './Navigation.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { changeCategory } from '../../store/category/categorySlice'

export const Navigation = () => {
  const { category, activeCategory } = useSelector(state => {
    return state.category
  })
  const dispatch = useDispatch()

  return (
    <nav className={s.navigation}>
      <Container className={s.container}>
        <ul className={s.list}>
          {category.map((item, i) => (
            <li key={i} className={s.item}>
              <button
                className={classNames(
                  s.button,
                  activeCategory === i ? s.button_active : ''
                )}
                style={{ backgroundImage: `url(${item.image})` }}
                onClick={() => {
                  dispatch(changeCategory({ indexCategory: i }))
                }}
              >
                {item.rus}
              </button>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  )
}
