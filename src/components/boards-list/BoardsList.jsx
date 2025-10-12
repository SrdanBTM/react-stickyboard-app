

import styles from './boardsList.module.css'
import { useContext } from 'react'
import { MainContext } from '../../context-provider/ContextProvider.jsx'

export default function BoardsList() {

  const BASE_URL = import.meta.env.BASE_URL

  const { boards } = useContext(MainContext)

  return (
    <div>
      {boards.map((board, index) => {
        return (
          <div key={index} className={styles.boardName}>
            <p>{board.boardName}</p>
            <img src={`${BASE_URL}images/icon-edit1.png`} alt="edit" />
          </div>

        )
      })}
    </div>
  )
}