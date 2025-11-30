


import { useContext } from 'react'
import { MainContext } from '../../../../../../../../../context-provider/ContextProvider.jsx'
import BoardStickerFooterButton from '../../../board-sticker-footer-button/BoardStickerFooterButton.jsx'


export default function AddDateIcon({ mappedSticker }) {

  const { setBoards, updateSticker, currentBoardId } = useContext(MainContext)
  const currentStickerId = mappedSticker.stickerId


  function handleClick() {
    const propertyToUpdate = { key: 'isAddDateTimeOpen', value: true }
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate)
  }


  const props = {
    handleClick: handleClick,
    imgPath: 'images/icon-date2.png',
    imgAlt: 'add date'
  }


  return <BoardStickerFooterButton props={props} />
}