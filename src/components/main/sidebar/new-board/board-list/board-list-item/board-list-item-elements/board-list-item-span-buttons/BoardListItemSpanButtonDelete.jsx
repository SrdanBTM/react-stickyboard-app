

import styles from './boardListItemSpanButton.module.css'
import { IconDelete } from '../../../../../../../../icons/Icons.jsx'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../../contexts/MainContext.jsx'
import { ThemeContext } from '../../../../../../../../contexts/ThemeContext.jsx'
import { AppModalsContext } from '../../../../../../../../contexts/AppModalsContext.jsx'
import { deleteBoard } from '../../../../../../../../helper-functions/HelperFunctionsHandleBoard.jsx'



export default function BoardListItemSpanButtonDelete({ mappedBoard }) {

  const { setBoards, currentBoardId, setCurrentBoardId } = useContext(MainContext)
  const { setOpenedAppModal } = useContext(AppModalsContext)


  function handleClick() {
    if (mappedBoard.stickers.length === 0) {
      deleteBoard(setBoards, mappedBoard.boardId)

      setBoards(prev => {
        const filtered = prev.filter(board => board.boardId !== currentBoardId)
    
        if (filtered.length > 0) {
          setCurrentBoardId(filtered[filtered.length - 1].boardId)
        } else {
          setCurrentBoardId(null)
        }
    
        return filtered
      })

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