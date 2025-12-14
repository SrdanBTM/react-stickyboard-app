

import AppModalBase from '../app-modal-base/AppModalBase.jsx'
import { useContext } from 'react'
import { AppModalsContext } from '../../../contexts/AppModalsContext.jsx'


export default function MessageNewStickerEnableOnlyOnBoardPanel() {

  const { setOpenedAppModal } = useContext(AppModalsContext)


  const messages = ['You must be inside a board to create a sticker.']

  const buttons = [
    { title: 'Ok', onClick: handleOk }
  ]


  function handleOk() {
    setOpenedAppModal(null)
  }


  return (
    <AppModalBase
      messages={messages}
      buttons={buttons}
    />

  )
}