export const setSearchHistoryItem = (word: string) => {
  const historyItems = localStorage.getItem('history-search')
  if (!historyItems) {
    localStorage.setItem('history-search', word)
  } else {
    const newWord = word + '|'
    const historyItemsWithoutOldWord = historyItems
      .split('|')
      .filter((elem: string) => elem !== word)
      .join('|')
    localStorage.setItem('history-search', newWord + historyItemsWithoutOldWord)
  }
}

export const getSearchHistory = () => {
  const historyItems = localStorage.getItem('history-search')
  return historyItems ? historyItems.split('|') : []
}
