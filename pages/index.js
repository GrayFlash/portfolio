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
      <main className="mainHome">
        <h3>Gaurav Kumar</h3>
        <i>Jack of all trades, a.k.a Full-Stack developer</i>
        <div className='row'>
          {/* TODO: Add greeting text and some fun fact on left, a greeting  toon on right */}
          <div className='column left'></div>
          <div className='column right'></div>
        </div>
        <div className='row'>
          {/* TODO: add tech-stack */}
          <div className='column left'></div>
          <div className='column right'></div>
        </div>
        <h3>Work in Progress head to bio👷🚧 </h3>
      </main>
    </div>
  )
}
