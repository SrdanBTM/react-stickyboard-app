

import { useContext } from 'react'
import { MainContext } from '../../../../../../../../../context-provider/ContextProvider.jsx'
import BoardStickerFooterButton from '../../../board-sticker-footer-button/BoardStickerFooterButton.jsx'


export default function BackButton({ mappedSticker }) {

  const { updateSticker, setBoards, currentBoardId } = useContext(MainContext)
  const currentStickerId = mappedSticker.stickerId


  function handleClick() {
    const propertyToUpdate = { key: 'isAddDateTimeOpen', value: false }
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate)
  }


  const props = {
    handleClick: handleClick,
    imgPath: 'images/icon-back1.png',
    imgAlt: 'back'
  }


  return <BoardStickerFooterButton props={props} />
}