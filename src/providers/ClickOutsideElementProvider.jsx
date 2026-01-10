

import { ClickOutsideElementContext } from '../contexts/ClickOutsideElementContext.jsx'
import { useState, useEffect } from 'react'


export default function ClickOutsideElementProvider({ children }) {

  const [clickedElementOnApp, setClickedElementOnApp] = useState(null)
  const [isClickedOutsideBoardList, setIsClickedOutsideBoardList] = useState(false)
  const [isClickedOutsideNewBoard, setIsClickedOutsideNewBoard] = useState(false)
  const [isClickedOutsideSettings, setIsClickedOutsideSettings] = useState(false)
  const [isClickedOutsideFilter, setIsClickedOutsideFilter] = useState(false)


  useEffect(() => {

    if (clickedElementOnApp) {

      const closestElementWithId = clickedElementOnApp.closest('[data-id]')
      const dataId = closestElementWithId && closestElementWithId.getAttribute('data-id')

      console.log(dataId);
      

      setIsClickedOutsideBoardList(dataId !== 'boardNameEdit' && dataId !== 'boardListInput' ? true : false)
      setIsClickedOutsideNewBoard(dataId !== 'createNewBoardSpan' && dataId !== 'createNewBoardInput' ? true : false)
      setIsClickedOutsideSettings(dataId !== 'settings' ? true : false)
      setIsClickedOutsideFilter(dataId !== 'filter' ? true : false)

    }
  }, [clickedElementOnApp])


  return (
    <ClickOutsideElementContext.Provider
      value={{
        setClickedElementOnApp,
        isClickedOutsideBoardList,
        isClickedOutsideNewBoard, 
        isClickedOutsideSettings,
        isClickedOutsideFilter
      }}
    >

      {children}

    </ClickOutsideElementContext.Provider>
  )

}