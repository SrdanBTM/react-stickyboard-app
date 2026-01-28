

import styles from './checkedPanelFooter.module.css'
import Button from './button/Button.jsx'
import Message from './message/Message.jsx'
import { IconArrowDoubleLeft } from '../../../../../../icons/Icons.jsx'
import { IconArrowDoubleRight } from '../../../../../../icons/Icons.jsx'
import { useContext } from 'react'
import { MainContext } from '../../../../../../contexts/MainContext.jsx'



export default function CheckedPanelFooter() {

  const { numberOfPagesOnCheckedPanelBody, setCurrentPageOnCheckedPanelBody, currentPageOnCheckedPanelBody } = useContext(MainContext)


  function handleClickLeft() {
    setCurrentPageOnCheckedPanelBody(prev => prev > 1 ? prev - 1 : prev)
  }


  function handleClickRight() {
    setCurrentPageOnCheckedPanelBody(prev => prev < numberOfPagesOnCheckedPanelBody ? prev + 1 : prev)
  }


  return (
    <div className={styles.container}>

      <div className={styles.button}>
        {numberOfPagesOnCheckedPanelBody > 1 && currentPageOnCheckedPanelBody > 1
          && <Button
            IconArrow={IconArrowDoubleLeft}
            handleClick={handleClickLeft}
          />
        }
      </div>

      <div className={styles.message}>
        {numberOfPagesOnCheckedPanelBody > 1
          && <Message />
        }
      </div>

      <div className={styles.button}>
        {numberOfPagesOnCheckedPanelBody > 1 && currentPageOnCheckedPanelBody < numberOfPagesOnCheckedPanelBody
          && <Button
            IconArrow={IconArrowDoubleRight}
            handleClick={handleClickRight}
          />
        }
      </div>

    </div>
  )
}