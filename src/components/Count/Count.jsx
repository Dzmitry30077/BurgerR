import { useState } from 'react'
import s from './Count.module.css'

export const Count = props => {
  const [count, setCount] = useState(props.count)

  const addCount = () => {
    setCount(count + 1)
  }

  const removeCount = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  return (
    <>
      <div className={s.count}>
        <button
          className={s.minus}
          onClick={removeCount}
          disabled={count === 1}
        >
          -
        </button>
        <p className={s.amount}>{count}</p>
        <button className={s.plus} onClick={addCount}>
          +
        </button>
      </div>
    </>
  )
}
