// import Link from 'next/link'
// import { useRouter } from 'next/router';

import SocialLinks from "./social-links";


export default function Footer() {
  return (
    <div className="footer">
        <p>
            <div className="socials">
                <SocialLinks/>
            </div>
            Made with ❤ By Gaurav
        </p>
    </div>
  )
}