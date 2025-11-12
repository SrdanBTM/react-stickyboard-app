


import styles from './boardName.module.css'
import { useContext, useEffect } from 'react'
import { MainContext } from '../../../../../../context-provider/ContextProvider.jsx'


export default function BoardName({ mappedSticker }) {

  const { isFilterBoard } = useContext(MainContext)

  return (
    <div className={styles.container}>
      {isFilterBoard
        && <span>{mappedSticker.boardName}</span>}
    </div>
  )
}