import Link from "next/link"
import { Button } from "../ui/button"
import { brillant } from "@/app/fonts"
import Image from "next/image"

export default function Navbar(){
    return(
        <nav className="flex items-center justify-between pb-4 sm:pb-6 lg:pb-8">
           <div className="flex items-center gap-6">
                <Link href="/">
                    <h1 className={`${brillant.className} text-3xl font-semibold`}>Sphurti <span className="text-purple-700">Dixit</span></h1>
                </Link>
                <div className="sm:flex items-center gap-6">
                    <Link href="/" className="text-lg font-medium hover:text-purple-600 transition-colors">Home</Link>
                    <Link href="/aboutme" className="text-lg font-medium hover:text-purple-600 transition-colors">About Me</Link>
                    <Link href="/projects" className="text-lg font-medium hover:text-purple-600 transition-colors">Projects</Link>
                    <Link href="/skills" className="text-lg font-medium hover:text-purple-600 transition-colors">Skills</Link>
                    <Link href="/eduexp" className="text-lg font-medium hover:text-purple-600 transition-colors">Experience & Education</Link>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <Link href="/contactme">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-[2px] rounded-full hover:shadow-[0_0_20px_#a855f7] transition duration-300 w-fit">
                        <Button className="bg-black text-white font-semibold rounded-full px-6 py-2 hover:bg-black">Get in Touch</Button>
                    </div>
                </Link>
                <div className="rounded-full hover:shadow-[0_0_20px_#a855f7] transition duration-300 w-fit">
                    <Link href="/aboutme"><Image src="/images/spu_pixel.png" alt="sphurti_pixel" height={40} width={40} className="rounded-full"></Image></Link>
                </div>
            </div>
        </nav>
    )
}