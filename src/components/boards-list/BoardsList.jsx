

import styles from './boardsList.module.css'
import { useContext, useState } from 'react'
import { MainContext } from '../../context-provider/ContextProvider.jsx'

export default function BoardsList() {

  const BASE_URL = import.meta.env.BASE_URL

  const [isMouseOver, setIsMouseOver] = useState(false)

  const { boards } = useContext(MainContext)

  function handleMouseOver() {
    setIsMouseOver(true)
  }

  function handleMouseLeave() {
    setIsMouseOver(false)
  }

  const editButton =
    <div className={styles.editButton}>
      <img src={`${BASE_URL}images/icon-edit2.png`} alt="edit" />
    </div>


  return (
    <div>
      {boards.map((board, index) => {
        return (
          <div
            key={index}
            className={styles.boardName}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
          >
            <p>{board.boardName}</p>

            {isMouseOver && editButton}
          </div>

        )
      })}
    </div>
  )
}