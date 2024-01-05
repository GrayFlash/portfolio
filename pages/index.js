import Head from 'next/head'
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
            <h3>Hi, I am Gaurav Kumar</h3>
            <p>
              I completed B.Tech, majoring in Electronics and Communication Engineering from NIT Surat. 
              I am currently as a Backend Engineer at <i>Merpay</i> - fintech division of Mercari 🇯🇵.
              I have also worked on Machine Learning, Automation and Full stack projects, and I am trying
              to build my skillset as a generalist better by picking up similar challenges in my career.
            </p>
          </div>
          <div className='column right'>
          <img className="home-image" width="100%" src="/dept_formal_gk.jpeg" alt="Gaurav Kumar" />
          </div>
        </div>

        <div className='row-text'>
          <p>
            I have always loved Mathematics, to me those numbers, patterns and the underlying logic made a lot
            of sense in terms of practicality. So, I was never sure about becomming a programmer, unless I started
            seeing those patterns here as well.
          </p>
          <p>
            I have been exploring various tech-stacks for past 5 years:
            <ul>
              <li>
                Started with Java as part of High School curriculum, learned OOP and relevant patterns. 
              </li>
              <li>
                Worked on simple web technologies uptill Vanilla JS in freshmen Year of University. 
              </li>
              <li>
                Hackathons were important to me, and I participated in tons of them.
              </li>
              <li>
                Made applications in <b>React native</b>, with the <b>MERN</b> stack initially.
              </li>
              <li>
                Also worked on integration of <b>Machine Learning</b> algorithms with a <b>Flask</b>
                Backend, to improve these projects functionally.
              </li>
              <li>
                Post this, I have got internships and finally first job, where I have worked in
                <b>golang, Python, Java, Vue.js, and Cloud Technologies like AWS, GCP, etc.</b>
              </li>
            </ul>
          <br/>
          These are some of the tech stacks I have worked with, there are some other technologies
          as well, which I have explored till some extent, and I am still trying to do better.
          </p>
          <p>
            I was also a community leader for <b>ACM NIT Surat</b>, the programming student chapter and we conducted various 
            programming events throughout the year, and helped many of my juniors getting started with their journey of
            computer science. A key highlight around my tenure here was organising hackathon named <b>Hack DotSlash</b>.
            This hackathon is quite close to my heart, and I have been rejected here as a participant, only to 
            win it&apos;s next edition, then become it&apos;s lead organizer and mentor it in the 6th edition. And this 4 year 
            association taught me a lot stuff about people, dev-community, devrels and organisations.
          </p>
          <p>
            Well, this should give some insight about me and the kind of things I build.
            Feel free to checkout other section of my website as well, and thanks for visiting!
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
