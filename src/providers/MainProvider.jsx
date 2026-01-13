

import { useState, useRef, useEffect } from 'react'
import { MainContext } from '../contexts/MainContext.jsx'
import { boardTemplate } from '../templates/Templates.jsx'



export default function MainProvider({ children }) {

  const [boards, setBoards] = useState(() => [{ ...boardTemplate, boardId: crypto.randomUUID() }])
  const [currentBoardId, setCurrentBoardId] = useState(null)


  useEffect(() => {
    if (!currentBoardId && boards.length > 0) {
      setCurrentBoardId(boards[0].boardId)
    }
  }, [boards])


  const [searchValue, setSearchValue] = useState('')
  const [checkedStickerId, setCheckedStickerId] = useState(null)
  const [isCheckedStickersPanelShow, setIsCheckedStickersPanelShow] = useState(true)
  const [currentBoardPanel, setCurrentBoardPanel] = useState('board')
  const [datedNextDaysValue, setDatedNextDaysValue] = useState('all')
  const [selectedFilterButton, setSelectedFilterButton] = useState(null)
  const [checkedOrderCounter, setCheckedOrderCounter] = useState(0)
  const [activeStickerId, setActiveStickerId] = useState(null)
  const [isBoardChanging, setIsBoardChanging] = useState(false)
  const [lastCreatedStickerId, setLastCreatedStickerId] = useState(null)


  const boardRef = useRef()


  return (
    <MainContext.Provider
      value={{
        boardRef,
        boards, setBoards,
        currentBoardId, setCurrentBoardId,
        currentBoardPanel, setCurrentBoardPanel,
        searchValue, setSearchValue,
        checkedStickerId, setCheckedStickerId,
        isCheckedStickersPanelShow, setIsCheckedStickersPanelShow,
        datedNextDaysValue, setDatedNextDaysValue,
        selectedFilterButton, setSelectedFilterButton,
        checkedOrderCounter, setCheckedOrderCounter,
        activeStickerId, setActiveStickerId,
        isBoardChanging, setIsBoardChanging,
        lastCreatedStickerId, setLastCreatedStickerId
      }}
    >
      {children}
    </MainContext.Provider>
  )
}