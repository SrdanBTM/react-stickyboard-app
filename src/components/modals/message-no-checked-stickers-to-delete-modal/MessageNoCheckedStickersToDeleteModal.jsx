

import Ok from './ok/Ok.jsx'
import MainModalWrapper from '../../../wrappers/main-modal-wrapper/MainModalWrapper.jsx'
import MainModalContentWrapper from '../../../wrappers/main-modal-content-wrapper/MainModalContentWrapper.jsx'
import MainModalMessages from '../main-modal-messages/MainModalMessages.jsx'
import MainModalButtonsWrapper from '../../../wrappers/main-modal-buttons-wrapper/MainModalButtonsWrapper.jsx'



export default function MessageNoCheckedStickersToDeleteModal() {

  const messages = ['There are no checked stickers to delete.']

  return (
    <MainModalWrapper>
      <MainModalContentWrapper>

        <MainModalMessages messages={messages} />

        <MainModalButtonsWrapper>
          <Ok />
        </MainModalButtonsWrapper>

      </MainModalContentWrapper>
    </MainModalWrapper>
  )
}