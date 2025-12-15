

import styles from './inputsDate.module.css'
import Input from '../input/Input.jsx'


export default function InputsDate() {
  return (
    <div className={styles.container}>

      <span className={styles.label}>
        Date :
      </span>

      <div className={styles.inputs}>
        <Input placeholder={'dd'} />
        <span> / </span>
        <Input placeholder={'mm'} />
        <span> / </span>
        <Input placeholder={'yy'} />
      </div>

    </div>
  )
}