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
              Engineering. I am currently an intern at <i>Chargebee</i>, where I work with 
              <b> SRE</b> team on building solutions for reliable automation of cloud 
              infrastructure. Cloud Engineering is relativly new for me since I have worked with 
              ML and Backend-intensive projects so far and hence I am trying to do  better.
            </p>
          </div>
          <div className='column right'>
          <img className="home-image" width="100%" src="/dept_formal_gk.jpeg" alt="Gaurav Kumar" />
          </div>
        </div>

        <div className='row-text'>
          <p>
            Internet is huge, and so is my interest in technologies. I have been making
            and breaking code for past 6 years (started with Java in high school).
            For me the love to programming started with the thought of being able to write a logic
            that was suitable to addressing the problems.
          </p>
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
          <p>
            After this point, I spent around 7 months out of 11 of my junior year spending time as a intern at Gojek.
            Here we built two projects that would power the Data Catalog for Gojek, and both of them are open source as
            <a href='https://github.com/odpf/meteor'> meteor</a> and <a href='https://github.com/odpf/compass'>compass</a>.
          </p>
          <p>
            I was also a community leader for ACM NIT Surat, the programming student chapter and we conducted various 
            programming events throughout the year, and helped many of my juniors getting started with their journey of
            computer science. A key highlight around my tenure here was organising hackathon named Hack DotSlash.
            This hackathon is quite close to my heart, and I have been rejected here as a participant, only to 
            win it&apos;s next edition, then become it&apos;s lead organizer and mentor it in the 6th edition. And this 4 year 
            association taught me a lot stuff about people, dev-community, devrels and organisations.
          </p>
          <p>
            Well, this should give some insight about me and the kind of things I build.
            Feel free to checkout other section of my website as well, and thanks for visiting!
          </p>
          <br/>
          <br/>
          <br/>
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
