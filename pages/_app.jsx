import '../styles/globals.css';
import "nprogress/nprogress.css";
import Router from 'next/router';
import NProgress from 'nprogress';
import { SessionProvider } from "next-auth/react";

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

NProgress.configure({ showSpinner: false })


function MyApp({
  Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp