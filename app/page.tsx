import { brillant } from "../app/fonts";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <section
      className="min-h-screen bg-black bg-cover bg-center flex items-center justify-center text-white overflow-x-hidden px-4"
      style={{
        backgroundImage: "url('/images/zoom.gif')",
      }}
    >
      <div className="w-full max-w-5xl px-4 sm:px-6 md:px-8 rounded-xl text-center">
        <h1
          className={`${brillant.className} text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-white flex flex-wrap justify-center gap-2 break-words`}
        >
          Sphurti <span className="text-purple-600">Dixit</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-center max-w-xl mx-auto px-2">
          I craft beautiful, functional web experiences.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center py-5 gap-4">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-[2px] rounded-full hover:shadow-[0_0_20px_#a855f7] transition duration-300 w-fit">
            <a
              href="/cvs/Sphurti_Dixit_CV.pdf"
              download="Sphurti_Dixit_Resume.pdf"
            >
              <Button className="w-full sm:w-auto bg-black text-white font-semibold rounded-full px-6 py-2 hover:bg-black">
                Download Resume
              </Button>
            </a>
          </div>
          <Link href="/projects">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-[2px] rounded-full hover:shadow-[0_0_20px_#a855f7] transition duration-300 w-fit">
              <Button className="bg-black text-white font-semibold rounded-full px-6 py-2 hover:bg-black">
                View Projects
              </Button>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
