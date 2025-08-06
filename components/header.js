import Link from 'next/link'
import { useRouter } from 'next/router';


export default function Header() {
  const router = useRouter();
  return (
    <div className="header">
      <Link href="/" className="header_name">Gaurav</Link>
      <div className="navbar">
        <Link href="/work-exp" className={router.pathname == "/work-exp" ? "active" : ""}>Work Exp.</Link>
        <Link href="/blogs" className={router.pathname == "/blogs" ? "active" : ""}>Blogs</Link>
        <Link href="/contact" className={router.pathname == "/contact" ? "active" : ""}>Contact</Link>
      </div>
    </div>
  )
}