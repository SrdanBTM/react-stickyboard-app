

import AppModalBase from '../app-modal-base/AppModalBase.jsx'
import { useContext } from 'react'
import { MainContext } from '../../../contexts/MainContext.jsx'
import { AppModalsContext } from '../../../contexts/AppModalsContext.jsx'


export default function DeleteAllCheckedStickersModal() {

  const { setOpenedAppModal } = useContext(AppModalsContext)
  const { boards, currentBoardId, setBoards, setCurrentBoardId } = useContext(MainContext)
  const currentBoard = boards.find(board => board.boardId === currentBoardId)


  const messages = [
    `The selected board has ${currentBoard.stickers.length} ${''} ${currentBoard.stickers.length === 1 ? 'sticker.' : 'stickers.'}`,
    'Deleting this board will also remove all stickers on it.',
    'Do you want to continue?'
  ]

  const buttons = [
    { title: 'Delete', onClick: handleDelete },
    { title: 'Close', onClick: handleClose }
  ]


  function handleDelete() {
    setOpenedAppModal(null)
    setBoards(prev => {
      const filtered = prev.filter(board => board.boardId !== currentBoardId)

      if (filtered.length > 0) {
        setCurrentBoardId(filtered[filtered.length - 1].boardId)
      } else {
        setCurrentBoardId(null)
      }

      return filtered
    })
  }


  function handleClose() {
    setOpenedAppModal(null)
    setBoards(prev => prev.map(board => {
      return (
        board.boardId === currentBoardId
          ? { ...board, isDeleteShowed: false }
          : board
      )
    }))
  }


  return (
    <AppModalBase
      messages={messages}
      buttons={buttons}
    />

  )
}