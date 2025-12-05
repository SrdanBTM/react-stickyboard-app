

import styles from './allButton.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../context-provider/ContextProvider.jsx'


export default function AllButton() {
  
  const { isFilterResultBoard, setIsFilterResultBoard, setIsSearchResultBoard, setCurrentBoardId, setSearchValue } = useContext(MainContext)

  
  function handleClick() {
    setIsFilterResultBoard(true)
    setIsSearchResultBoard(false)
    setCurrentBoardId(null)
    setSearchValue('')
  }


  return (
    <div className={styles.container}>
      <button
        onClick={handleClick}
        style={{
          border: isFilterResultBoard ? '1px solid rgba(255,255,255,0.5)' : '',
          borderRadius: isFilterResultBoard ? '5px' : ''
        }}
      >
        All dated
      </button>
    </div>
  )
}