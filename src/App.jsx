

import ClickOutsideElement from './click-outside-element/ClickOutsideElement.jsx'
import Header from './components/header/Header.jsx'
import Main from './components/main/Main.jsx'
import DeleteBoardModal from './components/modals/delete-board-modal/DeleteBoardModal.jsx'
import { boardTemplate, stickerTemplate } from './templates/Templates.jsx'
import { MainProvider } from './context-provider/ContextProvider.jsx'
import { useState, useRef, useEffect } from 'react'
import dummyData from './dummy-data/dummyData.json'
import { updateSticker, updateAllStickers, addSticker, deleteSticker, } from './helper-functions/HelperFunctionsHandleSticker.jsx'
import { addBoard, updateBoard, updateAllBoards, deleteBoard } from './helper-functions/HelperFunctionsHandleBoard.jsx'
import BoardStickerFooterButtonWraper from './wrapers/board-sticker-footer-button-wraper/BoardStickerFooterButtonWraper.jsx'
import BoardStickerModalButtonWraper from './wrapers/board-sticker-modal-button-wraper/BoardStickerModalButtonWraper.jsx'
import BoardStickerModalWraper from './wrapers/board-sticker-modal-wraper/BoardStickerModalWraper.jsx'
import { closeCurrentStickerModal, openCurrentStickerModal, closeAllStickerModals } from './helper-functions/HelperFunctionsHandleStickerModal.jsx'


export default function App() {


  const id = crypto.randomUUID()

  // const [boards, setBoards] = useState([{ ...boardTemplate, boardId: id }])
  const [boards, setBoards] = useState(dummyData)

  const [theme, setTheme] = useState('darkTheme')

  // const [currentBoardId, setCurrentBoardId] = useState(id)
  const [currentBoardId, setCurrentBoardId] = useState(boards[0].boardId)

  const [isDeleteBoardModalOpen, setIsDeleteBoardModalOpen] = useState(false)
  const [clickedElementOnApp, setClickedElementOnApp] = useState(null)
  const [isClickedOutsideBoardList, setIsClickedOutsideBoardList] = useState(false)
  const [isClickedOutsideNewBoard, setIsClickedOutsideNewBoard] = useState(false)
  const [isClickedOutsideUserAndSettings, setIsClickedOutsideUserAndSettings] = useState(false)
  const [isSearchResultBoard, setIsSearchResultBoard] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [checkedOrderCounter, setCheckedOrderCounter] = useState(0)
  const [checkedStickerId, setCheckedStickerId] = useState(null)
  const [isCheckedStickersPanelShow, setIsCheckedStickersPanelShow] = useState(false)


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
        clickedElementOnApp, setClickedElementOnApp,
        isClickedOutsideBoardList, setIsClickedOutsideBoardList,
        isClickedOutsideNewBoard, setIsClickedOutsideNewBoard,
        isClickedOutsideUserAndSettings, setIsClickedOutsideUserAndSettings,
        isSearchResultBoard, setIsSearchResultBoard,
        searchValue, setSearchValue,
        checkedOrderCounter, setCheckedOrderCounter,
        checkedStickerId, setCheckedStickerId,
        isCheckedStickersPanelShow, setIsCheckedStickersPanelShow,

        //helper functions handle sticker
        updateSticker,
        updateAllStickers,
        addSticker,
        deleteSticker,

        //helper functions handle sticker modal
        closeCurrentStickerModal,
        openCurrentStickerModal,
        closeAllStickerModals,

        //helper functions handle board
        addBoard,
        updateBoard,
        updateAllBoards,
        deleteBoard,

        //wrapers
        BoardStickerFooterButtonWraper,
        BoardStickerModalButtonWraper,
        BoardStickerModalWraper


      }}>
      <div className={`app ${theme}`} onClick={handleClick} style={{overflow: 'hidden'}}>
        <ClickOutsideElement />

        <Header />
        <Main />

        {isDeleteBoardModalOpen && <DeleteBoardModal />}
      </div>
    </MainProvider>
  )
}