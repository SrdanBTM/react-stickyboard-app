

import styles from './filter.module.css'
import { useContext, useState } from 'react'
import { MainContext } from '../../../context-provider/ContextProvider.jsx'

export default function Filter() {

  const { boards } = useContext(MainContext)
  const [inputValue, setInputValue] = useState('')


  function handleChange(e) {
    setInputValue(e.target.value)
  }


  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder='Find a sticker by title...'
        onChange={handleChange}
        value={inputValue}
      />
    </div>
  )
}