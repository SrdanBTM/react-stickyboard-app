


import styles from './createNewBoardElements.module.css'


export default function CreateNewBoardButton() {
  return (
    <div className={styles.container}>
      <button data-id={'createNewBoardSpan'}>
        + CREATE BOARD
      </button>
    </div>
  )
}