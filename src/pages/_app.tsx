import React from "react";;
import type { AppProps } from 'next/app'
import '../scss/globals.scss'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <React.Fragment>
      <Component {...pageProps} />
    </React.Fragment>
  )
}
