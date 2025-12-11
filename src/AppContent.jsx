

import Header from './components/header/Header.jsx'
import Main from './components/main/Main.jsx'
import { useContext } from 'react'
import { MainContext } from './context-provider/ContextProvider.jsx'
import { ClickOutsideElementContext } from './contexts/ClickOutsideElementContext.jsx'
import { AppModalsContext } from './contexts/AppModalsContext.jsx'
import DeleteBoardModal from './components/app-modals/app-modals/DeleteBoardModal.jsx'
import DeleteAllCheckedStickersModal from './components/app-modals/app-modals/DeleteAllCheckedStickersModal.jsx'
import MessageNoCheckedStickerToDeleteModal from './components/app-modals/app-modals/MessageNoCheckedStickersToDeleteModal.jsx'


export default function AppContent() {

  const { theme } = useContext(MainContext)
  const { setClickedElementOnApp } = useContext(ClickOutsideElementContext)
  const { openedAppModal } = useContext(AppModalsContext)


  function handleClick(e) {
    setClickedElementOnApp(e.target)
  }


  const appModals = {
    DeleteBoardModal,
    DeleteAllCheckedStickersModal,
    MessageNoCheckedStickerToDeleteModal
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