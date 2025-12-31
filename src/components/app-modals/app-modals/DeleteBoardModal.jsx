

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


  const activeCount  = currentBoard.stickers.filter(sticker => !sticker.checked).length
  const checkedCount  = currentBoard.stickers.filter(sticker => sticker.checked).length

  const messageOption1 = `${activeCount} active sticker${activeCount === 1 ? '' : 's'}`
  const messageOption2 = `${checkedCount} checked sticker${checkedCount === 1 ? '' : 's'}`

  let message = null
  if (activeCount !== 0 && checkedCount === 0) {
    message = messageOption1
  } else if (activeCount === 0 && checkedCount !== 0) {
    message = messageOption2
  } else if (activeCount !== 0 && checkedCount !== 0) {
    message = `${messageOption1} and ${messageOption2}`
  }

  const messages = [
    `The selected board has ${message}.`,
    'Deleting this board will permanently remove all stickers on it.',
    'Do you want to continue?'
  ]


  const buttons = [
    { title: 'Delete', onClick: handleDelete },
    { title: 'Cancel', onClick: handleCancel }
  ]


  function handleDelete() {
    setOpenedAppModal(null)
    deleteBoard(setBoards, currentBoardId)
    changeCurrentBoardId(setBoards, currentBoardId, setCurrentBoardId)
  }


  function handleCancel() {
    setOpenedAppModal(null)
  }


  return (
    <AppModalBase
      messages={messages}
      buttons={buttons}
    />

  )
}