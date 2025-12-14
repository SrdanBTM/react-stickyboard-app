

import styles from './allDatedButton.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../contexts/MainContext.jsx'


export default function AllDatedButton() {

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