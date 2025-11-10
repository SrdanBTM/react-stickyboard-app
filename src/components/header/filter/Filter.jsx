

import styles from './filter.module.css'
import { useContext, useEffect } from 'react'
import { MainContext } from '../../../context-provider/ContextProvider.jsx'

export default function Filter() {

  const { filterInputValue, setFilterInputValue, setIsFilterBoard, setCurrentBoardId } = useContext(MainContext)

  function handleChange(e) {
    setFilterInputValue(e.target.value)
    setIsFilterBoard(true)
    setCurrentBoardId(null)
  }


  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder='Find a sticker by title...'
        onChange={handleChange}
        value={filterInputValue}
      />
    </div>
  )
}