import Axios from 'axios'

export const fetch = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  params: {
    apikey: process.env.NEXT_PUBLIC_API_KEY,
  },
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})
