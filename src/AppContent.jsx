

import Header from './components/header/Header.jsx'
import Main from './components/main/Main.jsx'
import { useContext } from 'react'
import { ClickOutsideElementContext } from './contexts/ClickOutsideElementContext.jsx'
import { AppModalsContext } from './contexts/AppModalsContext.jsx'
import { ThemeContext } from './contexts/ThemeContext.jsx'
import DeleteBoardModal from './components/app-modals/app-modals/DeleteBoardModal.jsx'
import DeleteAllCheckedStickersModal from './components/app-modals/app-modals/DeleteAllCheckedStickersModal.jsx'
import MessageNoCheckedStickerToDeleteModal from './components/app-modals/app-modals/MessageNoCheckedStickersToDeleteModal.jsx'
import MessageNewStickerEnableOnlyOnBoardPanelModal from './components/app-modals/app-modals/MessageNewStickerEnableOnlyOnBoardPanelModal.jsx'
import ResetAppModal from './components/app-modals/app-modals/ResetAppModal.jsx'


export default function AppContent() {

  const { setClickedElementOnApp } = useContext(ClickOutsideElementContext)
  const { openedAppModal } = useContext(AppModalsContext)
  const { theme } = useContext(ThemeContext)
  

  function handleClick(e) {
    setClickedElementOnApp(e.target)
  }


  const appModals = {
    DeleteBoardModal,
    DeleteAllCheckedStickersModal,
    MessageNoCheckedStickerToDeleteModal,
    MessageNewStickerEnableOnlyOnBoardPanelModal,
    ResetAppModal
  }
  const AppModal = appModals[openedAppModal]


  return (
    <div
      className={`app ${theme}`}
      style={{ overflow: 'hidden' }}
      onClick={handleClick}
    >

      <Header />
      <Main />
      {openedAppModal && <AppModal />}

    </div>
  )
}