

import styles from './filter.module.css'
import ShowAll from './show-all/ShowAll.jsx'
import ShowDated from './show-dated/ShowDated.jsx'


export default function Filter() {
  return (
    <div className={styles.container}>
      <span>Show: </span>
      <ShowAll />
      <span>|</span>
      <ShowDated />
    </div>
  )
}