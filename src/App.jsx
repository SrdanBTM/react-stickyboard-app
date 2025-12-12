

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
              checkedStickerId, setCheckedStickerId,
              isCheckedStickersPanelShow, setIsCheckedStickersPanelShow,
              currentBoardPanel, setCurrentBoardPanel,


            }}>

            <AppContent />

          </MainProvider>
        </ClickOutsideElementProvider>
      </AppModalsProvider>
    </ThemeProvider>
  )
}