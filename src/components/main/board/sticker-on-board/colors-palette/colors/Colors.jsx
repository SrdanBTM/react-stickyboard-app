

import styles from './colors.module.css'

export default function Colors() {

  const colors = [
    '--sticker-color1',
    '--sticker-color2',
    '--sticker-color3',
    '--sticker-color4',
    '--sticker-color5',
    '--sticker-color6'
  ]

  return (
    <div className={styles.container}>
      {colors.map((color, index) => {
        return (
          <div
            key={index}
            className={styles.oneColor}
            style={{ backgroundColor: `var(${color})` }}
          >
          </div>
        )
      })}
    </div>

  )
}



