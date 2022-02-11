import { useState, useEffect } from 'react'

function getLocalValue<I>(key: string, initialValue: I) {
  if (typeof window === 'undefined') return initialValue

  const localValue = localStorage.getItem(key)
  if (localValue) return JSON.parse(localValue)

  if (initialValue instanceof Function) return initialValue()

  return initialValue
}

export default function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    return getLocalValue(key, initialValue)
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value, key])

  return [value, setValue] as const
}
