import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router';


export default function Header() {
  const router = useRouter();
  return (
    <div className="header">
      <Link href="/"><a className="header_name">Gaurav</a></Link>
      <div className="navbar">
        <Link href="/bio"><a className={router.pathname == "/bio" ? "active" : ""}>Bio</a></Link>
        <Link href="/projects"><a className={router.pathname == "/posts" ? "active" : ""}>Projects</a></Link>
        <Link href="/blogs"><a className={router.pathname == "/talks" ? "active" : ""}>Blogs</a></Link>
        <Link href="/contact"><a className={router.pathname == "/contact" ? "active" : ""}>Contact</a></Link>
      </div>
    </div>
  )
}