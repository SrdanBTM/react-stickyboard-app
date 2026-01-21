

import AppModalBase from '../app-modal-base/AppModalBase.jsx'
import { useContext } from 'react'
import { MainContext } from '../../../contexts/MainContext.jsx'
import { AppModalsContext } from '../../../contexts/AppModalsContext.jsx'
import { deleteBoard } from '../../../helper-functions/HelperFunctionsHandleBoard.jsx'


export default function DeleteBoardModal() {

  const { setOpenedAppModal, boardToDeleteId, setBoardToDeleteId } = useContext(AppModalsContext)
  const { boards, setBoards } = useContext(MainContext)


  const boardToDelete = boards.find(board => board.boardId === boardToDeleteId)
  
  const activeCount = boardToDelete.stickers.filter(sticker => !sticker.checked).length
  const checkedCount = boardToDelete.stickers.filter(sticker => sticker.checked).length

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
    setBoardToDeleteId(null)
    setOpenedAppModal(null)
    deleteBoard(setBoards, boardToDeleteId)
  }


  function handleCancel() {
    setBoardToDeleteId(null)
    setOpenedAppModal(null)
  }


  return (
    <AppModalBase
      messages={messages}
      buttons={buttons}
    />

  )
}