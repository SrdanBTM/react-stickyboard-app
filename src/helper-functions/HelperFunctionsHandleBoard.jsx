




// ADD BOARD
export function addBoard(setBoards, boardTemplate, boardNameValue) {
  const boardToAdd = {
    ...boardTemplate,
    boardId: crypto.randomUUID(),
    boardName: boardNameValue
  }

  setBoards(prev => [...prev, boardToAdd])
}




// UPDATE BOARD
export function updateBoard(setBoards, currentBoardId, propertyToUpdate) {
  const { key, value } = propertyToUpdate
  setBoards(prev => prev.map(board => {
    return (
      board.boardId === currentBoardId
        ? { ...board, [key]: value }
        : board
    )
  }))
}






// UPDATE ALL BOARDS
export function updateAllBoards(setBoards, currentBoardId, propertyTernaryPair) {
  const [propertyTrue, propertyFalse] = propertyTernaryPair
  const { keyTrue, valueTrue } = propertyTrue
  const { keyFalse, valueFalse } = propertyFalse

  setBoards(prev => {
    return (
      prev.map(board => {
        return (
          board.boardId === currentBoardId
            ? { ...board, [keyTrue]: valueTrue }
            : { ...board, [keyFalse]: valueFalse }
        )
      })
    )
  })
}





// DELETE BOARD
export function deleteBoard(setBoards, currentBoardId) {
  setBoards(prev => prev.filter(board => board.boardId !== currentBoardId && board))
}



