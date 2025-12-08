

import Button from './button/Button.jsx'
import Title from './title/Title.jsx'
import BoardStickerModalWrapper from '../../../../../../wrappers/board-sticker-modal-wrapper/BoardStickerModalWrapper.jsx'


export default function DeleteModal({ mappedSticker }) {

  return (
    <BoardStickerModalWrapper
      mappedSticker={mappedSticker}
    >
      <div>
        <Title />
        <Button mappedSticker={mappedSticker} />
      </div>
    </BoardStickerModalWrapper>
  )
}