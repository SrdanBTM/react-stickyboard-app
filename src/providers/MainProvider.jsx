

import { useState, useRef, useEffect } from 'react'
import { MainContext } from '../contexts/MainContext.jsx'
import { boardTemplate } from '../templates/Templates.jsx'



export default function MainProvider({ children }) {

  const [boards, setBoards] = useState(() => {
    const savedBoards = localStorage.getItem('boards')
    return savedBoards ? JSON.parse(savedBoards) : [{ ...boardTemplate, boardId: crypto.randomUUID() }]
  })
  useEffect(() => {
    localStorage.setItem('boards', JSON.stringify(boards))
  }, [boards])


  const [currentBoardId, setCurrentBoardId] = useState(null)
  useEffect(() => {
    setCurrentBoardId(boards[boards.length - 1].boardId)
  }, [])


  const [isCheckedStickersPanelShow, setIsCheckedStickersPanelShow] = useState(() => {
    const savedIsCheckedPanel = localStorage.getItem('isCheckedPanel')
    return savedIsCheckedPanel ? JSON.parse(savedIsCheckedPanel) : true
  })
  useEffect(() => {
    localStorage.setItem('isCheckedPanel', JSON.stringify(isCheckedStickersPanelShow))
  }, [isCheckedStickersPanelShow])


  const [datedNextDaysValue, setDatedNextDaysValue] = useState(() => {
    const savedNextDaysValue = localStorage.getItem('nextDaysValue')
    return savedNextDaysValue ? JSON.parse(savedNextDaysValue) : 'all'
  })
  useEffect(() => {
    localStorage.setItem('nextDaysValue', JSON.stringify(datedNextDaysValue))
  }, [datedNextDaysValue])


  const [searchValue, setSearchValue] = useState('')
  const [checkedStickerId, setCheckedStickerId] = useState(null)
  const [currentBoardPanel, setCurrentBoardPanel] = useState('board')
  const [selectedFilterButton, setSelectedFilterButton] = useState(null)
  const [checkedOrderCounter, setCheckedOrderCounter] = useState(0)
  const [activeStickerId, setActiveStickerId] = useState(null)
  const [isBoardChanging, setIsBoardChanging] = useState(false)
  const [lastCreatedStickerId, setLastCreatedStickerId] = useState(null)


  const boardRef = useRef(null)
  const previousBoardIdRef = useRef(null)


  return (
    <MainContext.Provider
      value={{
        boardRef,
        previousBoardIdRef,
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