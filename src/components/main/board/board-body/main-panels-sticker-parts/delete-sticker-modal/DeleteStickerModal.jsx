

import Button from './button/Button.jsx'
import Title from './title/Title.jsx'
import ModalWrapper from '../../main-panels-sticker-wrappers/modal-wrapper/ModalWrapper.jsx'


export default function DeleteModal({ mappedSticker }) {

  return (
    <ModalWrapper
      mappedSticker={mappedSticker}
    >
      <div>
        <Title />
        <Button mappedSticker={mappedSticker} />
      </div>
    </ModalWrapper>
  )
}