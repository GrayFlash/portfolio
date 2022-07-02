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
        {/* <h3>Gaurav Kumar</h3>
        <i>Jack of all trades, a.k.a Full-Stack developer</i> */}
        <div className='row'>
          {/* TODO: Add greeting text and some fun fact on left, a greeting  toon on right */}
          <div className='column left'>
            <h3>Hi, I am Gaurav Kumar</h3>
            <p>
              I am a final year undergrad in B.Tech, majoring in Electronics and Communication 
              Engineering. Internet is huge, and so is my interest in technologies. I have been making
              and breaking code for past 6 years (started with Java in high school).
              For me the love to programming started with the thought of being able to write a logic
              that was suitable to addressing the problems.
            </p>
          </div>
          <div className='column right'>
          <img className="home-image" width="100%" src="/young-programmer-yellow-bg.jpeg" alt="Gaurav Kumar" />
          </div>
        </div>

        <div className='row-text'>
          <p>
            I have been exploring various tech-stacks for past 3 years, started with some simple web development,
            in my sophomore year continued with Machine Learning where I built most of my hackathon projects and
            was building models, the api endpoints required to fetch prediction to the frontend part and building
            some react components for displaying the part. My sophomore year at college was a breakthrough year for
            my skill set and career. I won my first hackathon, got in depths of Machine Learning algorithms, went
            through different Data Structures and Algorithms, and participated in numerous challenges. I applied
            for GSoC, and went through multiple open source projects learning tools of trade I never used before (like
            Semantic web, canvas in HTML, JS Vanilla, Docker, etc).
          </p>
          <br/>
          <p>
            Well, I messed up and was not selected for GSoC. But, after this rejection I applied for numerous openings
            at various startups and a few MnC. At this point I got selected for Internship at GoJek, which was much
            more handsome than I could have wished for at that point. This internship was a big changing point for my
            career and I worked with Data Fabric team for four months, consistently learning how product development
            in golang takes place, and learning technologies related to cloud-native, and understanding various
            architecture tradeoffs. Here I also learned some coding practices like TDD, understood Object Paradigm,
            and other concepts.
          </p>
        </div>
        <div className='row'>
          {/* TODO: add tech-stack */}
          <div className='column left'></div>
          <div className='column right'></div>
        </div>
        {/* <h3>Work in Progress head to bio👷🚧 </h3> */}
      </main>
    </div>
  )
}
