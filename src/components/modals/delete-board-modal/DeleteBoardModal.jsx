

import MainModal from '../main-modal/MainModal.jsx'
import { useContext } from 'react'
import { MainContext } from '../../../context-provider/ContextProvider.jsx'


export default function DeleteAllCheckedStickersModal() {

  const { boards, currentBoardId, setIsDeleteBoardModalOpen, setBoards, setCurrentBoardId } = useContext(MainContext)
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
    setIsDeleteBoardModalOpen(false)
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
    setIsDeleteBoardModalOpen(false)
    setBoards(prev => prev.map(board => {
      return (
        board.boardId === currentBoardId
          ? { ...board, isDeleteShowed: false }
          : board
      )
    }))
  }


  return (
    <MainModal
      messages={messages}
      buttons={buttons}
    />

  )
}