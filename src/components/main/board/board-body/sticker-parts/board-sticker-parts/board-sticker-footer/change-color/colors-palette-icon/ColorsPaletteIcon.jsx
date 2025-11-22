

import styles from './colorsPaletteIcon.module.css'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../../../context-provider/ContextProvider.jsx'


export default function ColorPaletteIcon() {

  const BASE_URL = import.meta.env.BASE_URL
  const { } = useContext(MainContext)


  return (
    <motion.div
      className={styles.container}
    >
      <img src={`${BASE_URL}images/icon-palette1.png`} alt="color palette icon" />
    </motion.div>
  )
}