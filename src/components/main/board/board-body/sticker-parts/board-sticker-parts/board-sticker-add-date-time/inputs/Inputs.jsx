

import styles from './inputs.module.css'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../../context-provider/ContextProvider.jsx'


export default function Inputs() {
  return (
    <div className={styles.container}>
      <input type="text" placeholder='Write date' />
      <input type="text" placeholder='Write time' />
    </div>
  )
}