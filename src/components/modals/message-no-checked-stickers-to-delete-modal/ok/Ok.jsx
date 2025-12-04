

import styles from './ok.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../context-provider/ContextProvider.jsx'


export default function Ok() {

  const { setIsMessageNoCheckedStickersToDeleteModalOpen } = useContext(MainContext)

  function handleClick() {
    setIsMessageNoCheckedStickersToDeleteModalOpen(false)
  }

  return (
    <button
      className={styles.button}
      onClick={handleClick}
    >
      OK
    </button>
  )
}