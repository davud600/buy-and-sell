import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.style.overflow = 'overlay'
  }, [])

  return <Component {...pageProps} />
}
