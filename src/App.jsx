

import { boardTemplate, stickerTemplate } from './templates/Templates.jsx'
import { MainProvider } from './context-provider/ContextProvider.jsx'
import { useState, useRef, useEffect } from 'react'
import dummyData from './dummy-data/dummyData.json'
import { updateSticker, updateAllStickers, addSticker, deleteSticker, deleteAllCheckedStickers } from './helper-functions/HelperFunctionsHandleSticker.jsx'
import { addBoard, updateBoard, updateAllBoards, deleteBoard } from './helper-functions/HelperFunctionsHandleBoard.jsx'
import { closeCurrentStickerModal, openCurrentStickerModal, closeAllStickerModals } from './helper-functions/HelperFunctionsHandleStickerModal.jsx'


// components
import ClickOutsideElement from './click-outside-element/ClickOutsideElement.jsx'
import Main from './components/main/Main.jsx'
import Header from './components/header/Header.jsx'
import DeleteBoardModal from './components/app-modals/app-modals/DeleteBoardModal.jsx'
import DeleteAllCheckedStickersModal from './components/app-modals/app-modals/DeleteAllCheckedStickersModal.jsx'
import MessageNoCheckedStickerToDeleteModal from './components/app-modals/app-modals/MessageNoCheckedStickersToDeleteModal.jsx'


export default function App() {

  const filterDatedListTitle = ['Next 3 days', 'Next 10 days', 'Next 30 days']

  // const id = crypto.randomUUID()
  // const [boards, setBoards] = useState([{ ...boardTemplate, boardId: id }])
  const [boards, setBoards] = useState(dummyData)

  // const [currentBoardId, setCurrentBoardId] = useState(id)
  const currentBoardIdInit = boards.length > 0 ? boards[0].boardId : null
  const [currentBoardId, setCurrentBoardId] = useState(currentBoardIdInit)


  const [theme, setTheme] = useState('darkTheme')
  const [isDeleteBoardModalOpen, setIsDeleteBoardModalOpen] = useState(false)
  const [isDeleteAllCheckedStickersModalOpen, setIsDeleteAllCheckedStickersModalOpen] = useState(false)
  const [isMessageNoCheckedStickersToDeleteModalOpen, setIsMessageNoCheckedStickersToDeleteModalOpen] = useState(false)
  const [clickedElementOnApp, setClickedElementOnApp] = useState(null)
  const [isClickedOutsideBoardList, setIsClickedOutsideBoardList] = useState(false)
  const [isClickedOutsideNewBoard, setIsClickedOutsideNewBoard] = useState(false)
  const [isClickedOutsideUserAndSettings, setIsClickedOutsideUserAndSettings] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [checkedOrderCounter, setCheckedOrderCounter] = useState(0)
  const [checkedStickerId, setCheckedStickerId] = useState(null)
  const [isCheckedStickersPanelShow, setIsCheckedStickersPanelShow] = useState(false)
  const [isFilterDatedMenuShow, setIsFilterDatedMenuShow] = useState(false)
  const [filterDatedTitle, setFilterDatedTitle] = useState(filterDatedListTitle[0])
  const [currentBoardPanel, setCurrentBoardPanel] = useState('board')


  const boardRef = useRef()


  function handleClick(e) {
    setClickedElementOnApp(e.target)
  }


  return (
    <MainProvider
      value={{
        // templates
        boardTemplate,
        stickerTemplate,

        // refs
        boardRef,

        // states
        boards, setBoards,
        theme, setTheme,
        currentBoardId, setCurrentBoardId,
        isDeleteBoardModalOpen, setIsDeleteBoardModalOpen,
        isDeleteAllCheckedStickersModalOpen, setIsDeleteAllCheckedStickersModalOpen,
        isMessageNoCheckedStickersToDeleteModalOpen, setIsMessageNoCheckedStickersToDeleteModalOpen,
        clickedElementOnApp, setClickedElementOnApp,
        isClickedOutsideBoardList, setIsClickedOutsideBoardList,
        isClickedOutsideNewBoard, setIsClickedOutsideNewBoard,
        isClickedOutsideUserAndSettings, setIsClickedOutsideUserAndSettings,
        searchValue, setSearchValue,
        checkedOrderCounter, setCheckedOrderCounter,
        checkedStickerId, setCheckedStickerId,
        isCheckedStickersPanelShow, setIsCheckedStickersPanelShow,
        isFilterDatedMenuShow, setIsFilterDatedMenuShow,
        filterDatedTitle, setFilterDatedTitle,
        currentBoardPanel, setCurrentBoardPanel,

        //helper functions handle sticker
        updateSticker,
        updateAllStickers,
        addSticker,
        deleteSticker,
        deleteAllCheckedStickers,

        //helper functions handle sticker modal
        closeCurrentStickerModal,
        openCurrentStickerModal,
        closeAllStickerModals,

        //helper functions handle board
        addBoard,
        updateBoard,
        updateAllBoards,
        deleteBoard,

        //arrays
        filterDatedListTitle

      }}>
      <div className={`app ${theme}`} onClick={handleClick} style={{ overflow: 'hidden' }}>
        <ClickOutsideElement />

        <Header />
        <Main />

        {isDeleteBoardModalOpen && <DeleteBoardModal />}
        {isDeleteAllCheckedStickersModalOpen && <DeleteAllCheckedStickersModal />}
        {isMessageNoCheckedStickersToDeleteModalOpen && <MessageNoCheckedStickerToDeleteModal />}
      </div>
    </MainProvider>
  )
}