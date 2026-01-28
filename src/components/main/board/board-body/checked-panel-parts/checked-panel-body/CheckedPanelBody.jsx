


import styles from './checkedPanelBody.module.css'
import StickerOnCheckedStickersPanel from '../../checked-sticker/CheckedSticker.jsx'
import { useState, useRef, useEffect, useContext } from 'react'
import { MainContext } from '../../../../../../contexts/MainContext.jsx'


export default function CheckedPanelBody({ stickersToShowOnCheckedPanel }) {

  const { currentPageOnCheckedPanelBody, setCurrentPageOnCheckedPanelBody, setNumberOfPagesOnCheckedPanelBody } = useContext(MainContext)
  const [randomUUID, setRandomUUID] = useState(crypto.randomUUID())
  const checkedPanelBodyRef = useRef(null)
  const [stickersToRender, setStickersToRender] = useState([])
  const [stickersPerPage, setStickersPerPage] = useState(0)


  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      const containerHeight = entries[0].contentRect.height
      const topOffset = 40
      const stickerHeight = 150
      const step = 55
      const rawPerPage = Math.floor((containerHeight - topOffset - stickerHeight) / step) + 1
      const perPage = Math.max(0, rawPerPage)
      setStickersPerPage(perPage)
    })

    resizeObserver.observe(checkedPanelBodyRef.current)
    return () => resizeObserver.disconnect()
  }, [])


  useEffect(() => {
    if (!stickersPerPage) return

    const pages = Math.ceil(stickersToShowOnCheckedPanel.length / stickersPerPage)
    setNumberOfPagesOnCheckedPanelBody(pages)
    const sliceFirstArg = (currentPageOnCheckedPanelBody - 1) * stickersPerPage
    const sliceSecondArg = currentPageOnCheckedPanelBody * stickersPerPage
    setStickersToRender(stickersToShowOnCheckedPanel.slice(sliceFirstArg, sliceSecondArg))

    if (pages <= 1) {
      setCurrentPageOnCheckedPanelBody(1)
    }
  }, [stickersPerPage, stickersToShowOnCheckedPanel])


  return (
    <div className={`${styles.container} scroll`} ref={checkedPanelBodyRef}>
      {stickersToRender.map((sticker, index) => {
        return (
          <StickerOnCheckedStickersPanel
            key={sticker.stickerId + randomUUID}
            topPosition={65 + index * 55}
            mappedSticker={sticker}
            setRandomUUID={setRandomUUID}
          />
        )
      })}
    </div>
  )
}