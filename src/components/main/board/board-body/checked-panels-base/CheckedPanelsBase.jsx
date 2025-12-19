

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
        backgroundColor: isCheckedStickersPanelShow ? 'var(--bg-color1)' : 'rgba(0,0,0,0.6)',
        position: isCheckedStickersPanelShow ? '' : 'absolute',
        top: isCheckedStickersPanelShow ? '' : '0px',
        bottom: isCheckedStickersPanelShow ? '' : '0px',
        right: isCheckedStickersPanelShow || isCheckedStickersPanelHover ? '0' : '-210px'
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