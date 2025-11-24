
import styles from './addDateIcon.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../../context-provider/ContextProvider.jsx'


export default function AddDateIcon({ mappedSticker }) {

  const BASE_URL = import.meta.env.BASE_URL
  const { setIsAddDateOpen } = useContext(MainContext)


  function handleClick() {
    setIsAddDateOpen(mappedSticker.stickerId)
  }


  return (
    <div
      className={styles.container}
      onClick={handleClick}
    >
      <div className={styles.image}>
        <img src={`${BASE_URL}images/icon-date2.png`} alt="add date" />
      </div>
    </div>
  )
}