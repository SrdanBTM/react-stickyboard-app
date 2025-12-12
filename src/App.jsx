

import { useState, useRef } from 'react'


// providers 
import { MainProvider } from './context-provider/ContextProvider.jsx'
import ClickOutsideElementProvider from './providers/ClickOutsideElementProvider.jsx'
import AppModalsProvider from './providers/AppModalsProvider.jsx'
import ThemeProvider from './providers/ThemeProvider.jsx'


// components
import AppContent from './AppContent.jsx'


// data
import dummyData from './dummy-data/dummyData.json'
import { boardTemplate, stickerTemplate } from './templates/Templates.jsx'





export default function App() {

  const filterDatedListTitle = ['Next 3 days', 'Next 10 days', 'Next 30 days']

  // const id = crypto.randomUUID()
  // const [boards, setBoards] = useState([{ ...boardTemplate, boardId: id }])
  const [boards, setBoards] = useState(dummyData)

  // const [currentBoardId, setCurrentBoardId] = useState(id)
  const currentBoardIdInit = boards.length > 0 ? boards[0].boardId : null
  const [currentBoardId, setCurrentBoardId] = useState(currentBoardIdInit)



  const [searchValue, setSearchValue] = useState('')
  const [checkedOrderCounter, setCheckedOrderCounter] = useState(0)
  const [checkedStickerId, setCheckedStickerId] = useState(null)
  const [isCheckedStickersPanelShow, setIsCheckedStickersPanelShow] = useState(false)
  const [isFilterDatedMenuShow, setIsFilterDatedMenuShow] = useState(false)
  const [filterDatedTitle, setFilterDatedTitle] = useState(filterDatedListTitle[0])
  const [currentBoardPanel, setCurrentBoardPanel] = useState('board')


  const boardRef = useRef()


  return (
    <ThemeProvider>
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
              currentBoardId, setCurrentBoardId,
              searchValue, setSearchValue,
              checkedOrderCounter, setCheckedOrderCounter,
              checkedStickerId, setCheckedStickerId,
              isCheckedStickersPanelShow, setIsCheckedStickersPanelShow,
              isFilterDatedMenuShow, setIsFilterDatedMenuShow,
              filterDatedTitle, setFilterDatedTitle,
              currentBoardPanel, setCurrentBoardPanel,


              //arrays
              filterDatedListTitle

            }}>

            <AppContent />

          </MainProvider>
        </ClickOutsideElementProvider>
      </AppModalsProvider>
    </ThemeProvider>
  )
}