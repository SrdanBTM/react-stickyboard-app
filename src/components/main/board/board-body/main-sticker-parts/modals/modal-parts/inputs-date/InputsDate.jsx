

import styles from './inputsDate.module.css'
import Input from '../input/Input.jsx'
import { useContext, useEffect, useState } from 'react'
import { MainContext } from '../../../../../../../../contexts/MainContext.jsx'
import { updateSticker } from '../../../../../../../../helper-functions/HelperFunctionsHandleSticker.jsx'


export default function InputsDate({ mappedSticker }) {

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
  }


  return (
    <div className={styles.container}>

      <span className={styles.label}>
        Date :
      </span>

      <div className={styles.inputs}>
        <Input
          inputName='day'
          placeholder='dd'
          handleChange={handleChange}
          value={mappedSticker.dateTimeCurrentValue.day ?? ''}
        />

        <span> / </span>

        <Input
          inputName='month'
          placeholder='mm'
          handleChange={handleChange}
          value={mappedSticker.dateTimeCurrentValue.month ?? ''}
        />

        <span> / </span>

        <Input
          inputName='year'
          placeholder='yy'
          handleChange={handleChange}
          value={mappedSticker.dateTimeCurrentValue.year ?? ''}
        />
      </div>

    </div>
  )
}