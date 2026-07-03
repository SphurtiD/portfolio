import { Button } from "@/components/ui/button";

export default function ProjectCard({
  title,
  description,
  stack,
  github,
  video,
  note,
}) {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left */}
        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <h2 className="mb-5 text-2xl sm:text-3xl md:text-4xl text-white">
            {title}
          </h2>

          <p className="mb-5 text-base sm:text-lg lg:text-xl leading-8 text-gray-400">
            {description}
          </p>

          <p className="mb-8 text-sm sm:text-base text-purple-300 font-medium">
            {stack}
          </p>

          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-[2px] rounded-full hover:shadow-[0_0_20px_#a855f7] transition duration-300 w-fit">
                <Button className="bg-black text-white rounded-full px-6 py-2 hover:bg-black">
                  View Code
                </Button>
              </div>
            </a>
          )}

          {note && (
            <p className="mt-3 text-sm text-purple-300 italic">
              <span className="font-semibold not-italic">Note:</span> {note}
            </p>
          )}
        </div>

        {/* Right */}
        <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src={video}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
