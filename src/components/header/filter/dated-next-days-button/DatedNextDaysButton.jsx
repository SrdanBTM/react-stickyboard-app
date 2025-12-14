

import styles from './datedNextDaysButton.module.css'


export default function DatedNextDaysButton({ filterDatedTitle }) {

  return (
    <div className={styles.container}>
      <button>
        {`Dated - ${filterDatedTitle}`}
      </button>
    </div>
  )
}