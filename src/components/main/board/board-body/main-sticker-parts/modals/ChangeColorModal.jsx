

import styles from './modals.module.css'
import Title from './modal-parts/title/Title.jsx'
import Palette from './modal-parts/palette/Palette.jsx'


export default function ChangeColorModal({ mappedSticker }) {



  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: mappedSticker.color,
      }}
    >

      <div className={styles.header}>
        <Title title='Pick sticker color' />
      </div>

      <div className={styles.body}>
        <Palette mappedSticker={mappedSticker} />
      </div>

    </div>
  )
}




