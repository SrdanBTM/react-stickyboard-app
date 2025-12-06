

import Delete from './delete/Delete.jsx'
import Close from './close/Close.jsx'
import { useContext } from 'react'
import { MainContext } from '../../../context-provider/ContextProvider.jsx'
import MainModalWrapper from '../../../wrappers/main-modal-wrapper/MainModalWrapper.jsx'
import MainModalContentWrapper from '../../../wrappers/main-modal-content-wrapper/MainModalContentWrapper.jsx'
import MainModalMessages from '../main-modal-messages/MainModalMessages.jsx'
import MainModalButtonsWrapper from '../../../wrappers/main-modal-buttons-wrapper/MainModalButtonsWrapper.jsx'


export default function DeleteBoardModal() {

  const { boards, currentBoardId } = useContext(MainContext)
  const currentBoard = boards.find(board => board.boardId === currentBoardId)

  const messages = [
    `The selected board has ${currentBoard.stickers.length} ${''} ${currentBoard.stickers.length === 1 ? 'sticker.' : 'stickers.'}`,
    'Deleting this board will also remove all stickers on it.',
    'Do you want to continue?'
  ]

  return (
    <MainModalWrapper>
      <MainModalContentWrapper>

        <MainModalMessages messages={messages} />

        <MainModalButtonsWrapper>
          <Delete />
          <Close />
        </MainModalButtonsWrapper>

      </MainModalContentWrapper>
    </MainModalWrapper>
  )
}