

import styles from './boardsList.module.css'
import { useContext } from 'react'
import { MainContext } from '../../context-provider/ContextProvider.jsx'

export default function BoardsList() {

  const { boards } = useContext(MainContext)

  return (
    <div className={styles.container}>
      {boards.map((boardName, index) => {
        return (
          <p
            key={index}

          >
            {boardName}
          </p>
        )
      })}
    </div>
  )
}