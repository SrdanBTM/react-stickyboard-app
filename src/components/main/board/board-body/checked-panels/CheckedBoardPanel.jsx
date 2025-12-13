

import CheckedPanelsBase from '../checked-panels-base/CheckedPanelsBase.jsx'
import { useContext, useEffect } from 'react'
import { MainContext } from '../../../../../contexts/MainContext.jsx'
import { updateBoard } from '../../../../../helper-functions/HelperFunctionsHandleBoard.jsx'


export default function CheckedBoardPanel() {

  const { boards, setBoards, currentBoardId } = useContext(MainContext)


  let currentBoard = null
  if (boards.length > 0) {
    currentBoard = boards.find(board => board.boardId === currentBoardId)
  }


  const isCheckedStickersInCurrentBoard = currentBoard
    ? currentBoard.stickers.some(sticker => sticker.checked)
    : false


  useEffect(() => {
    if (isCheckedStickersInCurrentBoard) {
      const propertyToUpdate = { key: 'isThereCheckedSticker', value: true }
      updateBoard(setBoards, currentBoardId, propertyToUpdate)
    } else {
      const propertyToUpdate = { key: 'isThereCheckedSticker', value: false }
      updateBoard(setBoards, currentBoardId, propertyToUpdate)
    }
  }, [isCheckedStickersInCurrentBoard])


  const stickersToShowOnCheckedPanel = currentBoard
    ? currentBoard.stickers
      .filter(sticker => sticker.checked)
      .sort((a, b) => a.checkedOrder - b.checkedOrder)
    : []


    console.log(stickersToShowOnCheckedPanel);
    


  return (
    <CheckedPanelsBase
      stickersToShowOnCheckedPanel={stickersToShowOnCheckedPanel}
    >

    </CheckedPanelsBase>
  )
}