

import DeleteButton from './delete-button/DeleteButton.jsx'
import DeleteTitle from './delete-title/DeleteTitle.jsx'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../context-provider/ContextProvider.jsx'


export default function BoardStickerDeleteModal({ mappedSticker }) {

  const { BoardStickerModalWraper } = useContext(MainContext)


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