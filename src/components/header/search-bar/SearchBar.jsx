

import styles from './searchBar.module.css'
import { useContext, useEffect } from 'react'
import { MainContext } from '../../../context-provider/ContextProvider.jsx'

export default function SearchBar() {

  const { updateAllStickers, setBoards, searchValue, setSearchValue, setIsSearchResultBoard, setIsFilterResultBoard, setCurrentBoardId, currentBoardId } = useContext(MainContext)

  function handleChange(e) {
    const propertyToUpdate1 = { key: 'isAddDateTimeModalOpen', value: false }
    const propertyToUpdate2 = { key: 'isChangeColorModalOpen', value: false }
    const propertyToUpdate3 = { key: 'isDeleteModalOpen', value: false }
    updateAllStickers(setBoards, currentBoardId, propertyToUpdate1)
    updateAllStickers(setBoards, currentBoardId, propertyToUpdate2)
    updateAllStickers(setBoards, currentBoardId, propertyToUpdate3)

    setSearchValue(e.target.value)
    setIsSearchResultBoard(true)
    setIsFilterResultBoard(false)
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