// import Link from 'next/link'
// import { useRouter } from 'next/router';

import SocialLinks from "./social-links";


export default function Footer() {
  return (
    <div className="footer">
        <div className="socials">
            <SocialLinks/>
        </div>
        <p>Made with ❤ By Gaurav</p>
    </div>
  )
}