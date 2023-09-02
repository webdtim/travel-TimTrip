export const throttle = (fn: Function, ms: number) => {
  // индикатор готовности
  let ready = true
  const throttled = (...args: any[]) => {
    // если индикатор готовности имеет значение `false`
    if (!ready) return
    // выполняем коллбек
    fn(...args)
    // обновляем индикатор
    ready = false
    const timer = setTimeout(() => {
      // обновляем индикатор по истечении указанного времени
      ready = true
      // очищаем таймер
      clearTimeout(timer)
    }, ms)
  }
  return throttled
}
