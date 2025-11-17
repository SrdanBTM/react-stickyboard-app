

import ClickOutsideElement from './click-outside-element/ClickOutsideElement.jsx'
import Header from './components/header/Header.jsx'
import Main from './components/main/Main.jsx'
import DeleteBoardModal from './components/modals/delete-board-modal/DeleteBoardModal.jsx'
import { boardTemplate, stickerTemplate } from './templates/Templates.jsx'
import { MainProvider } from './context-provider/ContextProvider.jsx'
import { useState, useRef, useEffect } from 'react'
import dummyData from './dummy-data/dummyData.json'
import { updateSticker, updateAllStickers, addSticker, deleteSticker, addBoard, updateBoard, updateAllBoards, deleteBoard } from './helper-functions/HelperFunctions.jsx'


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

  const boardRef = useRef()


  function handleClick(e) {
    setClickedElementOnApp(e.target)
  }


  return (
    <MainProvider
      value={{
        boards, setBoards,
        theme, setTheme,
        currentBoardId, setCurrentBoardId,
        isDeleteBoardModalOpen, setIsDeleteBoardModalOpen,
        boardTemplate,
        stickerTemplate,
        boardRef,
        clickedElementOnApp, setClickedElementOnApp,
        isClickedOutsideBoardList, setIsClickedOutsideBoardList,
        isClickedOutsideNewBoard, setIsClickedOutsideNewBoard,
        isClickedOutsideUserAndSettings, setIsClickedOutsideUserAndSettings,
        isSearchResultBoard, setIsSearchResultBoard,
        searchValue, setSearchValue,
        checkedOrderCounter, setCheckedOrderCounter,
        checkedStickerId, setCheckedStickerId,
        updateSticker,
        updateAllStickers,
        addSticker,
        deleteSticker,
        addBoard,
        updateBoard,
        updateAllBoards,
        deleteBoard
      }}>
      <div className={`app ${theme}`} onClick={handleClick}>
        <ClickOutsideElement />

        <Header />
        <Main />

        {isDeleteBoardModalOpen && <DeleteBoardModal />}
      </div>
    </MainProvider>
  )
}