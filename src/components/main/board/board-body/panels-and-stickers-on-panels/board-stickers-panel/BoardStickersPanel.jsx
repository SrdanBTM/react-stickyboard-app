

import { useContext } from 'react'
import { MainContext } from '../../../../../../context-provider/ContextProvider.jsx'
import StickerOnBoardStickersPanel from './sticker-on-board-stickers-panel/StickerOnBoardStickersPanel.jsx'
import CheckedStickersPanel from '../checked-stickers-panel/CheckedStickersPanel.jsx'
import StickersPanelWrapper from '../../../../../../wrappers/stickers-panel-wrapper/StickersPanelWrapper.jsx'


export default function BoardStickersPanel() {

  const { boards, currentBoardId } = useContext(MainContext)

  const currentBoard = boards.length > 0
    ? boards.find(board => board.boardId === currentBoardId)
    : null

  const currentBoardStickers = currentBoard && currentBoard.stickers.filter(sticker => !sticker.checked)


  return (
    <StickersPanelWrapper variant='board'>

      {currentBoardStickers.map(sticker => (
        <StickerOnBoardStickersPanel
          key={sticker.stickerId}
          mappedSticker={sticker}
        />
      ))}

      <CheckedStickersPanel />

    </StickersPanelWrapper>
  )
}