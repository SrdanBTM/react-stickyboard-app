


import { useContext } from 'react'
import { MainContext } from '../../../../../../../../../context-provider/ContextProvider.jsx'
import BoardStickerFooterButton from '../../../board-sticker-footer-button/BoardStickerFooterButton.jsx'


export default function ChangeColorButton({ mappedSticker }) {

  const { setBoards, updateSticker, currentBoardId } = useContext(MainContext)
  const currentStickerId = mappedSticker.stickerId


  function handleClick() {
    const propertyToUpdate = { key: 'isChangeColorOpen', value: true }
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate)
  }


  const props = {
    handleClick: handleClick,
    imgPath: 'images/icon-palette1.png',
    imgAlt: 'change color'
  }


  return <BoardStickerFooterButton props={props} />
}