import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import Navbar from "@/components/Navbar"
import Footer from '@/components/Footer'

const fonts = {
  heading: 'Marcellus_SC'
}

const theme = extendTheme({ fonts })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  )
}
