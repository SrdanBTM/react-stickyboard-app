

import AppModalBase from '../app-modal-base/AppModalBase.jsx'
import { useContext } from 'react'
import { AppModalsContext } from '../../../contexts/AppModalsContext.jsx'


export default function ResetApp() {

  const { setOpenedAppModal } = useContext(AppModalsContext)


  const messages = [
    'This action will remove all boards, stickers, and settings.',
    'The application will be restored to its initial state.',
    'This action cannot be undone.'
  ]

  const buttons = [
    { title: 'Reset', onClick: handleReset },
    { title: 'Close', onClick: handleClose }
  ]


  function handleReset() {
    localStorage.removeItem('boards')
    localStorage.removeItem('theme')
    localStorage.removeItem('isCheckedPanel')
    localStorage.removeItem('nextDaysValue')
    setOpenedAppModal(null)
    window.location.reload()
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