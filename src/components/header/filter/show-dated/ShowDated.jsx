

import styles from './showDated.module.css'
import DatedMenuIcon from './dated-menu-icon/DatedMenuIcon.jsx'
import DatedMenu from './dated-menu/DatedMenu.jsx'
import DatedButton from './dated-button/DatedButton.jsx'


export default function ShowDated() {
  return (
    <div className={styles.container}>
      <DatedButton />
      <DatedMenuIcon />
      <DatedMenu />
    </div>
  )
}