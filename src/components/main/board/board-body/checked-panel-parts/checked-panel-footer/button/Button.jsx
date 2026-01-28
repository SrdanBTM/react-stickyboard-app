

import styles from './button.module.css'


export default function Button({ IconArrow, handleClick }) {
  return (
    <button
      className={`${styles.container} icon iconNormal`}
      onClick={handleClick}
    >
      <IconArrow />
    </button>
  )
}