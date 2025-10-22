

import styles from './deleteBoardModal.module.css'
import Delete from './delete/Delete.jsx'
import Close from './close/Close.jsx'
import { useContext } from 'react'
import { MainContext } from '../../../context-provider/ContextProvider.jsx'


export default function DeleteBoardModal() {

  const { boards, currentBoardId } = useContext(MainContext)
  const currentBoard = boards.find(board => board.boardId === currentBoardId)

  return (
    <div className={styles.container}>
      <div className={styles.content}>

        <div className={styles.message}>
          <p>The selected board has {currentBoard.stickers.length} {''}
            {currentBoard.stickers.length === 1 ? 'sticker.' : 'stickers.'}</p>
          <p>Deleting this board will also remove all stickers on it.</p>
          <p>Do you want to continue?</p>
        </div>

        <div className={styles.buttons}>
          <Delete />
          <Close />
        </div>
        
      </div>
    </div>
  )
}