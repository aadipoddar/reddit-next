import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Reddit</title>
        <meta name='description' content='Reddit Clone with Next JS' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h1>Reddit</h1>
    </div>
  )
}

export default Home
