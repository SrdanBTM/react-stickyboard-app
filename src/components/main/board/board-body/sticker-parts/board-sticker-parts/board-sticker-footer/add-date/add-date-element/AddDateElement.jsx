

import styles from './addDateElement.module.css'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'



export default function AddDateElement() {
  return (
    <div className={styles.container}>
      <div className={styles.inputs}>
        <input type="text" placeholder='Write date' />
        <input type="text" placeholder='Write time' />
      </div>

      <span>22.11.2025  |  Saturday  |  10:31</span>

      <div className={styles.buttons}>
        <button className={styles.saveButton}>SAVE</button>
        <button className={styles.closeButton}>CLOSE</button>
      </div>

      {/* <DayPicker /> */}
    </div>
  )
}