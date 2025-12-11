

import { useState, useRef } from 'react'


// providers 
import { MainProvider } from './context-provider/ContextProvider.jsx'
import ClickOutsideElementProvider from './providers/ClickOutsideElementProvider.jsx'
import AppModalsProvider from './providers/AppModalsProvider.jsx'


// components
import AppContent from './AppContent.jsx'


// data
import dummyData from './dummy-data/dummyData.json'
import { boardTemplate, stickerTemplate } from './templates/Templates.jsx'



import { updateSticker, updateAllStickers, addSticker, deleteSticker, deleteAllCheckedStickers } from './helper-functions/HelperFunctionsHandleSticker.jsx'
import { addBoard, updateBoard, updateAllBoards, deleteBoard } from './helper-functions/HelperFunctionsHandleBoard.jsx'
import { closeCurrentStickerModal, openCurrentStickerModal, closeAllStickerModals } from './helper-functions/HelperFunctionsHandleStickerModal.jsx'





export default function App() {

  const filterDatedListTitle = ['Next 3 days', 'Next 10 days', 'Next 30 days']

  // const id = crypto.randomUUID()
  // const [boards, setBoards] = useState([{ ...boardTemplate, boardId: id }])
  const [boards, setBoards] = useState(dummyData)

  // const [currentBoardId, setCurrentBoardId] = useState(id)
  const currentBoardIdInit = boards.length > 0 ? boards[0].boardId : null
  const [currentBoardId, setCurrentBoardId] = useState(currentBoardIdInit)


  const [theme, setTheme] = useState('darkTheme')
  const [searchValue, setSearchValue] = useState('')
  const [checkedOrderCounter, setCheckedOrderCounter] = useState(0)
  const [checkedStickerId, setCheckedStickerId] = useState(null)
  const [isCheckedStickersPanelShow, setIsCheckedStickersPanelShow] = useState(false)
  const [isFilterDatedMenuShow, setIsFilterDatedMenuShow] = useState(false)
  const [filterDatedTitle, setFilterDatedTitle] = useState(filterDatedListTitle[0])
  const [currentBoardPanel, setCurrentBoardPanel] = useState('board')


  const boardRef = useRef()


  return (
    <AppModalsProvider>
      <ClickOutsideElementProvider>
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

          <AppContent />

        </MainProvider>
      </ClickOutsideElementProvider>
    </AppModalsProvider>
  )
}