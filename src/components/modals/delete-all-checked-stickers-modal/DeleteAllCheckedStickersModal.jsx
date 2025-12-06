

import Delete from './delete/Delete.jsx'
import Close from './close/Close.jsx'
import MainModalWrapper from '../../../wrappers/main-modal-wrapper/MainModalWrapper.jsx'
import MainModalContentWrapper from '../../../wrappers/main-modal-content-wrapper/MainModalContentWrapper.jsx'
import MainModalMessages from '../main-modal-messages/MainModalMessages.jsx'
import MainModalButtonsWrapper from '../../../wrappers/main-modal-buttons-wrapper/MainModalButtonsWrapper.jsx'


export default function DeleteAllCheckedStickersModal() {

  const messages = ['Are you sure you want to delete all checked stickers on all boards?']

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