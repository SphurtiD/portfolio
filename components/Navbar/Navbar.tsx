import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { brillant } from "@/app/fonts";

export default function Navbar() {
  return (
    <div className="navbar bg-black/60 backdrop-blur-md sticky top-0 z-50 px-4 lg:px-8">

      {/* Mobile Menu */}

      <div className="navbar-start">

        <div className="dropdown lg:hidden">

          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content mt-3 z-[100] p-4 shadow-xl bg-black rounded-box w-64 border border-purple-700"
          >

            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/aboutme">About Me</Link>
            </li>

            <li>
              <Link href="/projects">Projects</Link>
            </li>

            <li>
              <Link href="/skills">Skills</Link>
            </li>

            <li>
              <Link href="/eduexp">Education & Experience</Link>
            </li>

            <li className="mt-4">

              <Link href="/contactme">

                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white w-full">
                  Get in Touch
                </Button>

              </Link>

            </li>

          </ul>

        </div>

        {/* Logo */}

        <Link href="/">
          <h1
            className={`${brillant.className} text-2xl sm:text-3xl font-semibold ml-2`}
          >
            Sphurti{" "}
            <span className="text-purple-700">
              Dixit
            </span>
          </h1>
        </Link>

      </div>

      {/* Desktop Nav */}

      <div className="navbar-center hidden lg:flex">

        <ul className="menu menu-horizontal px-1 gap-2">

          <li><Link href="/" className="text-xl">Home</Link></li>

          <li><Link href="/aboutme" className="text-xl">About Me</Link></li>

          <li><Link href="/projects" className="text-xl">Projects</Link></li>

          <li><Link href="/skills" className="text-xl">Skills</Link></li>

          <li><Link href="/eduexp" className="text-xl">Education & Experience</Link></li>

        </ul>

      </div>

      {/* Right */}

      <div className="navbar-end gap-4">

        <Link
          href="/contactme"
          className="hidden lg:block"
        >

          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-[2px] rounded-full hover:shadow-[0_0_20px_#a855f7] transition duration-300">

            <Button className="bg-black rounded-full text-white px-6 py-2 hover:bg-black">
              Get in Touch
            </Button>

          </div>

        </Link>

        <Link href="/aboutme">

          <Image
            src="/images/spu_pixel.png"
            alt="Pixel Avatar"
            width={42}
            height={42}
            className="rounded-full hover:scale-110 transition duration-300"
          />

        </Link>

      </div>

    </div>
  );
}