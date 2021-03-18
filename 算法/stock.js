window.onload = () => {}

const foo = (ms) => {
  const timer = setTimeout(() => {
    if (percent === 100) {
      clearTimeout(timer)
    } else {
      percent++
      processDiv(percent)
    }
  }, ms)
}
