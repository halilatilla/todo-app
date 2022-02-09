export default function removeWhiteSpace(text: string) {
  return text.replace(/\s+/g, ' ').trim()
}
