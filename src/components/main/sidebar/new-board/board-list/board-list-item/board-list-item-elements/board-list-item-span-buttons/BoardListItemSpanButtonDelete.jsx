

import styles from './boardListItemSpanButton.module.css'
import { IconDelete } from '../../../../../../../../icons/Icons.jsx'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../../contexts/MainContext.jsx'
import { AppModalsContext } from '../../../../../../../../contexts/AppModalsContext.jsx'
import { deleteBoard } from '../../../../../../../../helper-functions/HelperFunctionsHandleBoard.jsx'



export default function BoardListItemSpanButtonDelete({ mappedBoard }) {

  const { setBoards } = useContext(MainContext)
  const { setOpenedAppModal, setBoardToDeleteId } = useContext(AppModalsContext)


  function handleClick(e) {
    e.stopPropagation()
    
    if (mappedBoard.stickers.length === 0) {
      deleteBoard(setBoards, mappedBoard.boardId)

    } else {
      setBoardToDeleteId(mappedBoard.boardId)
      setOpenedAppModal('DeleteBoardModal')
    }
  }


  return (
    <button
      className={`${styles.container} icon iconDanger`}
      onClick={handleClick}
      title='Delete board'
    >
      <IconDelete />
    </button>
  )
}