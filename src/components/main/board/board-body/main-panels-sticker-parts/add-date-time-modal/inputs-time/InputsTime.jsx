

import styles from './inputsTime.module.css'
import Input from '../input/Input.jsx'


export default function InputsTime() {
  return (
    <div className={styles.container}>

      <span className={styles.label}>
        Time :
      </span>

      <div className={styles.inputs}>
        <Input placeholder={'hh'} />
        <span>:</span>
        <Input placeholder={'mm'} />
      </div>

    </div>
  )
}