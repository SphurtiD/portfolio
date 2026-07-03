import { brillant } from "../fonts";
import Link from "next/link";

export default function aboutme() {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: "url('/images/bg.gif')" }}
      >
        <div className="hero-content text-center">
          <div className="max-w-5xl">
            <div className="flex justify-center pb-5">
              <div className="relative w-48 h-48 mx-auto group rounded-full overflow-hidden shadow-lg">
                {/* Original photo */}
                <img
                  src="/images/spu.png"
                  alt="Sphurti"
                  className="w-full h-full object-cover absolute inset-0 group-hover:opacity-0 transition-opacity duration-300 ease-in-out"
                />
                {/* Pixelated hover photo */}
                <img
                  src="/images/spu_pixel.png"
                  alt="Pixel Sphurti"
                  className="w-full h-full object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                />
              </div>
            </div>
            <h1 className="text-3xl font-bold pb-3">Hey, There! 👋</h1>
            <h1 className={`${brillant.className} text-3xl font-bold pb-2`}>
              I&apos;m Sphurti <span className="text-purple-600">Dixit</span> !
            </h1>
            <div className="flex justify-center items-center gap-3 mt-2">
              <Link
                href="https://g.dev/sphurtirdixit_dmce" // replace with your real link
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-purple-600 hover:text-purple-700 transition link link-hover"
              >
                <img
                  src="/images/googledev.svg"
                  alt="Google Developer Profile"
                  className="w-5 h-5"
                />
                <span>Check out my Google Developer Profile</span>
              </Link>
            </div>

            <p className="py-2">📍Mumbai, India.</p>
            <p className="py-2">
              🎓 Completed B.E. in Artificial Intelligence & Data Science at
              Datta Meghe College of Engineering, Airoli with 8.32 / 10 CGPA.
            </p>
            <p className="py-2">
              ✨ I&apos;m a curious and creative mind who finds joy in building
              visually appealing web experiences.
            </p>
            <p className="py-2">
              ⚡ I love solving problems, exploring new tools, and turning ideas
              into interactive designs.
            </p>
            <p className="py-2">
              🌙 Mostly found coding with a cup of chai and vibey music under
              the night sky.
            </p>
            <p className="py-2">
              🚀 I started my tech journey diving into Python and machine
              learning, but soon discovered my love for designing and building
              websites. Since then, I&apos;ve been focusing on mastering
              frontend technologies like React, Tailwind CSS, and Next.js.
            </p>
            <p className="mt-6 text-xl flex justify-center">
              Scroll down to know some fun facts about me 👇
            </p>
          </div>
        </div>
      </div>
      <h1
        className={`${brillant.className} text-center mt-10 mb-6 text-3xl font-semibold`}
      >
        Fun Facts
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {/* Card 1 */}
        <div className="card bg-base-100 shadow-md hover:shadow-purple-500 transition-shadow duration-300">
          <div className="card-body text-center">
            <h2 className="text-2xl">🌸</h2>
            <p>I love minimalist design and dark themes.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card bg-base-100 shadow-md hover:shadow-purple-500 transition-shadow duration-300">
          <div className="card-body text-center">
            <h2 className="text-2xl">🎧</h2>
            <p>Always coding with music on loop.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card bg-base-100 shadow-md hover:shadow-purple-500 transition-shadow duration-300">
          <div className="card-body text-center">
            <h2 className="text-2xl">🎮</h2>
            <p>Obsessed with open-world & RPG games.</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card bg-base-100 shadow-md hover:shadow-purple-500 transition-shadow duration-300">
          <div className="card-body text-center">
            <h2 className="text-2xl">🧩</h2>
            <p>I solve Rubik’s Cubes for fun.</p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="card bg-base-100 shadow-md hover:shadow-purple-500 transition-shadow duration-300">
          <div className="card-body text-center">
            <h2 className="text-2xl">🎸</h2>
            <p>Currently learning to play guitar — slow but vibey progress.</p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="card bg-base-100 shadow-md hover:shadow-purple-500 transition-shadow duration-300">
          <div className="card-body text-center">
            <h2 className="text-2xl">🌀</h2>
            <p>
              Huge anime fan — comfort shows and powerful quotes are my fuel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
