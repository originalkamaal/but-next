import '../styles/globals.css';
import "nprogress/nprogress.css";
import Router from 'next/router';
import NProgress from 'nprogress';
import { getSession, SessionProvider } from "next-auth/react";
import 'react-toastify/dist/ReactToastify.css';
import { AdminContextProvider } from '../backend/contexts/SidebarContext'; import {
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";
import { ToastContainer } from 'react-toastify';

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

NProgress.configure({ showSpinner: false })
const queryClient = new QueryClient();



function MyApp({
  Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={pageProps.session}>
        <AdminContextProvider>

          <Component {...pageProps} />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable={false}
            pauseOnHover
            theme="dark"
          />
        </AdminContextProvider>
      </SessionProvider>
    </QueryClientProvider>
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