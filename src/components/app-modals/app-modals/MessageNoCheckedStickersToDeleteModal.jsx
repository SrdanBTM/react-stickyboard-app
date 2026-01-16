

import AppModalBase from '../app-modal-base/AppModalBase.jsx'
import { useContext } from 'react'
import { AppModalsContext } from '../../../contexts/AppModalsContext.jsx'


export default function MessageNoCheckedStickersToDeleteModal() {

  const { setOpenedAppModal } = useContext(AppModalsContext)


  const messages = ['There are no checked stickers to delete.']

  const buttons = [
    { title: 'OK', onClick: handleOk }
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