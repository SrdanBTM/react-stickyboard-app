

import styles from './boardListItemSpanButton.module.css'
import { IconDelete } from '../../../../../../../../icons/Icons.jsx'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../../contexts/MainContext.jsx'
import { AppModalsContext } from '../../../../../../../../contexts/AppModalsContext.jsx'
import { deleteBoardAndSetCurrentBoardId } from '../../../../../../../../helper-functions/HelperFunctionsHandleBoard.jsx'



export default function BoardListItemSpanButtonDelete({ mappedBoard }) {

  const { setBoards, setCurrentBoardId } = useContext(MainContext)
  const { setOpenedAppModal, setBoardToDeleteId } = useContext(AppModalsContext)


  function handleClick() {
    if (mappedBoard.stickers.length === 0) {
      deleteBoardAndSetCurrentBoardId(setBoards, mappedBoard.boardId, setCurrentBoardId)

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