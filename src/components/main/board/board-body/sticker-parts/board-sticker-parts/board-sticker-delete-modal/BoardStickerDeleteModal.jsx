

import DeleteButton from './delete-button/DeleteButton.jsx'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../context-provider/ContextProvider.jsx'


export default function BoardStickerDeleteModal({ mappedSticker }) {

  const { BoardStickerModalWraper } = useContext(MainContext)


  return (
    <BoardStickerModalWraper
      mappedSticker={mappedSticker}
    >
      <div>
        <DeleteButton mappedSticker={mappedSticker} />
      </div>
    </BoardStickerModalWraper>
  )
}