module.exports = function(windows_timestamp) {

  if (typeof windows_timestamp == 'number') {
    windows_timestamp = windows_timestamp.toString()
  } else if (!/^\d+$/.test(windows_timestamp)) {
    throw new TypeError('Not a number')
  }

  const windows_timestamp_ms = parseInt(windows_timestamp.slice(0, -4))

  if (!Number.isSafeInteger(windows_timestamp_ms)) {
    throw new Error('Not a safe integer')
  }

  return new Date(windows_timestamp_ms + Date.UTC(1601 ,0, 1))
}