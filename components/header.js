import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router';


export default function Header() {
  const router = useRouter();
  return (
    <div className="header">
      <Link href="/"><a className="header_name">Gaurav</a></Link>
      <div className="navbar">
        <Link href="/work-exp"><a className={router.pathname == "/work-exp" ? "active" : ""}>Work Exp.</a></Link>
        <Link href="/projects"><a className={router.pathname == "/projects" ? "active" : ""}>Projects</a></Link>
        <Link href="/blogs"><a className={router.pathname == "/blogs" ? "active" : ""}>Blogs</a></Link>
        <Link href="/contact"><a className={router.pathname == "/contact" ? "active" : ""}>Contact</a></Link>
      </div>
    </div>
  )
}