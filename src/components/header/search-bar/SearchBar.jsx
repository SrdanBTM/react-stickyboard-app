

import styles from './searchBar.module.css'
import { useContext, useEffect } from 'react'
import { MainContext } from '../../../context-provider/ContextProvider.jsx'

export default function SearchBar() {

  const { searchValue, setSearchValue, setIsSearchResultBoard, setCurrentBoardId } = useContext(MainContext)

  function handleChange(e) {
    setSearchValue(e.target.value)
    setIsSearchResultBoard(true)
    setCurrentBoardId(null)
  }


  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder='Find a sticker by title...'
        onChange={handleChange}
        value={searchValue}
      />
    </div>
  )
}