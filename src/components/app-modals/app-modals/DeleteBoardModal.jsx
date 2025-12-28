

import AppModalBase from '../app-modal-base/AppModalBase.jsx'
import { useContext } from 'react'
import { MainContext } from '../../../contexts/MainContext.jsx'
import { AppModalsContext } from '../../../contexts/AppModalsContext.jsx'
import { changeCurrentBoardId } from '../../../helper-functions/HelperFunctions.jsx'
import { deleteBoard } from '../../../helper-functions/HelperFunctionsHandleBoard.jsx'


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
    deleteBoard(setBoards, currentBoardId)
    changeCurrentBoardId(setBoards, currentBoardId, setCurrentBoardId)
  }


  function handleClose() {
    setOpenedAppModal(null)
  }


  return (
    <AppModalBase
      messages={messages}
      buttons={buttons}
    />

  )
}