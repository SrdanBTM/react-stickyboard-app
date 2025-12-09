

import Title from './title/Title.jsx'
import Inputs from './inputs/Inputs.jsx'
import Message from './message/Message.jsx'
import Buttons from './buttons/Buttons.jsx'
import ModalWrapper from '../../main-panels-sticker-wrappers/modal-wrapper/ModalWrapper.jsx'


export default function AddDateTimeModal({ mappedSticker }) {

  return (
    <ModalWrapper
      mappedSticker={mappedSticker}
    >
      <div>
        <Title />
        <Inputs mappedSticker={mappedSticker} />
        <Message mappedSticker={mappedSticker} />
        <Buttons mappedSticker={mappedSticker} />
      </div>
    </ModalWrapper>
  )
}