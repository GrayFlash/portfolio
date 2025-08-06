import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/footer';
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
            <h3>Hi, I&apos;m Gaurav.</h3>
            <p>
              I currently work as a Software Engineer at <i>Merpay</i> - the fintech division of Mercari 🇯🇵.
              My role primarily involves contributing as a Backend engineer to the golang microservices we own, but
              I have also been contributing to other stages of PDLC & SDLC, including specification, testing feasibility,
              estimating work efforts, design, and development flow. I have also contributed to frontend as well as
              platform infrastructure development, investigation, and migration as required for my products and services.
              
              I graduated in May 2023 from NIT Surat, India. I have also worked on Machine Learning,
              automation, and full-stack projects, and I am trying
              to build my skillset as a generalist by taking on similar challenges in my career.
            </p>
          </div>
          <div className='column right'>
          <Image className="home-image" width={300} height={330} src="/dept_formal_gk.jpeg" alt="Gaurav Kumar" />
          </div>
        </div>

        <div className='row-text'>
          <p>
            I have always loved Mathematics. To me, those numbers, patterns, and the underlying logic made a lot
            of sense in terms of practicality. So, I was never sure about becoming a programmer, until I started
            seeing those patterns here as well.
          </p>
          <p>
            I have been exploring various tech stacks for the past 5 years:
          </p>
          <ul>
            <li>
              Started with Java as part of the high school curriculum, learned OOP and relevant patterns. 
            </li>
            <li>
              Worked on simple web technologies up to Vanilla JS in my freshman year of university. 
            </li>
            <li>
              Hackathons were important to me, and I participated in tons of them.
            </li>
            <li>
              Made applications in <b>React Native</b>, with the <b>MERN</b> stack initially.
            </li>
            <li>
              Also worked on integrating <b>Machine Learning</b> algorithms with a <b>Flask</b>
              backend to improve these projects functionally.
            </li>
            <li>
              After this, I got internships and finally my first job, where I have worked with
              <b>Go, Python, Java, Vue.js, and cloud technologies like AWS, GCP, etc.</b>
            </li>
          </ul>
          <p>
            These are some of the tech stacks I have worked with. There are some other technologies
            as well that I have explored to some extent, and I am still trying to improve.
          </p>
          <p>
            I was also a community leader for <b>ACM NIT Surat</b>, the programming student chapter, and we conducted various 
            programming events throughout the year, helping many of my juniors get started with their journey in
            computer science. A key highlight of my tenure here was organizing a hackathon named <b>Hack DotSlash</b>.
            This hackathon is quite close to my heart - I was rejected here as a participant, only to 
            win its next edition, then become its lead organizer and mentor it in the 6th edition. This 4-year 
            association taught me a lot about people, the dev community, DevRel, and organizations.
          </p>
          <p>
            Well, this should give you some insight about me and the kind of things I build.
            Feel free to check out other sections of my website as well, and thanks for visiting!
          </p>
          <br/>
        </div>
        <div className='row'>
          {/* TODO: add tech-stack */}
          <div className='column left'></div>
          <div className='column right'></div>
        </div>
        {/* <h3>Work in Progress head to bio👷🚧 </h3> */}
      </main>

      <Footer/>
    </div>
  )
}
