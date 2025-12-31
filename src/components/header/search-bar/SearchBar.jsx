

import styles from './searchBar.module.css'
import { useContext, useState, useEffect, useRef } from 'react'
import { MainContext } from '../../../contexts/MainContext.jsx'
import { updateAllStickers } from '../../../helper-functions/HelperFunctionsHandleSticker.jsx'
import { IconSearch } from '../../../icons/Icons.jsx'


export default function SearchBar() {

  const [isSearchInput, setIsSearchInput] = useState(false)
  const { setCurrentBoardPanel, setBoards, searchValue, setSearchValue, setCurrentBoardId, currentBoardId, setSelectedFilterButton } = useContext(MainContext)
  const inputRef = useRef()


  function handleChange(e) {
    const propertyToUpdate1 = { key: 'isAddDateTimeModalOpen', value: false }
    const propertyToUpdate2 = { key: 'isChangeColorModalOpen', value: false }
    const propertyToUpdate3 = { key: 'isDeleteModalOpen', value: false }
    updateAllStickers(setBoards, currentBoardId, propertyToUpdate1)
    updateAllStickers(setBoards, currentBoardId, propertyToUpdate2)
    updateAllStickers(setBoards, currentBoardId, propertyToUpdate3)

    setSearchValue(e.target.value)
    setCurrentBoardId(null)
    setSelectedFilterButton(null)
    setCurrentBoardPanel('search')
  }

  function handleClick() {
    setIsSearchInput(true)
  }

  useEffect(()=>{
    if (isSearchInput) {
      inputRef.current.focus()
    }
  },[isSearchInput])



  return (
    <div className={styles.container}>

      {isSearchInput
        ?
        <div className={styles.input}>
          <input
            type="text"
            placeholder='Find a sticker by title...'
            onChange={handleChange}
            value={searchValue}
            ref={inputRef}
          />
        </div>
        :
        <div
          className={`${styles.icon} icon iconNormal`}
          onClick={handleClick}
        >
          <IconSearch />
        </div>
      }

    </div >
  )
}