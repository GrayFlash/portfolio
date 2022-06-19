import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header';


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Gaurav Kumar 😃</title>
        <meta name="description" content="Gaurav Kumar's portfolio site" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
    </div>
  )
}
