import { brillant } from "../fonts";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function eduexp() {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/images/path.gif)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className={`${brillant.className} mb-5 text-5xl font-bold`}>🎓 EDUCATION</h1>
            <p className="mb-5">B.E. in Artificial Intelligence & Data Science</p>
            <p className="mb-5">Datta Meghe College of Engineering, Airoli, Navi Mumbai</p>
            <p className="mb-5">Expected Graduation: May 2026</p>
            <p className="mt-6 mb-5">Relevant Coursework: Data Structures, Machine Learning, Web Development</p>
            <p className="mt-6 text-xl flex justify-center">Scroll down to check out Achievements, Internships & Certififcates 👇</p>
          </div>
        </div>
      </div>
      
      <h1 className={`${brillant.className} text-center mt-10 mb-6 text-3xl font-semibold`}>💼 Experience & Internships</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {/* Card 1 */}
        <div className="card bg-base-100 shadow-md hover:shadow-purple-500 transition-shadow duration-300">
          <div className="card-body">
            <h2 className="text-2xl"><b>Data Science Internship</b>, Prodigy InfoTech</h2>
            <small className="text-md">September 2024</small>
            <ul className="text-lg">
              <li>• Analyzed datasets to extract meaningful insights and patterns.</li>
              <li>• Conducted data preprocessing and visualization to enhance dataset quality.</li>
              <li>• Designed predictive models for business use cases, improving decision-making processes.</li>
              <li>• Tools used: Python, Pandas, NumPy, Matplotlib,etc.</li>
            </ul>
            <Link href="/cvs/Certificate.pdf">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-[2px] rounded-full hover:shadow-[0_0_20px_#a855f7] transition duration-300 w-fit">
                <Button className="bg-black text-white font-semibold rounded-full px-6 py-4 hover:bg-black">View</Button>
              </div>
            </Link>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card bg-base-100 shadow-md hover:shadow-purple-500 transition-shadow duration-300">
          <div className="card-body">
            <h2 className="text-2xl"><b>Google AI-ML Virtual Internship</b>, Approved by AICTE</h2>
            <small className="text-md">June 2024</small>
            <ul className="text-lg">
              <li>• Explored foundational concepts of Artificial Intelligence and Machine Learning.</li>
              <li>• Worked on practical projects to implement ML models for solving real-world problems.</li>
              <li>• Gained hands-on experience in Python and various ML frameworks.</li>
              <li>• Developed a ML model to classify objects using simple Computer vision techniques.</li>
            </ul>
            <Link href="/cvs/AICTE_INTERNSHIP.pdf">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-[2px] rounded-full hover:shadow-[0_0_20px_#a855f7] transition duration-300 w-fit">
                <Button className="bg-black text-white font-semibold rounded-full px-6 py-4 hover:bg-black">View</Button>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <h1 className={`${brillant.className} text-center mt-10 mb-6 text-3xl font-semibold`}>🏆 Achievements & Highlights</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {/* Card 1 */}
        <div className="card bg-base-100 shadow-md hover:shadow-purple-500 transition-shadow duration-300">
          <div className="card-body">
            <h2 className="text-2xl"><b>🌟 Google Girl Hackathon 2025</b>– Round 1 Shortlisted</h2>
            <p className="text-lg">Selected in the first round of Google’s women-centric hackathon for innovation and problem-solving in tech.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card bg-base-100 shadow-md hover:shadow-purple-500 transition-shadow duration-300">
          <div className="card-body">
            <h2 className="text-2xl"><b>🚀 Quasar 3.0 National Hackathon</b>– Top 50 out of 2500+ Teams</h2>
            <p className="text-lg">Built Smart Competency, a skill-mapping and career-alignment app for students. Selected in the top 2% nationwide.</p>
            <small className="text-md">(Team of 4 | Next.js, FastApi.js, PostgreSQL)</small>
            <Link href="/cvs/hack1.pdf" target="_blank" rel="noopener noreferrer">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-[2px] rounded-full hover:shadow-[0_0_20px_#a855f7] transition duration-300 w-fit">
                <Button className="bg-black text-white font-semibold rounded-full px-6 py-4 hover:bg-black">View</Button>
              </div>
            </Link>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card bg-base-100 shadow-md hover:shadow-purple-500 transition-shadow duration-300">
          <div className="card-body">
            <h2 className="text-2xl"><b>👩‍💻 Pair Programming App</b>– Top 25 at Intra-College Hackathon</h2>
            <p className="text-lg">Built a real-time platform for developers to pair up and collaborate on coding tasks. Reached top 25 out of 52 teams.</p>
            <small className="text-md">(Team of 4 | Next.js PostgreSQl)</small>
            <Link href="/cvs/hackhive.pdf" target="_blank" rel="noopener noreferrer">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-[2px] rounded-full hover:shadow-[0_0_20px_#a855f7] transition duration-300 w-fit">
                <Button className="bg-black text-white font-semibold rounded-full px-6 py-4 hover:bg-black">View</Button>
              </div>
            </Link>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card bg-base-100 shadow-md hover:shadow-purple-500 transition-shadow duration-300">
          <div className="card-body">
            <h2 className="text-2xl"><b>🥉 Technaari 2024</b>– 3rd Place Winner</h2>
            <p className="text-lg">Secured third place in a girls-only tech quiz and logic-based competition organized by DMCE, covering current tools, languages, and frameworks.</p>
          </div>
        </div>
      </div>
    </div>
  );
}