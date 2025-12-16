

import Title from './title/Title.jsx'
import Buttons from './buttons/Buttons.jsx'
import ModalWrapper from '../../main-panels-sticker-wrappers/modal-wrapper/ModalWrapper.jsx'
import InputsDate from './inputs-date/InputsDate.jsx'
import InputsTime from './inputs-time/InputsTime.jsx'


export default function AddDateTimeModal({ mappedSticker }) {

  return (
    <ModalWrapper
      mappedSticker={mappedSticker}
    >
      <div>
        <Title />
        <InputsDate mappedSticker={mappedSticker} />
        <InputsTime mappedSticker={mappedSticker} />
        {/* <Message mappedSticker={mappedSticker} /> */}
        <Buttons mappedSticker={mappedSticker} />
      </div>
    </ModalWrapper>
  )
}