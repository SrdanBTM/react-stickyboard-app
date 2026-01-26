

import CheckedPanelBase from '../checked-panel-base/CheckedPanelBase.jsx'
import { useContext, useEffect } from 'react'
import { MainContext } from '../../../../../contexts/MainContext.jsx'
import { updateBoard } from '../../../../../helper-functions/HelperFunctionsHandleBoard.jsx'


export default function CheckedPanelBoard() {

  const { boards, setBoards, currentBoardId } = useContext(MainContext)


  let currentBoard = null
  if (boards.length > 0) {
    currentBoard = boards.find(board => board.boardId === currentBoardId)
  }


  const stickersToShowOnCheckedPanel = currentBoard
    ? currentBoard.stickers
      .filter(sticker => sticker.checked)
      .sort((a, b) => a.checkedOrder - b.checkedOrder)
    : []


  return (
    <CheckedPanelBase
      stickersToShowOnCheckedPanel={stickersToShowOnCheckedPanel}
    />
  )
}