export const debounce = (fn: Function, ms: number) => {
  let timer: any = null
  const debounced = (...args: any[]) => {
    // очищаем таймер при каждом вызове функции
    clearTimeout(timer)
    timer = setTimeout(() => {
      // выполняем коллбек
      fn(...args)
      // очищаем таймер
      clearTimeout(timer)
    }, ms)
  }
  return debounced
}
