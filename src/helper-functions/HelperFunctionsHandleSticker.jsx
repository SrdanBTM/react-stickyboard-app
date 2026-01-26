

// UPDATE STICKER
export function updateSticker(setBoards, currentBoardId, currentStickerId, propertyToUpdate) {
  const { key, value } = propertyToUpdate

  if (currentBoardId) {
    setBoards(prev => prev.map(board => {
      return (
        board.boardId === currentBoardId
          ? {
            ...board,
            stickers: board.stickers.map((sticker => {
              return (
                sticker.stickerId === currentStickerId
                  ? { ...sticker, [key]: value }
                  : sticker
              )
            }))
          }
          : board
      )
    }))

  } else {
    setBoards(prev => prev.map(board => {
      const hasSticker = board.stickers.some(sticker => sticker.stickerId === currentStickerId)

      if (hasSticker) {
        return {
          ...board,
          stickers: board.stickers.map(sticker =>
            sticker.stickerId === currentStickerId
              ? { ...sticker, [key]: value }
              : sticker
          )
        }
      }

      return board
    }))
  }
}





// UPDATE ALL STICKERS
export function updateAllStickers(setBoards, currentBoardId, propertyToUpdate) {
  const { key, value } = propertyToUpdate

  setBoards(prev => prev.map(board => {
    return (
      board.boardId === currentBoardId
        ? {
          ...board, stickers: board.stickers.map(sticker => {
            return (
              { ...sticker, [key]: value }
            )
          })
        }
        : board
    )
  }))
}





// ADD STICKER
export function addSticker(setBoards, currentBoardId, stickerTemplate, boardName, stickerId, newValueZIndexCounter, positionXValue, positionYValue) {
  const stickerToAdd = {
    ...stickerTemplate,
    stickerId: stickerId,
    boardId: currentBoardId,
    boardName: boardName,
    zIndex: newValueZIndexCounter,
    positionX: positionXValue,
    positionY: positionYValue
  }

  setBoards(prev => prev.map(board => {
    return (
      board.boardId === currentBoardId
        ? { ...board, stickers: [...board.stickers, stickerToAdd] }
        : board
    )
  }))
}





// DELETE STICKER
export function deleteSticker(setBoards, currentBoardId, currentStickerId) {
  if (currentBoardId) {
    setBoards(prev => prev.map(board => {
      return (
        board.boardId === currentBoardId
          ? {
            ...board,
            stickers: board.stickers.filter(sticker => sticker.stickerId !== currentStickerId)
          }
          : board
      )
    }))

  } else {
    setBoards(prev => prev.map(board => {
      const hasSticker = board.stickers.some(sticker => sticker.stickerId === currentStickerId)

      if (hasSticker) {
        return (
          {
            ...board,
            stickers: board.stickers.filter(sticker => sticker.stickerId != currentStickerId)
          }
        )
      }

      return board
    }))
  }
}



// DELETE ALL CHECKED STICKERS
export function deleteAllCheckedStickers(setBoards) {
  setBoards(prev => prev.map(board => ({
    ...board,
    stickers: board.stickers.filter(sticker => sticker.checked === false)
  })))
}


