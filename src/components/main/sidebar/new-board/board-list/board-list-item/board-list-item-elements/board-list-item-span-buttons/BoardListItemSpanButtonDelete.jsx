

import styles from './boardListItemSpanButton.module.css'
import { IconDelete } from '../../../../../../../../icons/Icons.jsx'
import { useContext, useEffect } from 'react'
import { MainContext } from '../../../../../../../../contexts/MainContext.jsx'
import { AppModalsContext } from '../../../../../../../../contexts/AppModalsContext.jsx'
import { deleteBoardAndSetCurrentBoardId } from '../../../../../../../../helper-functions/HelperFunctionsHandleBoard.jsx'



export default function BoardListItemSpanButtonDelete({ mappedBoard }) {

  const { boards, setBoards, currentBoardId, setCurrentBoardId } = useContext(MainContext)
  const { setOpenedAppModal } = useContext(AppModalsContext)


  function handleClick() {
    if (mappedBoard.stickers.length === 0) {
      deleteBoardAndSetCurrentBoardId(setBoards, currentBoardId, setCurrentBoardId)

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