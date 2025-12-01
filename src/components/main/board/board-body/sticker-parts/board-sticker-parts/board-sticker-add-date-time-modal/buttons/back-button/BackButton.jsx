

import { useContext } from 'react'
import { MainContext } from '../../../../../../../../../context-provider/ContextProvider.jsx'


export default function BackButton({ mappedSticker }) {

  const { updateSticker, setBoards, currentBoardId, BoardStickerModalButtonWraper } = useContext(MainContext)
  const currentStickerId = mappedSticker.stickerId
  const BASE_URL = import.meta.env.BASE_URL


  function handleClick() {
    const propertyToUpdate = { key: 'isAddDateTimeModalOpen', value: false }
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate)
  }


  return (
    <BoardStickerModalButtonWraper>
      <button onClick={handleClick}>
        <img src={`${BASE_URL}images/icon-back1.png`} alt='back' />
        <span>Back</span>
      </button>
    </BoardStickerModalButtonWraper>
  )
}