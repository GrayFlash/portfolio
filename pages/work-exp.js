import Head from 'next/head'
import WorkExperiences from '../components/employments';
import Footer from '../components/footer';
import Header from '../components/header';

export default function WorkExperience() {
    return (
        <div className="container">
            <Head>
                <title>Gaurav Kumar 😃</title>
                <meta name="description" content="Gaurav Kumar's portfolio site" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Header />
            <br/>
            <p>
                I got my first internship at Gojek close to the end of my
                sophomore year at my B.Tech degree. Life has been pretty
                different in a lot of ways sunce then. A list of my work
                experience is:
            </p>
            <div className='mainHome'>
                <WorkExperiences/>
                <br/>
            </div>

            <Footer/>
        </div>
    )
}