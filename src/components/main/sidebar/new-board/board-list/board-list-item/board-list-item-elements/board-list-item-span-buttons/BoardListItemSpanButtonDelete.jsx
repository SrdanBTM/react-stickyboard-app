

import styles from './boardListItemSpanButton.module.css'
import { IconDelete } from '../../../../../../../../icons/Icons.jsx'
import { useContext, useEffect } from 'react'
import { MainContext } from '../../../../../../../../contexts/MainContext.jsx'
import { AppModalsContext } from '../../../../../../../../contexts/AppModalsContext.jsx'



export default function BoardListItemSpanButtonDelete({ mappedBoard }) {

  const { boards, setBoards, currentBoardId, setCurrentBoardId } = useContext(MainContext)
  const { setOpenedAppModal } = useContext(AppModalsContext)


  function handleClick() {
    if (mappedBoard.stickers.length === 0) {

      setBoards(prevBoards => {
        const filtered = prevBoards.filter(
          board => board.boardId !== currentBoardId
        )

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


  useEffect(() => {
    console.log(boards.length);


  }, [currentBoardId])


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