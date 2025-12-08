


import styles from './boardName.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../context-provider/ContextProvider.jsx'


export default function BoardName({ mappedSticker }) {

  const { currentBoardPanel } = useContext(MainContext)

  return (
    <div className={styles.container}>
      {currentBoardPanel === 'board'
        && <span>{mappedSticker.boardName}</span>}
    </div>
  )
}