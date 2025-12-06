

import DeleteButton from './delete-button/DeleteButton.jsx'
import DeleteTitle from './delete-title/DeleteTitle.jsx'
import BoardStickerModalWrapper from '../../../../../../../wrappers/board-sticker-modal-wrapper/BoardStickerModalWrapper.jsx'


export default function BoardStickerDeleteModal({ mappedSticker }) {

  return (
    <BoardStickerModalWrapper
      mappedSticker={mappedSticker}
    >
      <div>
        <DeleteTitle />
        <DeleteButton mappedSticker={mappedSticker} />
      </div>
    </BoardStickerModalWrapper>
  )
}