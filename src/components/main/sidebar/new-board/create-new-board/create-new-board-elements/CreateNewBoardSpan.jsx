
import styles from './createNewBoardElements.module.css'


export default function CreateNewBoardSpan() {
  return (
    <div className={styles.container}>
      <span
        data-id={'createNewBoardSpan'}
      >
        + CREATE BOARD
      </span>
    </div>
  )
}