

// SET CURRENT BOARD ID

export function changeCurrentBoardId(setBoards, currentBoardId, setCurrentBoardId) {
  setBoards(prev => {
    const filtered = prev.filter(board => board.boardId !== currentBoardId)

    if (filtered.length > 0) {
      setCurrentBoardId(filtered[filtered.length - 1].boardId)
    } else {
      setCurrentBoardId(null)
    }

    return filtered
  })
}


