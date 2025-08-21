import Link from "next/link"
import Image from 'next/image'

export default function Footer(){
    return(
        <footer className="footer footer-horizontal footer-center text-base-content rounded pt-10">
            <nav>
                <div className="grid grid-flow-col gap-4">
                <Link href="https://github.com/SphurtiD">
                    <Image src="/images/github.svg" width={24} height={24} alt="GitHub"/>
                </Link>
                <Link href="https://www.linkedin.com/in/sphurti-dixit-b430132b0/">
                    <Image src="/images/linkedIn.svg" width={24} height={24} alt="LinkedIn"/>
                </Link>
                <Link href="https://www.instagram.com/_.yuukiiii._/">
                    <Image src="/images/insta.svg" width={24} height={24} alt="Instagram"/>
                </Link>
                </div>
            </nav>
            <aside>
                <p>Made with 💜 by Sphurti Dixit - Copyright © {new Date().getFullYear()}</p>
            </aside>
        </footer>
    )
}