

import Title from './title/Title.jsx'
import Palette from './palette/Palette.jsx'
import ModalWrapper from '../../main-sticker-wrappers/modal-wrapper/ModalWrapper.jsx'


export default function ChangeColorModal({ mappedSticker }) {



  return (
    <ModalWrapper
      mappedSticker={mappedSticker}
    >
      <div>
        <Title />
        <Palette mappedSticker={mappedSticker} />
      </div>
    </ModalWrapper>
  )
}




