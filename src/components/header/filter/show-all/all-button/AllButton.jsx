

import styles from './allButton.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../context-provider/ContextProvider.jsx'


export default function AllButton() {

  const { currentBoardPanel, setCurrentBoardPanel, setCurrentBoardId, setSearchValue } = useContext(MainContext)


  function handleClick() {
    setCurrentBoardId(null)
    setSearchValue('')
    setCurrentBoardPanel('filter')
  }


  return (
    <div className={styles.container}>
      <button
        onClick={handleClick}
        style={{
          border: currentBoardPanel === 'filter' ? '1px solid rgba(255,255,255,0.5)' : '',
          borderRadius: currentBoardPanel === 'filter' ? '5px' : ''
        }}
      >
        All dated
      </button>
    </div>
  )
}