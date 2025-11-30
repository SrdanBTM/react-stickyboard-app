


import { useContext } from 'react'
import { MainContext } from '../../../../../../../../../context-provider/ContextProvider.jsx'
import BoardStickerFooterButton from '../../../board-sticker-footer-button/BoardStickerFooterButton.jsx'


export default function DeleteStickerButton({ mappedSticker }) {

  const { updateSticker, setBoards, currentBoardId } = useContext(MainContext)
  const currentStickerId = mappedSticker.stickerId


  function handleClick(e) {
    const propertyToUpdate = { key: 'isDeleteOpen', value: true }
    updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate)
  }


  const props = {
    handleClick: handleClick,
    imgPath: 'images/icon-delete5.png',
    imgAlt: 'delete'
  }


  return <BoardStickerFooterButton props={props} />
}