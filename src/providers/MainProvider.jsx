

import { useState, useRef } from 'react'
import { MainContext } from '../contexts/MainContext.jsx'
import dummyData from '../dummy-data/dummyData.json'
import { boardTemplate } from '../templates/Templates.jsx'



export default function MainProvider({ children }) {

  // const id = crypto.randomUUID()
  // const [boards, setBoards] = useState([{ ...boardTemplate, boardId: id }])
  const [boards, setBoards] = useState(dummyData)


  // const [currentBoardId, setCurrentBoardId] = useState(id)
  const currentBoardIdInit = boards.length > 0 ? boards[0].boardId : null
  const [currentBoardId, setCurrentBoardId] = useState(currentBoardIdInit)


  const [searchValue, setSearchValue] = useState('')
  const [checkedStickerId, setCheckedStickerId] = useState(null)
  const [isCheckedStickersPanelShow, setIsCheckedStickersPanelShow] = useState(false)
  const [currentBoardPanel, setCurrentBoardPanel] = useState('board')
  const [datedNextDaysValue, setDatedNextDaysValue] = useState()
  const [selectedFilterButton, setSelectedFilterButton] = useState(null)



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
        selectedFilterButton, setSelectedFilterButton
      }}
    >
      {children}
    </MainContext.Provider>
  )
}