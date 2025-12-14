

import styles from './filter.module.css'
import AllDated from './all-dated/AllDated.jsx'
import DatedNextDays from './dated-next-days/DatedNextDays.jsx'


export default function Filter() {
  return (
    <div className={styles.container}>
      <span>Show: </span>
      <AllDated />
      <span>|</span>
      <DatedNextDays />
    </div>
  )
}