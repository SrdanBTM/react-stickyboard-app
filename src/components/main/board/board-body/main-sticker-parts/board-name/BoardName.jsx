


import styles from './boardName.module.css'


export default function BoardName({ mappedSticker }) {

  return (
    <div className={styles.container}>
      <span>{mappedSticker.boardName}</span>
    </div>
  )
}