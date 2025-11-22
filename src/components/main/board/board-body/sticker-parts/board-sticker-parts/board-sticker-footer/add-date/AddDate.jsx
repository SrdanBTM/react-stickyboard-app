
import { useState, useContext, useEffect } from 'react'
import { MainContext } from '../../../../../../../../context-provider/ContextProvider.jsx'
import styles from './addDate.module.css'
import AddDateCalendar from './add-date-calendar/AddDateCalendar.jsx'
import AddDateIcon from './add-date-icon/AddDateIcon.jsx'


export default function AddDate({ mappedSticker }) {

  const { } = useContext(MainContext)
  const [isMouseOver, setIsMouseOver] = useState(false)


  function handleMouseOver() {
    setIsMouseOver(true)
  }


  function handleMouseOut() {
    setIsMouseOver(false)
  }


  return (
    <div
      className={styles.container}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <AddDateIcon />
      <AddDateCalendar />
    </div>
  )
}




