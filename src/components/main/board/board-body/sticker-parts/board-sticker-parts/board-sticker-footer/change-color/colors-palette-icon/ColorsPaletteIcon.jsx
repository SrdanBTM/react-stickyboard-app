

import styles from './colorPaletteIcon.module.css'


export default function ColorPaletteIcon() {

  const BASE_URL = import.meta.env.BASE_URL

  return (
    <div className={styles.container}>
      <img src={`${BASE_URL}images/icon-palette1.png`} alt="color palette icon" />
    </div>
  )
}