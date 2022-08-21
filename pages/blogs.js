import Head from 'next/head'
import Header from '../components/header';
import BlogList from '../components/blog-list';
export default function Blogs() {
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
                {/* <h3>Work in Progress 👷🚧 </h3> */}
                I am yet to publish most of the personal blogs I have written. Meanwhile, here are some of the technical blogs I have published down the line:
            </div>
            <BlogList/>
        </div>
    )
}