

import { useContext } from 'react'
import { MainContext } from '../../../../../../../../contexts/MainContext.jsx'
import ModalButtonWrapper from '../../../../main-sticker-wrappers/modal-button-wrapper/ModalButtonWrapper.jsx'
import { updateSticker } from '../../../../../../../../helper-functions/HelperFunctionsHandleSticker.jsx'


export default function ClearDateButton({ mappedSticker }) {


  const { setBoards, currentBoardId } = useContext(MainContext)
  const currentStickerId = mappedSticker.stickerId
  const BASE_URL = import.meta.env.BASE_URL


  function handleClick() {
    updateSticker(setBoards, currentBoardId, currentStickerId, { key: 'isDateTimeValid', value: null })
    updateSticker(setBoards, currentBoardId, currentStickerId, { key: 'isAddDateTimeModalOpen', value: false })
    updateSticker(setBoards, currentBoardId, currentStickerId, {
      key: 'dateTimeCurrentValue',
      value: { day: null, month: null, year: null, hours: null, minutes: null }
    })
    updateSticker(setBoards, currentBoardId, currentStickerId, {
      key: 'dateTimeValidValue',
      value: { day: null, month: null, year: null, hours: null, minutes: null, dayInWeek: null }
    })
  }


  return (
    <ModalButtonWrapper>
      <button
        onClick={handleClick}
        style={{
          opacity: mappedSticker.isDateTimeValid ? 1 : 0,
          pointerEvents: mappedSticker.isDateTimeValid ? 'auto' : 'none'
        }}
      >
        <img src={`${BASE_URL}images/icon-clear3.png`} alt='clear' />
        <span>Clear</span>
      </button>
    </ModalButtonWrapper>
  )

}