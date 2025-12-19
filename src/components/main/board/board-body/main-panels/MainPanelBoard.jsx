

import { useContext } from 'react'
import { MainContext } from '../../../../../contexts/MainContext.jsx'
import MainPanelBase from '../main-panel-base/MainPanelBase.jsx'


export default function MainPanelBoard() {

  const { boards, currentBoardId } = useContext(MainContext)

  const currentBoard = boards.length > 0
    ? boards.find(board => board.boardId === currentBoardId)
    : null

  const currentBoardStickers = currentBoard
    ? currentBoard.stickers.filter(sticker => !sticker.checked)
    : []


  return (
    <MainPanelBase
      stickers={currentBoardStickers}
    />

  )
}