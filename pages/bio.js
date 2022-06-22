import Head from 'next/head'
import Header from '../components/header';

export default function Bio() {
    return (
        <div className="container">
            <Head>
                <title>Gaurav Kumar 😃</title>
                <meta name="description" content="Gaurav Kumar's portfolio site" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Header />
            <main className="main">
                {/* TODO: add a image */}
                <h4>About me</h4>
                <p>
                    I'm Gaurav Kumar, a senior undergrad, and a budding software developer. My software development journey started at a winter school/ bootcamp in my freshmen year,
                    and the drive to improve my skill came up by participating in hackathons and building tons of different projects.
                    I have always loved Mathematics and solving problems whether it has been debugging code from logs, finding the issue in soldered circuit,
                    or a problem with real life social consequences.
                </p>
                Some of the problems I have analysed in my college years and ideated something around them has been:
                <br/>
                <ul className="bullet_list">
                    <li>Online Education for physically disabled</li>
                    <li>Receipt Parsing for digitizing record management</li>
                    <li>E2E encrypted chat application that can accessed from multiple devices</li>
                    <li>Bloom's Taxonomy based stream recommendation system</li>
                    <li>Facial landmarks and their impact on emotions</li>
                    <li>Image segmentation and labelling</li>
                </ul>
                Well, these are obviously ain't much but I have surely done some research around some of these and have tried to think of various solutions possible.
                If any of these topics intrigue you, feel free to reach out for a discussion.
                
                <br/><br/>
                <strong>Disclosure:</strong> I have <strong>not</strong> done a very deep analysis on these topics which has gone for a research publication,
                although I did went through some research papers when studying these.
            
                {/* TODO: add education, work experience below */}
            </main>
        </div >
    )
}