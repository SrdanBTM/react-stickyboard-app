

import AppModalBase from '../../modal-bases/app-modal-base/AppModalBase.jsx'
import { useContext } from 'react'
import { MainContext } from '../../../../context-provider/ContextProvider.jsx'


export default function DeleteAllCheckedStickersModal() {

  const { setIsDeleteAllCheckedStickersModalOpen, deleteAllCheckedStickers, setBoards } = useContext(MainContext)


  const messages = ['Are you sure you want to delete all checked stickers on all boards?']

  const buttons = [
    { title: 'Delete', onClick: handleDelete },
    { title: 'Close', onClick: handleClose }
  ]


  function handleDelete() {
    setIsDeleteAllCheckedStickersModalOpen(false)
    deleteAllCheckedStickers(setBoards)
  }

  function handleClose() {
    setIsDeleteAllCheckedStickersModalOpen(false)
  }


  return (
    <AppModalBase
      messages={messages}
      buttons={buttons}
    />

  )
}