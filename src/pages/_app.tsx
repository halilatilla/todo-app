import React from 'react'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import store from '@src/store/store'

import '@src/styles/tailwind.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
