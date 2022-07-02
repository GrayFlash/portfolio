import Head from 'next/head'
import Header from '../components/header';
import SocialLinks from '../components/social-links';

export default function Contact() {
    return (
        <div className="container">
            <Head>
                <title>Gaurav Kumar 😃</title>
                <meta name="description" content="Gaurav Kumar's portfolio site" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Header />

            <br/>
            {/* <br/>
            <div className='mainHome'>
                <h3>Work in Progress 👷🚧 </h3>
            </div> */}

            <div className='socials'>
                <h3>Feel free to get in touch</h3>
                <p>I am into open-source projects, participating in a hackathon, coding contests, watching anime/series, and discussing various opportunities in tech.
                    If you have something we can discuss together, any opportunity that may excite me, or if there is something I can help you with, feel free to reach out.
                    You can either send an <a href='mailto:gk74533@gmail.com'>email</a> or reach out on any of my social handle:
                </p>
                <SocialLinks/>
            </div>
        </div>
    )
}