

import styles from './inputs.module.css'
import DateInput from './date-input/DateInput.jsx'
import TimeInput from './time-input/TimeInput.jsx'


export default function Inputs() {

  return (
    <div className={styles.container}>
      <DateInput />
      <TimeInput />
    </div>
  )
}