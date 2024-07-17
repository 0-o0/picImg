export function transiTime(timestamp) {
  const date = new Date(timestamp)
  const formatNumber = n => n < 10 ? `0${n}` : n
  return `${date.getFullYear()}-${formatNumber(date.getMonth() + 1)}-${formatNumber(date.getDate())} ${formatNumber(date.getHours())}:${formatNumber(date.getMinutes())}`
}

export function getImageBase64(img, ext, callback) {
  img.setAttribute('crossorigin', 'Anonymous')
  var canvas = document.createElement('canvas')
  canvas.width = img.width
  canvas.height = img.height
  var ctx = canvas.getContext('2d')
  ctx.drawImage(img, 0, 0, img.width, img.height)
  var dataURL = canvas.toDataURL('image/' + ext)
  canvas = null
  if (callback) {
    callback(dataURL)
  }
}

export function getUrlBase64(url, ext, callback) {
  var img = new Image()
  img.crossOrigin = 'Anonymous'
  img.src = url
  img.onload = function () {
    var canvas = document.createElement('canvas')
    canvas.height = 60
    canvas.width = 85
    var ctx = canvas.getContext('2d')
    ctx.drawImage(img, 0, 0, 60, 85)
    var dataURL = canvas.toDataURL('image/' + ext)
    callback(dataURL)
    canvas = null
  }
  img.onerror = function () {
    callback(null, new Error('Image loading failed'))
  }
}

export function downLoadQueue(arr) {
  const data = []
  let sequence = Promise.resolve()
  arr.forEach(function (item) {
    sequence = sequence.then(item).then(r => {
      data.push(r)
      return data
    }).catch(error => {
      console.error('Error in sequence:', error)
      return data // Continue with the next promise even if one fails
    })
  })
  return sequence
}

export function debounce(fn, wait = 500, isImmediate = false) {
  let timerId = null
  let flag = true
  return function (...args) {
    const context = this
    if (timerId) clearTimeout(timerId)
    if (isImmediate && flag) {
      fn.apply(context, args)
      flag = false
    }
    timerId = setTimeout(() => {
      flag = true
      if (!isImmediate) fn.apply(context, args)
    }, wait)
  }
}

const deepCopy = obj => {
  if (typeof obj !== 'object' || obj === null) return obj
  const copy = Array.isArray(obj) ? [] : {}
  for (const key in obj) {
    const value = obj[key]
    copy[key] = deepCopy(value)
  }
  return copy
}

export { deepCopy }
