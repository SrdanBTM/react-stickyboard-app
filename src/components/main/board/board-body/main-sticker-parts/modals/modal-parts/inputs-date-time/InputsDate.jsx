

import styles from './inputsDateTime.module.css'
import Input from '../input/Input.jsx'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../../contexts/MainContext.jsx'
import { updateSticker } from '../../../../../../../../helper-functions/HelperFunctionsHandleSticker.jsx'


export default function InputsDate({ mappedSticker, inputsArray, inputNames, inputIndexCounter, setInputIndexCounter }) {

  const { currentBoardId, setBoards } = useContext(MainContext)


  function handleChange(inputName, e) {

    const currentStickerId = mappedSticker.stickerId
    updateSticker(setBoards, currentBoardId, currentStickerId, {
      key: 'dateTimeCurrentValue',
      value: {
        ...mappedSticker.dateTimeCurrentValue,
        [inputName]: e.currentTarget.value
      }
    })
    updateSticker(setBoards, currentBoardId, currentStickerId, { key: 'isTryToSaveUnvalidDateTime', value: false })

    const currentInputIndex = inputNames.indexOf(inputName)
    if (e.currentTarget.value.length === 2) {
      setInputIndexCounter(currentInputIndex + 1)
    }

  }


  return (
    <div className={styles.container}>

      <span className={styles.label}>
        Date
      </span>

      <div className={styles.inputs}>
        <Input
          inputName='day'
          placeholder='dd'
          handleChange={handleChange}
          value={mappedSticker.dateTimeCurrentValue.day ?? ''}
          inputRef={inputsArray[0]}
        />

        <span> / </span>

        <Input
          inputName='month'
          placeholder='mm'
          handleChange={handleChange}
          value={mappedSticker.dateTimeCurrentValue.month ?? ''}
          inputRef={inputsArray[1]}
        />

        <span> / </span>

        <Input
          inputName='year'
          placeholder='yy'
          handleChange={handleChange}
          value={mappedSticker.dateTimeCurrentValue.year ?? ''}
          inputRef={inputsArray[2]}
        />
      </div>

    </div>
  )
}