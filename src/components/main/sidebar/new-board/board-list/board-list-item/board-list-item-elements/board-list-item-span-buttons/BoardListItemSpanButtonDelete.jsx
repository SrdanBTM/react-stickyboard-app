

import styles from './boardListItemSpanButton.module.css'
import { IconDelete } from '../../../../../../../../icons/Icons.jsx'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../../contexts/MainContext.jsx'
import { AppModalsContext } from '../../../../../../../../contexts/AppModalsContext.jsx'
import { deleteBoard } from '../../../../../../../../helper-functions/HelperFunctionsHandleBoard.jsx'



export default function BoardListItemSpanButtonDelete({ mappedBoard }) {

  const { boards, setBoards, currentBoardId, setCurrentBoardId, setCurrentPageOnCheckedPanelBody } = useContext(MainContext)
  const { setOpenedAppModal, setBoardToDeleteId } = useContext(AppModalsContext)


  function handleClick(e) {
    e.stopPropagation()

    if (mappedBoard.stickers.length !== 0) {
      setBoardToDeleteId(mappedBoard.boardId)
      setOpenedAppModal('DeleteBoardModal')
      return
    }

    const deletedBoardIndex = boards.findIndex(board => board.boardId === mappedBoard.boardId)
    let nextBoardId = null
    if (deletedBoardIndex !== 0) {
      nextBoardId = boards[deletedBoardIndex - 1].boardId
    } else if (deletedBoardIndex === 0 && boards.length > 1) {
      nextBoardId = boards[deletedBoardIndex + 1].boardId
    } else if (deletedBoardIndex === 0 && boards.length === 1) {
      nextBoardId = null
    }
    
    deleteBoard(setBoards, mappedBoard.boardId)
    setCurrentBoardId(nextBoardId)
    setCurrentPageOnCheckedPanelBody(null)
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