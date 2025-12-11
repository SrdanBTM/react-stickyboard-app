

import { ClickOutsideElementContext } from '../contexts/ClickOutsideElementContext.jsx'
import { useState, useEffect } from 'react'


export default function ClickOutsideElementProvider({ children }) {

  const [clickedElementOnApp, setClickedElementOnApp] = useState(null)
  const [isClickedOutsideBoardList, setIsClickedOutsideBoardList] = useState(false)
  const [isClickedOutsideNewBoard, setIsClickedOutsideNewBoard] = useState(false)
  const [isClickedOutsideUserAndSettings, setIsClickedOutsideUserAndSettings] = useState(false)


  useEffect(() => {

    if (clickedElementOnApp) {

      const dataId = clickedElementOnApp.getAttribute('data-id')

      setIsClickedOutsideBoardList(dataId !== 'boardNameEdit' && dataId !== 'boardListInput' ? true : false)
      setIsClickedOutsideNewBoard(dataId !== 'createNewBoardSpan' && dataId !== 'createNewBoardInput' ? true : false)
      setIsClickedOutsideUserAndSettings(dataId !== 'settingsIcon' && dataId !== 'userIcon' ? true : false)

    }
  }, [clickedElementOnApp])


  return (
    <ClickOutsideElementContext.Provider
      value={{
        setClickedElementOnApp,
        isClickedOutsideBoardList,
        isClickedOutsideNewBoard, 
        isClickedOutsideUserAndSettings,
      }}
    >

      {children}

    </ClickOutsideElementContext.Provider>
  )

}