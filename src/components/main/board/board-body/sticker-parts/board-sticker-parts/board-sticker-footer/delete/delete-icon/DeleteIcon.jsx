


import styles from './deleteIcon.module.css'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { MainContext } from '../../../../../../../../../context-provider/ContextProvider.jsx'


export default function DeleteSticker() {

  const BASE_URL = import.meta.env.BASE_URL
  const { theme } = useContext(MainContext)


  return (
    <motion.div
      className={styles.container}
    >
      <img
        src={`${BASE_URL}${theme === 'lightTheme' ? 'images/icon-delete5.png' : 'images/icon-delete5.png'}`}
        alt="delete" />
    </motion.div>
  )
}