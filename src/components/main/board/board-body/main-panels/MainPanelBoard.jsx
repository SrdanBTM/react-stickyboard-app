

import { useContext } from 'react'
import { MainContext } from '../../../../../contexts/MainContext.jsx'
import MainPanelsBase from '../main-panels-base/MainPanelsBase.jsx'


export default function MainPanelBoard() {

  const { boards, currentBoardId } = useContext(MainContext)

  const currentBoard = boards.length > 0
    ? boards.find(board => board.boardId === currentBoardId)
    : null

  const currentBoardStickers = currentBoard
    ? currentBoard.stickers.filter(sticker => !sticker.checked)
    : []


  return (
    <MainPanelsBase
      stickers={currentBoardStickers}
    />

  )
}