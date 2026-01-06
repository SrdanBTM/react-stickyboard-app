

import styles from './searchBar.module.css'
import { useContext, useState, useEffect, useRef } from 'react'
import { MainContext } from '../../../contexts/MainContext.jsx'
import { updateAllStickers } from '../../../helper-functions/HelperFunctionsHandleSticker.jsx'
import { IconSearch } from '../../../icons/Icons.jsx'


export default function SearchBar() {

  const [isSearchInput, setIsSearchInput] = useState(false)
  const { currentBoardPanel, setCurrentBoardPanel, setBoards, searchValue, setSearchValue, setCurrentBoardId, currentBoardId, setSelectedFilterButton } = useContext(MainContext)
  const inputRef = useRef()


  function handleChange(e) {
    const propertyToUpdate1 = { key: 'isAddDateTimeModalOpen', value: false }
    const propertyToUpdate2 = { key: 'isChangeColorModalOpen', value: false }
    const propertyToUpdate3 = { key: 'isDeleteModalOpen', value: false }
    updateAllStickers(setBoards, currentBoardId, propertyToUpdate1)
    updateAllStickers(setBoards, currentBoardId, propertyToUpdate2)
    updateAllStickers(setBoards, currentBoardId, propertyToUpdate3)

    setSearchValue(e.target.value)
  }

  function handleClick() {
    setIsSearchInput(true)
    setCurrentBoardId(null)
    setSelectedFilterButton(null)
    setCurrentBoardPanel('search')
  }


  useEffect(() => {
    if (isSearchInput && inputRef.current)
      inputRef.current.focus()
  }, [currentBoardPanel])


  return (
    <div className={styles.container}>

      {isSearchInput && currentBoardPanel === 'search'
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
        <button
          className='icon iconNormal'
          onClick={handleClick}
          title='Search by title'
        >
          <IconSearch />
        </button>
      }

    </div >
  )
}