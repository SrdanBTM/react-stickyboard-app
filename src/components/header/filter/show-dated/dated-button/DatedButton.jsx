

import styles from './datedButton.module.css'


export default function DatedButton({ filterDatedTitle }) {

  return (
    <div className={styles.container}>
      <button>
        {`Dated - ${filterDatedTitle}`}
      </button>
    </div>
  )
}