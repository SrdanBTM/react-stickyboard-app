

import MainModal from '../main-modal/MainModal.jsx'
import { useContext } from 'react'
import { MainContext } from '../../../context-provider/ContextProvider.jsx'


export default function MessageNoCheckedStickersToDeleteModal() {

  const { setIsMessageNoCheckedStickersToDeleteModalOpen } = useContext(MainContext)


  const messages = ['There are no checked stickers to delete.']

  const buttons = [
    { title: 'Ok', onClick: handleOk }
  ]


  function handleOk() {
    setIsMessageNoCheckedStickersToDeleteModalOpen(false)
  }


  return (
    <MainModal
      messages={messages}
      buttons={buttons}
    />

  )
}