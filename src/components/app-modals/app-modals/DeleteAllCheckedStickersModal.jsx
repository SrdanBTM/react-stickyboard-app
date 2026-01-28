

import AppModalBase from '../app-modal-base/AppModalBase.jsx'
import { useContext } from 'react'
import { MainContext } from '../../../contexts/MainContext.jsx'
import { AppModalsContext } from '../../../contexts/AppModalsContext.jsx'
import { deleteAllCheckedStickers } from '../../../helper-functions/HelperFunctionsHandleSticker.jsx'


export default function DeleteAllCheckedStickersModal() {

  const { setBoards, setCurrentPageOnCheckedPanelBody } = useContext(MainContext)
  const { setOpenedAppModal } = useContext(AppModalsContext)


  const messages = ['Are you sure you want to delete all checked stickers on all boards?']

  const buttons = [
    { title: 'Delete', onClick: handleDelete },
    { title: 'Close', onClick: handleClose }
  ]


  function handleDelete() {
    setOpenedAppModal(null)
    deleteAllCheckedStickers(setBoards)
    setCurrentPageOnCheckedPanelBody(null)
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