

import styles from './boardListItemSpanButton.module.css'
import { IconDelete } from '../../../../../../../../icons/Icons.jsx'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../../contexts/MainContext.jsx'
import { ThemeContext } from '../../../../../../../../contexts/ThemeContext.jsx'
import { AppModalsContext } from '../../../../../../../../contexts/AppModalsContext.jsx'
import { deleteBoard } from '../../../../../../../../helper-functions/HelperFunctionsHandleBoard.jsx'
import { changeCurrentBoardId } from '../../../../../../../../helper-functions/HelperFunctions.jsx'



export default function BoardListItemSpanButtonDelete({ mappedBoard }) {

  const { setBoards, setCurrentBoardId } = useContext(MainContext)
  const { theme } = useContext(ThemeContext)
  const { setOpenedAppModal } = useContext(AppModalsContext)


  function handleClick() {
    if (mappedBoard.stickers.length === 0) {
      deleteBoard(setBoards, mappedBoard.boardId)
      changeCurrentBoardId(setBoards, mappedBoard.boardId, setCurrentBoardId)
    } else {
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