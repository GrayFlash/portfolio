import Head from 'next/head'
import Footer from '../components/footer';
import Header from '../components/header';

export default function Projects() {
    return (
        <div className="container">
            <Head>
                <title>Gaurav Kumar 😃</title>
                <meta name="description" content="Gaurav Kumar's portfolio site" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Header />
            <br/>
            <br/>
            <div className='mainHome'>
                <h3>Work in Progress 👷🚧 </h3>
            </div>
            <Footer/>
        </div>
    )
}