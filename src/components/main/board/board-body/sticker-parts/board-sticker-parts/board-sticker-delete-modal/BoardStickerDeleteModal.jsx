

import DeleteButton from './delete-button/DeleteButton.jsx'
import DeleteTitle from './delete-title/DeleteTitle.jsx'
import BoardStickerModalWraper from '../../../../../../../wrapers/board-sticker-modal-wraper/BoardStickerModalWraper.jsx'


export default function BoardStickerDeleteModal({ mappedSticker }) {

  return (
    <BoardStickerModalWraper
      mappedSticker={mappedSticker}
    >
      <div>
        <DeleteTitle />
        <DeleteButton mappedSticker={mappedSticker} />
      </div>
    </BoardStickerModalWraper>
  )
}