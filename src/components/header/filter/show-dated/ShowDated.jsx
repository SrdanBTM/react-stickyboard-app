

import styles from './showDated.module.css'
import DatedMenuIcon from '../dated-menu-icon/DatedMenuIcon.jsx'
import DatedMenu from '../dated-menu/DatedMenu.jsx'


export default function ShowDated() {
  return (
    <div className={styles.container}>
      <button>
        Dated - Next 3 Days
      </button>

      <DatedMenuIcon />

      <DatedMenu />
    </div>
  )
}