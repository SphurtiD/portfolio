import { brillant } from '../app/fonts'
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <section
      className="min-h-screen bg-black bg-center bg-cover flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/images/zoom.gif')",
      }}
    >
      <div className="p-8 rounded-xl">
        <h1 className={`${brillant.className} text-5xl font-bold text-white flex justify-center`}>
          Sphurti <span className='text-purple-600'>Dixit</span>
        </h1>
        <p className="mt-4 text-xl flex justify-center">I craft beautiful, functional web experiences.</p>
        <div className='flex col-1 sm:col-2 justify-center py-5 gap-6'>
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-[2px] rounded-full hover:shadow-[0_0_20px_#a855f7] transition duration-300 w-fit">
            <a href="/cvs/Sphurti_CV.pdf" download="Sphurti_Dixit_Resume.pdf">
              <Button className="bg-black text-white font-semibold rounded-full px-6 py-2 hover:bg-black">
                Download Resume
              </Button>
            </a>
          </div>
          <Link href="/projects">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-[2px] rounded-full hover:shadow-[0_0_20px_#a855f7] transition duration-300 w-fit">
              <Button className="bg-black text-white font-semibold rounded-full px-6 py-2 hover:bg-black">View Projects</Button>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}