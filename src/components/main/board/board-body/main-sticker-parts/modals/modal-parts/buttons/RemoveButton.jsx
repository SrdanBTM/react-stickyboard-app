

import styles from './buttons.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../../contexts/MainContext.jsx'
import { updateSticker } from '../../../../../../../../helper-functions/HelperFunctionsHandleSticker.jsx'
import { IconRemoveDate } from '../../../../../../../../icons/Icons.jsx'


export default function RemoveButton({ mappedSticker }) {


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
    <button
      className={`${styles.container} ${styles.buttonNormal} icon iconNormal`}
      onClick={handleClick}
      title='Remove date'
      style={{
        opacity: mappedSticker.isDateTimeValid ? 1 : 0,
        pointerEvents: mappedSticker.isDateTimeValid ? 'auto' : 'none'
      }}
    >
      <IconRemoveDate />
    </button>
  )

}