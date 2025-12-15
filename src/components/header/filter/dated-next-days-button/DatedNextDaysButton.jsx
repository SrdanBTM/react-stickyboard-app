

import styles from './datedNextDaysButton.module.css'
import { MainContext } from '../../../../contexts/MainContext.jsx'
import { useContext } from 'react'


export default function DatedNextDaysButton() {

  const { datedNextDaysValue } = useContext(MainContext)


  return (
    <div className={styles.container}>
      <button>
        {`Dated - Next ${datedNextDaysValue} days`}
      </button>
    </div>
  )
}