


import styles from './boardListInput.module.css'

export default function BoardListInput({
  board,
  inputRef,
  inputValue,
  handleChangeInput,
  handleKeyDownInput
}) {

  return (
    <div
      className={styles.container}
      value={inputValue}
      onChange={handleChangeInput}
      onKeyDown={handleKeyDownInput}
    >
      <input
        type="text"
        ref={board.isFocused ? inputRef : null}
      />
    </div>
  )
}