import { AppProps } from "next/app";
import RootLayout from "./layout";
import "./globals.css"
import "../../components/nav/nav.module.css"

export default function MyApp({ Component, pageProps }: AppProps) {
    return(
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  )}