import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <>
      <Head>
        <title>PerdiDev</title>
        <meta name="description" content="Make you smile with my project" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
