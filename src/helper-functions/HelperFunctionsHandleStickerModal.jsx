



// close current sticker modal
export function closeCurrentStickerModal(updateSticker, setBoards, currentBoardId, currentStickerId, currentModal) {
  const propertyToUpdate = { key: currentModal, value: false }
  updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate)
}


// open current sticker modal
export function openCurrentStickerModal(updateSticker, setBoards, currentBoardId, currentStickerId, currentModal) {
  const propertyToUpdate = { key: currentModal, value: true }
  updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate)
}


// close all sticker modals
export function closeAllStickerModals(updateSticker, setBoards, currentBoardId, currentStickerId) {
  const propertyToUpdate1 = { key: 'isDeleteModalOpen', value: false }
  const propertyToUpdate2 = { key: 'isAddDateTimeModalOpen', value: false }
  const propertyToUpdate3 = { key: 'isChangeColorModalOpen', value: false }
  updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate1)
  updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate2)
  updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate3)
}

