export function getSizeImage(imageUrl: string, width: number, height: number = width) {
  return imageUrl + `?param=${width}y${height}`
}

export function getCount(count: number) {
  if (count < 0) return
  if (count < 10000) {
    return count
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 1000) / 10 + '万'
  } else {
    return Math.floor(count / 10000000) / 10 + '亿'
  }
}

// 获取当前音乐
export function getPlayUrl(id: number) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}

// 处理时间函数
export function formatTimeToMinute(params: number) {
  // 先把拿到的毫秒转为秒
  const second = Math.floor(params / 1000) % 60
  const minute = Math.floor(params / 1000 / 60)
  const formatSecond = String(second).padStart(2, '0')
  const formatMinute = String(minute).padStart(2, '0')
  return `${formatMinute}:${formatSecond}`
}

export function formatDate(time: any, fmt: string): string {
  const date = new Date(time)

  // Matching the year
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }

  // Defining the formatting object for date parts
  const o: Record<string, number> = {
    'M+': date.getMonth() + 1, // Months start from 0, so we add 1
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }

  // Replacing based on the formatting object
  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      const str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str))
    }
  }

  return fmt
}

// Left padding with zero
function padLeftZero(str: string): string {
  return ('00' + str).substr(str.length)
}

// Formatting date as 'MM月dd日'
export function formatMonthDay(time: any): string {
  return formatDate(time, 'MM月dd日')
}

export function getQueryObject(url?: string): Record<string, string> {
  url = url ?? window.location.href
  const search = url.substring(url.lastIndexOf('?') + 1)
  const obj: Record<string, string> = {}
  const reg = /([^?&=]+)=([^?&=]*)/g
  search.replace(reg, (rs, $1, $2) => {
    const name = decodeURIComponent($1)
    let val = decodeURIComponent($2)
    val = String(val)
    obj[name] = val
    return rs
  })
  return obj
}
