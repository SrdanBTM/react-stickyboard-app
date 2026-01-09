

import styles from './inputsDateTime.module.css'
import Input from '../input/Input.jsx'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../../contexts/MainContext.jsx'
import { updateSticker } from '../../../../../../../../helper-functions/HelperFunctionsHandleSticker.jsx'


export default function InputsTime({ mappedSticker, inputsArray, inputNames, setInputIndexCounter, saveButtonRef }) {

  const { currentBoardId, setBoards } = useContext(MainContext)


  function handleChange(inputName, e) {

    // is value = number validation
    const value = e.currentTarget.value
    if (!/^\d*$/.test(value)) return


    // update sticker
    const currentStickerId = mappedSticker.stickerId
    updateSticker(setBoards, currentBoardId, currentStickerId, {
      key: 'dateTimeCurrentValue',
      value: {
        ...mappedSticker.dateTimeCurrentValue,
        [inputName]: e.currentTarget.value
      }
    })
    updateSticker(setBoards, currentBoardId, currentStickerId, { key: 'isTryToSaveUnvalidDateTime', value: false })


    // change input focus
    const currentInputIndex = inputNames.indexOf(inputName)
    if (e.currentTarget.value.length === 2 && inputName !== 'minutes') {
      setInputIndexCounter(currentInputIndex + 1)
    } else if (e.currentTarget.value.length === 2 && inputName === 'minutes') {
      saveButtonRef.current.focus()
    }
  }


  return (
    <div className={styles.container}>

      <span className={styles.label}>
        Time
      </span>

      <div className={styles.inputs}>
        <Input
          inputName='hours'
          placeholder={'hh'}
          handleChange={handleChange}
          value={mappedSticker.dateTimeCurrentValue.hours ?? ''}
          inputRef={inputsArray[3]}
        />

        <span>:</span>

        <Input
          inputName='minutes'
          placeholder={'mm'}
          handleChange={handleChange}
          value={mappedSticker.dateTimeCurrentValue.minutes ?? ''}
          inputRef={inputsArray[4]}
        />
      </div>

    </div>
  )
}