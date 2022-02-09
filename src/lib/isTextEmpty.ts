export default function isTextEmpty(text: string) {
  if (!text || /^\s*$/.test(text)) {
    return true
  }
  return false
}
