

import styles from './modals.module.css'
import Title from './modal-parts/title/Title.jsx'
import InputsDate from './modal-parts/inputs-date-time/InputsDate.jsx'
import InputsTime from './modal-parts/inputs-date-time/InputsTime.jsx'
import Message from './modal-parts/message/Message.jsx'
import SaveButton from './modal-parts/buttons/SaveButton.jsx'
import RemoveButton from './modal-parts/buttons/RemoveButton.jsx'
import { useState, useRef, useEffect } from 'react'

export default function AddDateTimeModal({ mappedSticker }) {

  const [messageText, setMessageText] = useState('')

  const saveButtonRef = useRef(null)

  const inputRef1 = useRef(null)
  const inputRef2 = useRef(null)
  const inputRef3 = useRef(null)
  const inputRef4 = useRef(null)
  const inputRef5 = useRef(null)
  const inputsArray = [inputRef1, inputRef2, inputRef3, inputRef4, inputRef5]

  const [inputIndexCounter, setInputIndexCounter] = useState(0)
  const inputNames = ['day', 'month', 'year', 'hours', 'minutes']


  useEffect(() => {
    inputsArray[inputIndexCounter].current.focus()
  }, [inputIndexCounter])


  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: mappedSticker.color,
      }}
    >

      <div className={styles.header}>
        <Title title='Add Date and Time' />
      </div>

      <div className={styles.body}>
        <InputsDate
          mappedSticker={mappedSticker}
          setMessageText={setMessageText}
          inputsArray={inputsArray}
          inputNames={inputNames}
          setInputIndexCounter={setInputIndexCounter}
        />
        <InputsTime
          mappedSticker={mappedSticker}
          setMessageText={setMessageText}
          inputsArray={inputsArray}
          inputNames={inputNames}
          setInputIndexCounter={setInputIndexCounter}
          saveButtonRef={saveButtonRef}
        />
        <Message
          mappedSticker={mappedSticker}
          messageText={messageText}
        />

        <div className={styles.buttons}>
          <SaveButton
            mappedSticker={mappedSticker}
            setMessageText={setMessageText}
            saveButtonRef={saveButtonRef}
          />
          <RemoveButton
            mappedSticker={mappedSticker}
          />
        </div>

      </div>

    </div>
  )
}