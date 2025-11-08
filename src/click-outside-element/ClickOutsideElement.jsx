

import { useContext, useEffect } from 'react'
import { MainContext } from '../context-provider/ContextProvider.jsx'


export default function ClickOutsideElement() {

  const {
    clickedElementOnApp,
    setIsClickedOutsideBoardList,
    setIsClickedOutsideNewBoard,
    setIsClickedOutsideUserAndSettings } = useContext(MainContext)


  useEffect(() => {

    if (clickedElementOnApp) {

      const dataId = clickedElementOnApp.getAttribute('data-id')


      if (dataId !== 'boardNameEdit' && dataId !== 'boardListInput') {
        setIsClickedOutsideBoardList(true)
      } else {
        setIsClickedOutsideBoardList(false)
      }

      if (dataId !== 'createNewBoardSpan' && dataId !== 'createNewBoardInput') {
        setIsClickedOutsideNewBoard(true)
      } else {
        setIsClickedOutsideNewBoard(false)
      }

      if (dataId !== 'settingsIcon' && dataId !== 'userIcon') {
        setIsClickedOutsideUserAndSettings(true)
      } else {
        setIsClickedOutsideUserAndSettings(false)
      }

    }
  }, [clickedElementOnApp])




}



