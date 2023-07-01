import React from "react";
import Head from "next/head";
import type { AppProps } from 'next/app'
import { SSRProvider } from "react-bootstrap";
import '../scss/globals.scss'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <SSRProvider>
      <React.Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>TW-Test</title>
        </Head>
          <Component {...pageProps} />
      </React.Fragment>
    </SSRProvider >
  )
}
