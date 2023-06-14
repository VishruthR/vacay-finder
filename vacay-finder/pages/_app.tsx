import "@/styles/globals.css";
import "@/styles/styles.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
// import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer";
import { Marcellus_SC } from "@next/font/google";
import { Analytics } from "@vercel/analytics/react";

import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });

const fonts = {
  heading: "Marcellus_SC",
};

const theme = extendTheme({ fonts });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <Analytics />
    </ChakraProvider>
  );
}
