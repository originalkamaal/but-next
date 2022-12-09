import '../styles/globals.css';
import "nprogress/nprogress.css";
import Router from 'next/router';
import NProgress from 'nprogress';
import { getSession, SessionProvider } from "next-auth/react";
import { ContextProvider } from '../backend/contexts/ContextProvider';

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

NProgress.configure({ showSpinner: false })


function MyApp({
  Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <ContextProvider>

        <Component {...pageProps} />
      </ContextProvider>
    </SessionProvider>
  )
}

export async function getServerSideProps(ctx) {

  return {
    props: {
      session: await getSession(ctx)
    }
  }
}

export default MyApp