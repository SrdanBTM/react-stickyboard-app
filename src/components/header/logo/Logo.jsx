
import styles from './logo.module.css'
import { useContext } from 'react'
import { ThemeContext } from '../../../contexts/ThemeContext.jsx'
import { IconLogoDark } from '../../../icons/Icons.jsx'
import { IconLogoLight } from '../../../icons/Icons.jsx'


export default function Logo() {

  const { theme } = useContext(ThemeContext)

  return (
    <div className={styles.container}>

      {theme === 'darkTheme'
        ? <IconLogoDark />
        : <IconLogoLight />
      }

      <div className={styles.heading}>
        <h1>
          <span>S</span><span>T</span><span>I</span><span>C</span><span>K</span><span>Y</span>
        </h1>

        <h1>
          <span>B</span><span>O</span><span>A</span><span>R</span><span>D</span>
        </h1>
      </div>

    </div>
  )
}



