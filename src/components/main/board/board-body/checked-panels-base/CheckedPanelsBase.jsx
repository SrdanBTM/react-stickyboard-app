

import styles from './checkedPanelsBase.module.css'
import CheckedPanelBody from '../checked-panels-parts/checked-panel-body/CheckedPanelBody.jsx'
import CheckedPanelHeader from '../checked-panels-parts/checked-panel-header/CheckedPanelHeader.jsx'
import CheckedPanelHover from '../checked-panels-parts/checked-panel-hover/CheckedPanelHover.jsx'
import CheckedPanelMessage from '../checked-panels-parts/checked-panel-message/CheckedPanelMessage.jsx'
import { useContext, useState, useEffect } from 'react'
import { MainContext } from '../../../../../contexts/MainContext.jsx'



export default function CheckedPanelsBase({ stickersToShowOnCheckedPanel }) {

  const [isCheckedStickersPanelHover, setIsCheckedStickersPanelHover] = useState()
  const { isCheckedStickersPanelShow } = useContext(MainContext)
  const [isHoverTitleShow, setIsHoverTitleShow] = useState(true)


  useEffect(() => {
    setIsCheckedStickersPanelHover(false)
    setTimeout(() => {
      setIsHoverTitleShow(true)
    }, 300)
  }, [stickersToShowOnCheckedPanel.length])


  function handleMouseOver() {
    setIsCheckedStickersPanelHover(true)
    setIsHoverTitleShow(false)
  }


  function handleMouseLeave() {
    setIsCheckedStickersPanelHover(false)
    setTimeout(() => {
      setIsHoverTitleShow(true)
    }, 300)
  }


  return (
    <div
      className={styles.container}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      style={{
        right: isCheckedStickersPanelShow || isCheckedStickersPanelHover ? '0' : '-200px'
      }}
    >
      <CheckedPanelHeader />

      {stickersToShowOnCheckedPanel.length > 0
        ? <CheckedPanelBody stickersToShowOnCheckedPanel={stickersToShowOnCheckedPanel} />
        : <CheckedPanelMessage />}

      <CheckedPanelHover
        isHoverTitleShow={isHoverTitleShow}
        isCheckedStickersPanelShow={isCheckedStickersPanelShow}
      />

    </div>
  )
}