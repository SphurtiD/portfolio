import { Button } from "@/components/ui/button";
import Link from "next/link";
import { brillant } from "../fonts";

export default function Projects() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="min-h-screen bg-black bg-center bg-cover flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('/images/circle.gif')",
        }}
      >
        <div className="p-8 rounded-xl">
          <h1
            className={`${brillant.className} text-5xl font-bold text-white flex justify-center`}
          >
            🧩 Projects
          </h1>
          <p className="mt-4 text-xl flex justify-center">
            I craft beautiful, functional web experiences.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="">
        <div className="py-12 px-4 mx-auto max-w-screen-xl lg:py-20 grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Project Description */}
          <div className="flex flex-col justify-center">
            <h2
              className={`${brillant.className} mb-4 text-3xl font-extrabold tracking-tight leading-tight text-gray-900 md:text-4xl dark:text-white`}
            >
              RAYS — Smart Healthcare App
            </h2>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              A full-stack health companion app to track, monitor, and suggest
              medical remedies. Built using Next.js. Faced some Django
              integration issues, but UI/UX is on point and functional.
            </p>
            <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
              <Link href="https://github.com/SphurtiD/code_trial">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-[2px] rounded-full hover:shadow-[0_0_20px_#a855f7] transition duration-300 w-fit">
                  <Button className="bg-black text-white font-semibold rounded-full px-6 py-2 hover:bg-black">
                    View Code
                  </Button>
                </div>
              </Link>
            </div>
          </div>

          {/* Video Embed */}
          <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/hJ8C7MjFArs?si=M27VNJKabTVr1jF8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/>
          </div>
        </div>
      </section>

      {/* You can duplicate the above block and replace content for other projects like your dev pair programming app */}
    </div>
  );
}